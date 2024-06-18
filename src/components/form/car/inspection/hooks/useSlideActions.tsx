import { useInspectionCar } from '@/lib/services/inspection/post';
import { useInspectionStore } from '@/lib/store/inspection-store';
import { deriveCarData } from '../../sell/hooks/useSlideActions';
import { errorMessageParser } from '@/utils/error';
import { usePaymentOrder } from '@/lib/services/inspection/payment/post';
import { axiosInstance } from '@/lib/axios/axiosInstance';
import { OrderData } from '@/lib/services/inspection/payment/types';

export const useSlideActions = () => {
  // OTP VERIFY - INSPECTION
  const {
    addressOne,
    addressTwo,
    district,
    chips: inspectionChips,
    pin,
    phone,
    incrementPage,
    date,
    clearAll,
  } = useInspectionStore();
  const inspection = useInspectionCar();
  const inspectionData = deriveCarData(inspectionChips);
  const handleInspectionOtp = (otpNum: number) => {
    inspection.mutate(
      {
        otp: otpNum,
        Adress: addressOne + ',' + addressTwo,
        city: district,
        inspectionType: inspectionData?.type,
        pinCode: pin,
        proposeOfInspection: 'INSPECTION',
        sellerMobileNumber: phone,
        dateAndTime: date,
      },
      {
        onSuccess: () => {
          incrementPage();
        },
      },
    );
  };

  // Payment Order
  const payment = usePaymentOrder();
  const initPayment = (res: OrderData) => {
    const options = {
      key: process.env.RZP_KEY_ID,
      amount: res.amount,
      currency: res.currency,
      name: 'Mera Cars Inspection Transaction',
      description: 'Inspection Transaction',
      order_id: res.id,
      handler: async (response: {
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        try {
          axiosInstance
            .post(`lead/paymentVerified`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: res.id,
              razorpay_signature: response.razorpay_signature,
            })
            .then(() => {
              incrementPage();
              clearAll();
            });
        } catch (err) {
          console.log(errorMessageParser(err));
        }
      },
      theme: {
        color: '#3970B7',
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  const handlePaymentOrder = () => {
    payment.mutate(
      {
        amount: 50000,
        sellerMobileNumber: phone,
      },
      {
        onSuccess: (res) => {
          initPayment(res.data.data);
        },
        onError: (err) => console.log(errorMessageParser(err)),
      },
    );
  };
  console.log(inspection, 'inspection');
  return {
    handleInspectionOtp,
    apiError: inspection.error,
    handlePaymentOrder,
  };
};
