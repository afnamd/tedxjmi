import React from "react";
import Link from "next/link";
import arrow_back from "./assets/arrow_back_black_24dp.svg";
import Icons from '../icons'
function Top({ data }) {
  //data.Previous?.year
  return(
    <div className="  font-Cinzel">

      <div className=" overflow-hidden bg-white flex gap-8 md:gap-14 items-center justify-between">
        <div className="relative flex flex-col items-end justify-end gap-3" style={!data.Previous?{'visibility':'hidden'}:{}}>
          <div className="w-full text-right">
            {data.Previous?.year}
          </div>
          <div className="flex w-full items-center relative">
            <div className="h-1 bg-black w-full"></div>
            <div className="h-4 w-4 bg-black rounded-full absolute right-0"></div>
          </div>
          <Link href={data.Previous?.href||''}>
            <div className="flex items-center gap-3 text-base md:text-3xl md:pl-10  md:ml-10  hover:scale-95 transition-all cursor-pointer">
              <Icons icon="arrowLeft"/>  Previous
            </div>
          </Link>
        </div>
        <div className="flex-col items-center hidden md:flex ">
          <span className="text-3xl">{data.year}</span>
          <span className="text-base md:text-3xl text-center">{data.theme}</span>
        </div>

        <div className="flex flex-col items-start justify-end gap-3" style={!data.Next?{'visibility':'hidden'}:{}}>
          <div className="w-full text-left ">
          {data.Next?.year}
          </div>
          <div className="flex w-full items-center relative">
            <div className="h-4 w-4 bg-black rounded-full absolute left-0"></div>
            <div className="h-1 bg-black w-full"></div>
          </div>
          <Link href={data.Next?.href||''} >
            <div className="flex items-center gap-3 text-base md:text-3xl  md:mr-10 hover:scale-95 transition-all cursor-pointer md:pr-10">
              Next <Icons icon="arrowRight"/>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-col items-center flex md:hidden">
        <span className="text-3xl">{data.year}</span>
        <span className="text-base md:text-3xl text-center">{data.theme}</span>
      </div>
    </div>
  )
}

export default Top;
