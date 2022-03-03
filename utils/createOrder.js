import { loadScript } from './index'
import ticket from '../api/ticket'


async function displayRazorpay(selectedAmount, cb, couponCode) {

  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // creating a new order
  const result = await ticket.createOrder(selectedAmount);

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "TEDxJMI",
    image: "https://i.ibb.co/ncZ8qLG/image.png",
    order_id: order_id,
    modal: {
      ondismiss: () => {
        cb({
          msg: 'rejected'
        })
      },
    },
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        amount: amount,
        coupon: couponCode,
      };
      try {
        const res = await ticket.paymentSuccess(data);
        cb(res.data)
        return res.data
      } catch (e) {
        alert(e);
        console.log(e);
      }
    },
    prefill: {
      // email: "idk@tedxjmi.org",
    },
    notes: {
      address: "TEDxJMI",
    },
    theme: {
      color: "white",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();

  return paymentObject;

}
const createOrder = async (amount, cb, couponCode) => {
  try {
    return await displayRazorpay(amount, cb, couponCode);
  } catch (e) {
    console.log(e);
  }
};
export default createOrder