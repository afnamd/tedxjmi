import React, { useState } from "react";
import GoogleLogin from "react-google-login";

import { useRecoilState } from "recoil";
import { userState as userState } from "../../components/atoms";
import { useRouter } from "next/router";

const client_id =
  "583458633641-jse8n244arnnag0p64qqkl6fkrerl69d.apps.googleusercontent.com";

import { ToastContainer, toast } from "react-toastify";

const Venue = () => {
  const [user, setUser] = useRecoilState(userState);
  const [ticket, setTicket] = useState(true);

  const router = useRouter();

  const responseGoogle = (response) => {
    if (response.error) {
      toast.error("Please try again");
    } else {
      toast.success("Successfully logged in");
      const userData = {
        isAuth: true,
        name: response.profileObj.name,
        email: response.profileObj.email,
        img: response.profileObj.imageUrl,
      };
      setUser(userData);
      router.push("/tickets");
    }
  };

  const handleTicket = () => {
    console.log(user);
    if (user.isAuth) router.push("/tickets");
  };

  return (
    <div className="bg-black relative venueBg flex items-center justify-center ">
      <div
        className="relative gap-4 font-Cinzel flex justify-center flex-col items-center"
        style={{ filter: "blur(0)" }}
      >
        <div className="bg-white/90 backdrop-blur-3xl px-20 py-12 rounded-md flex flex-col justify-center items-center">
          <h1 className="text-2xl text-center">
            <span className="text-red-500">TEDxJMI</span> will premiere online
            on
          </h1>

          <p className="mt-7 text-3xl">
            <span className="text-red-500">27th</span> of March
          </p>

          <GoogleLogin
            clientId={client_id}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                className={`mt-10 px-6 py-3 ${
                  ticket ? "bg-red-500" : "bg-gray-300"
                } text-white focus:bg-red-800 `}
                disabled={ticket ? false : true}
                onClick={renderProps.onClick}
              >
                Book Your Tickets
              </button>
            )}
          />
          <p className="text-xs mt-4 opacity-30">
            Tickets aren't available right now. Check back later!
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Venue;
