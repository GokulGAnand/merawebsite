import Divider from '@/components/utils/Divider';
import { numberToINR } from '@/utils/convert-to-inr';
import React from 'react';
import { NxtButton } from '../../components/NextButton';

interface Order {
  item: string;
  value: string;
}

interface Props {
  order: Order[];
  handleSubmit: () => void;
}

export default function OrderSummary(props: Props) {
  const { order, handleSubmit } = props;
  const total = order?.reduce((sum, item) => sum + parseFloat(item.value), 0);

  function handlePay() {
    handleSubmit();
  }
  return (
    <div>
      <div className='text-stepsText text-lg leading-normal mb-5 mt-6 font-medium'>
        Order Summary
      </div>
      <div className='text-sm font-normal text-subHeadingColor mb-6'>
        Please proceed to razorpay getaway
      </div>
      <div className='flex flex-col gap-4'>
        {order?.map((item: { item: string; value: string }) => {
          return (
            <div
              key={item.value}
              className='flex justify-between text-orderSummary text-md font-normal leading-normal'
            >
              <div>{item.item}:</div>
              <div>{numberToINR(item.value ?? 0)}</div>
            </div>
          );
        })}
      </div>
      <div>
        <Divider />
      </div>
      <div className='flex justify-between text-orderSummary text-md font-normal leading-normal'>
        <div>Total:</div>
        <div>{numberToINR(total ?? 0)}</div>
      </div>

      <div className='my-8'>
        <NxtButton btnText='Pay now' onClick={handlePay} />
      </div>
    </div>
  );
}
