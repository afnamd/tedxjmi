import { useEffect, useRef, useState } from "react";
import ticket from "../../api/ticket";
import { userState } from "../../components/atoms";
import { useRecoilState } from "recoil";
import ReCAPTCHA from "react-google-recaptcha";
import { loadScript, createOrder } from '../../utils'
import LoadingScreen from "../loading_screen";
import LoadingCircle from "../loading_circle";
import Link from "next/link";
import auth from "../../api/auth";


const TESTKEY = "6LfINnkeAAAAAOH8YfXAzYOwPU48yFeQuTdk_f95";
const Input = ({ label, defaultValue = "", onChange = () => { } }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const handleChange = (value) => {
    setValue(value);
    onChange(value);
  };
  return (
    <div class="w-full flex flex-col p-3 gap-2 relative transition-all">
      <span
        className={`absolute left-4 duration-100 bg-white pl-2 pr-2 ${focus || value
          ? "top-1 left-7 text-xs text-gray-500 z-50"
          : "z-0  top-6 left-7 text-gray-500"
          }`}
      >
        {label}
      </span>
      <input
        className="z-10 mahinput"
        style={{ backgroundColor: "rgba(255, 242, 0, 0)" }}
        type="text"
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
        }}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default function () {
  const [captcha, setcaptcha] = useState(false);
  const [JMI, setJMI] = useState({
    status: false,
    ID: "",
  });
  const [couponCode, setcouponCode] = useState("");
  const [amount, setamount] = useState({
    base: 1000,
    final: 1000
  });

  const [discountData, setdiscountData] = useState([]);
  const rows = ["name", "email"];
  const [Phone, setPhone] = useState("");
  const [userData, setUserData] = useRecoilState(userState);
  const [paymentStatus, setPaymentStatus] = useState({
    msg: 'nothing'
  })
  const [loading, setLoading] = useState(false)

  const JMIStudentHandler = (e, type) => {
    if (type === "checkbox") {
      setJMI({
        status: e.target.checked,
        ID: "",
      });
    } else {
      setJMI({
        ...JMI,
        ID: e,
      });
    }
  };
  console.log(loading, !userData.isAuth)
  useEffect(() => {
    if (paymentStatus.msg === 'rejected')
      alert('something went wrong')
    console.log(paymentStatus)
  }, [paymentStatus]);
  const paymnetSuccessCB = (data) => {
    setPaymentStatus(data)
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
        couponCode: couponCode,
      };
      const res = await ticket.paymentInitiate(data);
      console.log(res.data);
      const { amount } = res.data;
      setPaymentStatus({ msg: 'processing' })
      res = await createOrder(amount, paymnetSuccessCB);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  let cancelToken;

  useEffect(async () => {
    const senddata = {
      counpon_code: couponCode,
      JMIID: JMI.ID,
    };
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation Cancelled due to new request");
    }

    console.log(senddata)

    try {
      setLoading(true)
      const res = await ticket.getTicketPrice(senddata);
      setLoading(false)
      console.log("Result : ", res, data);
      const { data } = res;

      console.log(data);

      setdiscountData(data.data.discount);
      setamount({
        ...amount,
        final: data.data.finalPrice
      })


    } catch (err) {
      console.log(err);
      throw err;
    }
  }, [JMI, couponCode]);
  const handleLogout = async () => {
    setUserData({ ...userData, isAuth: null })
    try {
      await auth.logout()
      setUserData({ isAuth: false })
    } catch (e) {
      setUserData({ ...userData, isAuth: true })
    }
  }
  return (
    <>
      {
        (paymentStatus.msg === 'processing' || !userData.isAuth) &&
        <LoadingScreen />
      }
      <div
        className={`font-Roboto flex w-full flex-col h-screen bg-gray-100 animate-right animate__animated animate__slideInRight`}
      >
        <div
          className={`w-full flex gap-3 overflow-y-scroll flex-col relative`}
        >
          <h1
            className={`text-xl py-7 flex items-center justify-center text-center  bg-white w-full`}
          >
            Checkout Page
          </h1>
          <button className="absolute right-5 top-7 hover:underline" onClick={() => handleLogout()}>Logout</button>
          <div
            className={`flex flex-col w-full p-2 bg-white items-center pb-10`}
          >
            <h1 className={` flex items-center p-4 bg-white w-full`}>
              Personal Details
            </h1>

            {rows.map((row, index) => (
              <Input
                label={row.toUpperCase()}
                defaultValue={userData[row]}
                onChange={(value) => setUserData({ ...userData, [row]: value })}
              />
            ))}
            <Input label="Mobile" onChange={(value) => setPhone(value)} />
            <Input
              label="Coupun Code"
              defaultValue={couponCode}
              onChange={(value) => setcouponCode(value)}
            />
            <div
              className={`flex flex-col my-2 justify-center items-center w-full py-4`}
            >
              <div className={`flex-1 flex items-center w-full`}>
                <input
                  type={`checkbox`}
                  className={` mx-2 self-center bg-red-400`}
                  onChange={(e) => JMIStudentHandler(e, "checkbox")}
                  id="JMI_STUDENT_CHECKBOX"
                />
                <label for="JMI_STUDENT_CHECKBOX" className={` cursor-pointer self-center -mb-1 w-full`}>
                  Are you a JMI student?
                </label>
              </div>
              <div
                className={`w-full ${JMI.status
                  ? " opacity-100 pointer-events-auto mt-4"
                  : "-mt-20 opacity-0 pointer-events-none"
                  } transition-all outline-none`}
              >
                <Input
                  label="Enter your JMI Application Number"
                  onChange={(value) => JMIStudentHandler(value, "input")}
                />
              </div>
            </div>
            <div>
              <ReCAPTCHA sitekey={TESTKEY} onChange={() => setcaptcha(true)} />
            </div>
          </div>

          <div className={` bg-white w-full flex flex-col items-center pb-5 relative `}>
            <h1 className={` flex items-center p-4 bg-white w-full`}>
              Summary
            </h1>
            {
              loading &&
              <LoadingCircle />
            }
            <div className={`flex flex-col w-full px-8 gap-1 text-gray-700 `}>
              <div className="flex justify-between text-black/40">
                <div>Base Price</div>
                <div>{amount.base}Rs</div>
              </div>

              {
                discountData.map((item, index) => {
                  return (
                    <div key={index} className="flex justify-between text-green-600">
                      <div>{item.type}</div>
                      <div><span className={`mr-1`}>-</span>{item.amount}Rs</div>
                    </div>
                  )
                })
              }
              <hr className={`border-t border-red-500/60`} />
              <div className="flex justify-between text-red-500">
                <div>Final Discount</div>
                <div>{amount.final}Rs</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4 w-full items-center relative flex justify-around bg-white shadow-inner">
          <Link href="/">
            <div className="py-2 px-4 cursor-pointer text-red-900">
              Cancel
            </div>
          </Link>
          <button
            onClick={(e) => paymentHandler(e)}
            className={`bg-red-500 rounded-md h-12 text-white px-12 py-3 transition-all`}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
