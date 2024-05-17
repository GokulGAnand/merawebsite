'use client';
import React, { useEffect, useState } from 'react';
import ButtonOption from './ButtonOption';

interface DataProps {
  popular: {
    id: string;
    logo_with_name: string;
  }[];
}

async function getData() {
  const res = await fetch(
    'https://api.spinny.com/v3/api/catalogue/make-list?popular_count=11',
  );
  return res.json();
}

export default function BrandOptions() {
  const [data, setData] = useState<DataProps>();

  useEffect(() => {
    const response = getData();
    response.then((res) => {
      return setData(res);
    });
  }, []);

  return (
    data && (
      <div className='grid lg:grid-cols-6 grid-cols-3 justify-between gap-5'>
        {data?.popular?.slice(0, 6)?.map((brand) => {
          return <ButtonOption key={brand.id} imgSrc={brand.logo_with_name} />;
        })}
      </div>
    )
  );
}
