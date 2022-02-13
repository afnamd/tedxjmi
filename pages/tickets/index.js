import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

import { useRecoilValue } from "recoil";
import Modal from "../../components/Modal/Modal";
import { userState } from "../../components/atoms";

function Tickets() {
  const userData = useRecoilValue(userState);
  const rows = ["name", "email"];
  const [Phone, setPhone] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  useEffect(() => {
    console.log(userData);
    console.log(11, userData)
    if (userData.isAuth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [userData]);

  return (
    <Layout>
      <div className={`font-Cinzel bg-white`}>
        <div className={`flex flex-col justify-center items-center`}>
          <h1 className={`text-2xl py-8`}>Checkout Page</h1>

          <div className={`flex flex-col w-full px-28 py-5`}>
            {rows.map((row, index) => {
              return (
                <div className={`flex my-10`}>
                  <div className={`flex-1`}>{row}</div>
                  <div className={` font-bold`} style={{ flex: 3 }}>
                    {userData[row]}
                  </div>
                </div>
              );
            })}
            <div className={`flex my-10`}>
              <div className={`flex-1`}>
                Phone<span className="text-red-500">*</span>
              </div>
              <div className={` font-bold`} style={{ flex: 3 }}>
                <input 
                  className={`focus:outline-none`}
                  placeholder="Enter your Phone Number" 
                  onChange = {(e) => {setPhone(e.target.value)}} value={Phone} 
                />
              </div>
            </div>
          </div>
            
          <div className={`my-10`}>
            <button className={`p-3 bg-red-500 text-white shadow-lg shadow-red-500/10 hover:shadow-red-500/30 transition-all`}>
              Pay Now
            </button>
          </div>

        </div>

        {/* Modal */}

        <Modal isOpen={!isAuth} className={``} toggle={toggleAuth}>
          <div className={`flex flex-col justify-center items-center p-3`}>
            <h1 className={`text-xl`}>Sorry! Please Login First</h1>
            <button
              className={`text-red-500 mt-6`}
              onClick={() => {
                router.push("/");
                toggleAuth();
              }}
            >
              Go Back
            </button>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}

export default Tickets;
