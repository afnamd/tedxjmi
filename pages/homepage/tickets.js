import React, { useState } from "react";

import Link from "next/link";
import { userState as userState } from "../../components/atoms";
import {  useRecoilState } from 'recoil'
const Venue = () => {
  const [user, setUser] = useRecoilState(userState);

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
              <Link
                href="dashbaord/auth"                
              >
                <button
                  className={`mt-10 px-6 py-3 font-mono bg-black text-white focus:bg-red-800 `}
                >
                  {
                    user.alreadyHaveATicket?
                    'login':
                    'Book Your Tickets'
                  }
                </button>
              </Link>

          <p className="text-xs mt-4 opacity-30">
            Tickets aren't available right now. Check back later!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Venue;
