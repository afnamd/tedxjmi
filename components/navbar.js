import React from "react";
const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center p-4 bg-white">
      <div className="md:flex hidden">
        <div className="font-Cinzel p-4">About</div>
        <div className="font-Cinzel p-4">Speaker</div>
      </div>
      <div>
        <img src="https://i.ibb.co/ncZ8qLG/image.png" className="h-10 " />
      </div>
      <div className="md:flex hidden">
        <div className="font-Cinzel p-4">Archive</div>
        <div className="font-Cinzel p-4">Contact</div>
      </div>
    </div>
  );
};
export default Navbar;
