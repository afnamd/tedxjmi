import React from "react";

function Theme(props) {
  return (
    <div className="font-Lora bg-white flex flex-col p-4 md:p-20 text-justify md:text-left">
      <div className="font-Cinzel text-red-500 text-xl text-center md:text-left">Theme</div>
      <div className="mt-8">{props.children}</div>
    </div>
  );
}

export default Theme;
