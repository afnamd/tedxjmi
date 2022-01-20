import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center p-4 bg-white">
      <div className="md:flex hidden">
        <div className="font-Cinzel p-4">About</div>
        <div className="font-Cinzel p-4">Speaker</div>
      </div>
      <div className="cursor-pointer">
        <Link href="/">
          <img src="https://i.ibb.co/ncZ8qLG/image.png" className="h-10 " />
        </Link>
      </div>

      <div className="md:flex hidden">
        <div className="font-Cinzel p-4">Archive</div>
        <div className="font-Cinzel p-4">Contact</div>
      </div>
    </div>
  );
};
export default Navbar;
