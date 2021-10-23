import React from 'react';
export default function HomeSceen() {
  return (
    <div id="main" className="bg-black h-screen relative">
      <div className="h-screen flex justify-center items-center absolute top-0 z-20 w-full">
        <img src="/assets/images/tedxjmi.png" className="h-24" />
      </div>
      <div className="h-screen flex justify-center items-center absolute top-0 z-10 bg-black w-full" style={{opacity:'0.95'}}></div>
      <div className="absolute top-0 w-full h-full bg-image"></div>
      <div class="text-white h-5/6 flex justify-center items-end absolute top-0 z-30 w-full text-3xl font-thin">
          Jan 2022
      </div>
    </div>
  );
}
