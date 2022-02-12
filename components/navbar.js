import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center p-4 bg-white">
      <div className="md:flex hidden cursor-pointer">
          <Link href={"/archive/2022"}>
            <div className="font-Cinzel p-4">About</div>
          </Link>
          <Link href={"/speakers"}>
            <div className="font-Cinzel p-4">Speaker</div>
          </Link>
      </div>
      <div className="cursor-pointer">
          <Link href="/">
              <img src="https://i.ibb.co/ncZ8qLG/image.png" className="h-10 " />
          </Link>
      </div>

      <div className="md:flex hidden cursor-pointer">
          <Link href={"/archive/2011"}>
            <div className="font-Cinzel p-4">Archive</div>
          </Link>
          <Link href={"/contact/"}>
            <div className="font-Cinzel p-4">Contact</div>
          </Link>
          
      </div>
    </div>
  );
};
export default Navbar;
