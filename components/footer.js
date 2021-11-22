import React from "react";
import Input from "./input";
import AfnamdLogo from "./svg/afnamd";
const Footer = () => {
  return (
    <div className="text-white  ml-auto mr-auto w-11/12 2xl:w-10/12 font-Cinzel pt-10 md:pl-10 md:pr-10 flex flex-col gap-10 bg-black">
      <div className="flex gap-12 md:items-start items-center flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <div className=" font-bold text-center md:text-left text-xl md:text-2xl">
            Jamia Millia Islamia, New Delhi
          </div>
          <a target="_blank" href="https://goo.gl/maps/4Y14DhZe4Fu">
            <div className="flex items-center gap-3 cursor-pointer hover:ring-1 p-2 ring-white">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 2.5835C10.5012 2.5835 6.45831 6.62641 6.45831 11.6252C6.45831 18.4064 15.5 28.4168 15.5 28.4168C15.5 28.4168 24.5417 18.4064 24.5417 11.6252C24.5417 6.62641 20.4987 2.5835 15.5 2.5835ZM15.5 14.8543C13.7175 14.8543 12.2708 13.4077 12.2708 11.6252C12.2708 9.84266 13.7175 8.396 15.5 8.396C17.2825 8.396 18.7291 9.84266 18.7291 11.6252C18.7291 13.4077 17.2825 14.8543 15.5 14.8543Z"
                  fill="white"
                />
              </svg>
              <div className="flex text-sm flex-col">
                <div className=" underline">
                  Dr. M. A. Ansari Auditorium, Jamia Millia Islamia
                </div>
                <div className=" font-sans">Where is This?</div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 ">
            <div className=" text-xl">Subscribe to our newsletters</div>
            <div className="flex border pl-3 rounded-2xl font-sans justify-between">
                <Input className="border-black placeholder-red-400" placeholder="email" />
                <button className="hover:ring-1 rounded-r-2xl ring-white p-4">
                  Signup
                </button>
            </div>
          </div>
          <div className="flex justify-center gap-12">
            <div>
              <a target="_blank" href="https://www.instagram.com/tedxjmi/">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3.75C6.55375 3.75 3.75 6.55375 3.75 10V20C3.75 23.4463 6.55375 26.25 10 26.25H20C23.4463 26.25 26.25 23.4463 26.25 20V10C26.25 6.55375 23.4463 3.75 20 3.75H10ZM10 6.25H20C22.0675 6.25 23.75 7.9325 23.75 10V20C23.75 22.0675 22.0675 23.75 20 23.75H10C7.9325 23.75 6.25 22.0675 6.25 20V10C6.25 7.9325 7.9325 6.25 10 6.25ZM21.25 7.5C20.9185 7.5 20.6005 7.6317 20.3661 7.86612C20.1317 8.10054 20 8.41848 20 8.75C20 9.08152 20.1317 9.39946 20.3661 9.63388C20.6005 9.8683 20.9185 10 21.25 10C21.5815 10 21.8995 9.8683 22.1339 9.63388C22.3683 9.39946 22.5 9.08152 22.5 8.75C22.5 8.41848 22.3683 8.10054 22.1339 7.86612C21.8995 7.6317 21.5815 7.5 21.25 7.5ZM15 8.75C11.5538 8.75 8.75 11.5538 8.75 15C8.75 18.4462 11.5538 21.25 15 21.25C18.4462 21.25 21.25 18.4462 21.25 15C21.25 11.5538 18.4462 8.75 15 8.75ZM15 11.25C17.0675 11.25 18.75 12.9325 18.75 15C18.75 17.0675 17.0675 18.75 15 18.75C12.9325 18.75 11.25 17.0675 11.25 15C11.25 12.9325 12.9325 11.25 15 11.25Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a target="_blank" href="https://www.facebook.com/tedxjmi">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1.7998C7.70999 1.7998 1.79999 7.70981 1.79999 14.9998C1.79999 21.6178 6.67499 27.082 13.0272 28.0366V18.4984H9.76139V15.0286H13.0272V12.7198C13.0272 8.89721 14.8896 7.219 18.0666 7.219C19.5882 7.219 20.3928 7.3318 20.7738 7.3834V10.4122H18.6066C17.2578 10.4122 16.7868 11.6908 16.7868 13.132V15.0286H20.7396L20.2032 18.4984H16.7868V28.0648C23.2296 27.1906 28.2 21.682 28.2 14.9998C28.2 7.70981 22.29 1.7998 15 1.7998Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="font-sans mt-10 mb-5 flex md:border-t border-gray-900 text-sm  flex-col md:flex-row items-center md:justify-between justify-center">
        <div>TEDxJMI 2021 Operating under license from TED™</div>
        <div className="flex items-center gap-3 hover:ring-1 ring-white m-3 p-3 cursor-pointer">
          Made With
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 20 20"
          >
            <path d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z" />
          </svg>
          By
          <div className=''>
              <span className='font-bold text-xl'>
                  TEDxJMI
              </span>
              {' '}
              <span>
                &
              </span>
            <AfnamdLogo w={138} fill={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
