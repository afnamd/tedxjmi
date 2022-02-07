import React from "react";
const Landingpage = () => {
  return (
    <div className="landingPage font-Cinzel flex flex-col bg-white gap-6 h90" >
      <div className=" text-xl md:text-5xl text-center flex flex-col h-1/6">
        <h3>Different Lenses</h3>
        <span className="text-base">at</span>
        <h2 className="text-2xl">Jamia Millia islamia</h2>
      </div>
      <div className="flex justify-center  md:h-5/6">
        <img
          src="static/images/landingPage-bg-imageNew.jpg"
          style={{objectFit:'cover'}}
        />
      </div>
    </div>
  );
};
export default Landingpage;
