import React, { useState } from "react";

import Link from "next/link";
import { userState as userState } from "../../components/atoms";
import {  useRecoilState } from 'recoil'
const Venue = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div className="bg-black relative venueBg flex items-center justify-center ">
      <div
        className="relative gap-4 font-Lora flex justify-center flex-col items-center"
        style={{ filter: "blur(0)" }}
      >
        <div className="bg-white/90 backdrop-blur-3xl pt-16 pb-16 pl-20 pr-20 rounded-md flex flex-col justify-center items-center">
          <h1 className="md:text-xl text-center">
            <span className="text-red-500">TEDxJMI</span> will premiere online
            on
          </h1>

          <p className="mt-7 md:text-3xl">
            <span className="text-red-500">27th</span> of March
          </p>
              <Link
                href="dashbaord"                
              >
                <button
                  className={`mt-10 pt-2 pb-2 pl-4 pr-4 font-Roboto bg-black text-white focus:bg-red-800 `}
                >
                  {
                    user.alreadyHaveATicket?
                    'login':
                    'Book Your Tickets'
                  }
                </button>
              </Link>

          <p className="text-xs mt-4 opacity-30 text-center">
            Tickets aren't available right now. Check back later!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Venue;
