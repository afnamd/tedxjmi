import React from "react";
import Input from "./input";
import AfnamdLogo from "./svg/afnamd";
const Footer = (props) => {
  return (
    <div className="text-white  ml-auto mr-auto w-11/12 2xl:w-10/12 font-Cinzel pt-10 md:pl-10 md:pr-10 flex flex-col gap-10 bg-black">
      <div className="flex gap-12 md:items-start items-center flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <div className=" font-bold text-center md:text-left text-xl md:text-2xl">
            Jamia Millia Islamia, New Delhi
          </div>

          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.3190047509634!2d77.2837465!3d28.560182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35d6f5f87261b277!2sDr.%20MA%20Ansari%20Auditorium!5e0!3m2!1sen!2sin!4v1644306584974!5m2!1sen!2sin" 
          className="w-80 h-80 md:w-96 grayscale"
          loading="lazy">

          </iframe>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 ">
            <div className=" text-xl">Subscribe to our newsletters</div>
            <div className="flex border pl-3 rounded-2xl font-sans justify-between">
              <Input
                className="border-black placeholder-red-400"
                placeholder="email"
              />
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
            <div>
              <a target="_blank" href="https://twitter.com/TEDxJamia">
                <svg width="30" viewBox="0 0 543.684 543.684" fill="white">
                  <g>
                    <path
                      d="M527.657,106.697c-2.681,0.783-5.361,1.512-8.041,2.191c-16.384,4.137-17.89-1.322-6.028-13.366
			c5.312-5.397,10.006-11.267,14.082-17.607c9.137-14.217,1.212-20.417-14.333-13.776c-5.545,2.369-11.182,4.517-16.897,6.432
			c-16.017,5.379-38.746-2.735-53.018-11.787c-18.018-11.426-38.495-17.136-61.438-17.136c-32.137,0-59.529,11.334-82.192,33.984
			c-22.656,22.662-33.99,50.062-33.99,82.191c0,4.394,0.251,8.855,0.747,13.378c0.814,7.362-11.585,12.699-28.317,10.336
			c-36.194-5.11-70.582-16.077-103.171-32.889c-32.32-16.671-60.845-37.65-85.57-62.938C37.672,73.624,21.687,74.665,17.274,90.98
			c-2.644,9.78-3.959,19.951-3.959,30.515c0,19.908,4.675,38.372,14.027,55.392c4.651,8.47,10.098,16.138,16.353,22.999
			c10.521,11.549,8.911,18.25-5.734,14.144c-14.639-4.106-25.367-10.202-25.367-9.804s0,0.722,0,0.722
			c0,28.048,8.807,52.693,26.432,73.911c10.857,13.072,23.47,23.17,37.834,30.282c15.147,7.503,22.203,11.688,13.733,12.784
			c-5.11,0.661-10.251,0.991-15.422,0.991c-3.5,0-7.172-0.159-11.003-0.483c-6.059-0.514-7.148,12.111,2.038,26.298
			c7.301,11.273,16.646,21.193,28.03,29.762c11.579,8.721,24.058,14.981,37.417,18.794c16.255,4.633,19.517,13.073,5.024,21.763
			c-35.863,21.519-75.551,32.277-119.058,32.277c-4.902,0-9.578-0.11-14.045-0.324c-7.754-0.373-2.552,6.456,12.417,14.296
			c46.775,24.499,97.43,36.738,151.972,36.738c41.237,0,79.964-6.529,116.176-19.596c36.199-13.066,67.136-30.576,92.791-52.516
			c25.655-21.94,47.779-47.173,66.365-75.711c18.581-28.537,32.424-58.33,41.543-89.376c9.106-31.053,13.666-62.167,13.666-93.342
			c0-2.809-0.024-5.331-0.067-7.552c-0.086-4.174,10.955-15.472,23.28-27.032c5.563-5.22,10.869-10.698,15.937-16.444
			C548.833,107.78,543.882,101.966,527.657,106.697z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="font-sans mt-10 mb-5 flex md:border-t border-gray-900 text-sm  flex-col md:flex-row items-center md:justify-between justify-center">
        <div>TEDxJMI 2022 Operating under license from TED™</div>
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
          <div className="">
            <span className="font-bold text-xl">TEDxJMI</span> <span>&</span>
            <AfnamdLogo w={138} fill={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
