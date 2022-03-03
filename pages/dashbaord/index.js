import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import auth from "../../api/auth";
import Razorpay from "../../components/dashboard/razorpay";
import { useRecoilState } from "recoil";
import { userState as userState } from "../../components/atoms";
import { ToastContainer, toast } from "react-toastify";
import Auth from "../../components/dashboard/auth";
import LoadingScreen from "../../components/loading_screen";
import TicketDetails from "../../components/dashboard/ticketDetails";

export default function Dashboard() {
  const [user, setUser] = useRecoilState(userState);
  useEffect(async () => {
    if (window.isFetched) return;
    else window.isFetched = true;

    localStorage.setItem("csrf", (await auth.handshake()).data.csrf);

  }, []);

  useEffect(() => {
    console.log("User : ", user);
  }, [user]);

  return (
    <div className="min-h-screen flex justify-center items-start">
      <div className="w-4/6 h-screen bg-black hidden md:block overflow-hidden">
        <img src="/static/images/stage.jpg" className="w-full h-full" style={{ objectFit: 'cover', objectPosition: '10% 100%' }} />
      </div>
      <div className="md:w-3/6 w-full h-screen bg-white">
        {user.isAuth === null ? (
          <Auth />
        ) : user.isAuth === false ? (
          <Auth />
        ) : user.alreadyHaveATicket === true ? (
          <TicketDetails />
        ) : (
          <Razorpay />
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
