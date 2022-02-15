import { useState } from "react";
import ticket from "../../api/ticket";
import { userState } from "../../components/atoms";
import { useRecoilValue } from "recoil";
import ReCAPTCHA from "react-google-recaptcha";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const TESTKEY = '6LfINnkeAAAAAOH8YfXAzYOwPU48yFeQuTdk_f95';

export default function () {

  const [loading, setLoading] = useState(false);
  const [captcha, setcaptcha] = useState(false);
  const [JMI,setJMI] = useState({
    status: false,
    ID: ""
  });
  const [couponCode,setcouponCode] = useState("");

  const rows = ["name", "email"];
  const [Phone, setPhone] = useState("");
  const userData = useRecoilValue(userState);

  const JMIStudentHandler = (e,type) => {
    if(type === 'checkbox'){
      setJMI({
        status: e.target.checked,
        ID: ""
      })
    }else{
      setJMI({
        ...JMI,
        ID: e.target.value
      })
    }
  }

  const createOrder = async (amount) => {
    setLoading(true);
    try {
      await displayRazorpay(amount);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  async function displayRazorpay(selectedAmount) {
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
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        try {
          const res = await ticket.paymentSuccess(data);
          if (res.data.status) console.log("paymentData,", res.data);
          alert("paymentsuccessfull, see console");
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
  }
  const paymentHandler = async (e) => {
    e.preventDefault();
    const phoneReg = /^\d{10}$/;

    if (!phoneReg.test(Phone)) {
      alert("Phone number is invalid");
      return;
    } else if (!captcha) {
      alert("Please verify captcha");
      return;
    }

    try {

      const data = {
        name: userData.name,
        email: userData.email,
        phone: Phone,
        JMIID: JMI.status ? JMI.ID : "",
        couponCode: couponCode
      };
      const res = await ticket.paymentInitiate(data);

      const {amount} = res.data;
      createOrder(amount);

    } catch (err) {
      console.log(err);
      throw err;
    }


  };

  return (
    <>
      <div className={`font-mono flex w-full`}>
        <div className={`w-1/2`}>

        </div>
        <div className={`bg-white w-1/2`}>
          <div className={`flex flex-col justify-center items-center py-5 my-5 pr-9 border-2 border-red-500 border-dotted mr-7`}>
            <h1 className={`text-2xl py-8`}>Checkout Page</h1>
            <div className={`flex flex-col w-full px-28 py-5 `}>
              {rows.map((row, index) => {
                return (
                  <div key={row} className={`flex my-4 p-3 bg-gray-400/20 rounded-md`}>
                    <div className={`flex-1`}>{row}</div>
                    <div className={` font-bold opacity-70`} style={{ flex: 3 }}>
                      {userData[row]}
                    </div>
                  </div>
                );
              })}
              <div className={`flex my-4 p-3`}>
                <div className={`flex-1`}>
                  Phone<span className="text-red-500">*</span>
                </div>
                <div className={` font-bold`} style={{ flex: 3 }}>
                  <input
                    className={`focus:outline-none w-full`}
                    placeholder="Enter your Phone Number"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={Phone}
                  />
                </div>
              </div>
              <div className={`flex flex-col my-2 p-3 justify-center items-center`}>
                <div className={`flex-1 flex justify-center items-center`}>
                  <input type={`checkbox`} className={` mx-2 self-center bg-red-400`} 
                  onChange={(e) => JMIStudentHandler(e,'checkbox')} />
                  <label className={`self-center -mb-1`}>Are you a JMI student?<span className="text-red-500">*</span></label>
                </div>
                <input 
                  placeholder="Enter your JMI Application Number" 
                  className={`w-full p-3 my-2 border-2 rounded-md border-dotted border-red-100 ${JMI.status ? " opacity-100 pointer-events-auto mt-4" : "-mt-20 opacity-0 pointer-events-none"} transition-all outline-none` }
                  onChange={(e) => JMIStudentHandler(e,'input')}
                  value={JMI.ID}
                  />
              </div>
              <div className={`flex my-4 p-3`}>
                <div className={`flex-1 whitespace-nowrap`}>
                  Coupun Code
                </div>
                <div className={` font-bold ml-3`} style={{ flex: 3 }}>
                  <input
                    className={`focus:outline-none w-full`}
                    placeholder="Enter Coupon Code(If Any)"
                    onChange={(e) => {
                      setcouponCode(e.target.value);
                    }}
                    value={couponCode}
                  />
                </div>
              </div>
            </div>

            <ReCAPTCHA
              sitekey={TESTKEY}
              onChange={() => setcaptcha(true)}
            />
            <div className={`my-10`}>
              <button
                onClick={(e) => paymentHandler(e)}
                className={`p-3 bg-red-500 text-white shadow-lg shadow-red-500/10 hover:shadow-red-500/30 transition-all`}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
