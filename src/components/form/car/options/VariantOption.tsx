'use client';
import React, { useEffect, useState } from 'react';
import { useFormStore } from '@/lib/store/store';
import { Options } from './type';
import { extractValuesByKey } from '@/utils/extract-values-by-key';
import { transformStringsToObjects } from '@/utils/transform-string-to-objects';
import { OptionsWithHeading } from './OptionsWithHeading';
import { SearchVariantOptions } from './SearchVariantOptions';

interface DataProps {
  results: Options[];
}

async function getData(modelID: string, year: string) {
  const params = new URLSearchParams({
    model: modelID,
    make_year: year,
    page_size: '100',
    page: '1',
    is_public: 'true',
    sell_page_filter: 'true',
  });
  const res = await fetch(
    `https://api.spinny.com/v3/api/catalogue/variant-list?${params.toString()}`,
  );
  return res.json();
}

export default function VariantOptions() {
  const [data, setData] = useState<DataProps>();
  const { chips, selections } = useFormStore();
  const model = chips?.find((item: { type: string }) => item.type === 'model');
  const year = chips?.find((item: { type: string }) => item.type === 'year');

  useEffect(() => {
    const response = getData(model?.value, year?.value);
    response.then((res) => {
      return setData(res);
    });
  }, [model?.value, year?.value]);
  const varients = data?.results ?? [];
  const fuelVarients = extractValuesByKey(varients, 'fuel_type');
  const options = transformStringsToObjects(fuelVarients);

  const selectedFuel = selections.find(
    (item: { type: string }) => item.type === 'fuel',
  );
  const selectedTransmission = selections.find(
    (item: { type: string }) => item.type === 'transmission',
  );
  const fuelType = selectedFuel?.value;
  const transmissionType = selectedTransmission?.value;

  // Filtering Transmission Opts w.r.t Fuel
  const filteredVarients = varients?.filter(
    (item) => item.fuel_type === fuelType,
  );
  const transmissions = extractValuesByKey(
    filteredVarients,
    'transmission_type',
  );
  const transmissionOpts = transformStringsToObjects(transmissions);

  // Filtering Variants Opts w.r.t. Fuel and Transmission
  const varientOpts = varients?.filter(
    (varient) =>
      varient.fuel_type === fuelType &&
      varient.transmission_type === transmissionType,
  );

  const showTransmission = selectedFuel && !selectedTransmission;
  const showVarients = selectedFuel && selectedTransmission;

  return data ? (
    <>
      {!selectedFuel && (
        <OptionsWithHeading
          heading='Select Fuel Type'
          options={options}
          optionType='fuel'
        />
      )}
      {showTransmission && (
        <OptionsWithHeading
          heading='Select Transmission Type'
          options={transmissionOpts}
          optionType='transmission'
        />
      )}
      {showVarients && varientOpts.length && (
        <SearchVariantOptions varients={varientOpts} />
      )}
    </>
  ) : (
    <>Loading...</>
  );
}
