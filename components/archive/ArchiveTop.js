import React from "react";
import Link from "next/link";
import arrow_back from "./assets/arrow_back_black_24dp.svg";
import Icons from '../icons'
function Top({ data }) {
  //data.Previous?.year
  return(
    <div className=" overflow-hidden bg-white flex gap-14 items-center justify-between  font-Cinzel">
      <div className="relative flex flex-col items-end justify-end gap-3" style={!data.Previous?{'visibility':'hidden'}:{}}>
        <div className="w-full text-right">
          {data.Previous?.year}
        </div>
        <div className="flex w-full items-center relative">
          <div className="h-1 bg-black w-full"></div>
          <div className="h-4 w-4 bg-black rounded-full absolute right-0"></div>
        </div>
        <Link href={data.Previous?.href||''}>
          <div className="flex items-center gap-3 text-base md:text-3xl md:pl-10 ml-4 md:ml-10  hover:scale-95 transition-all cursor-pointer">
            <Icons icon="arrowLeft" />  Previous
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center ">
        <span className="text-3xl">{data.year}</span>
        <span className="text-base md:text-3xl">{data.theme}</span>
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
          <div className="flex items-center gap-3 text-base md:text-3xl  mr-4 md:mr-10 hover:scale-95 transition-all cursor-pointer md:pr-10">
            Next <Icons icon="arrowRight"/>
          </div>
        </Link>
      </div>
    </div>
  )
  return (
    <div className="bg-white font-Cinzel flex w-full">
      <div className="prev hidden md:block" style={!data.Previous?{'visibility':'hidden'}:{}}>
        <div className="flex pt-10 pb-20">
          <a className="sm:absolute mt-16 ml-28 flex hover:scale-95 transition-all cursor-pointer">
            {data.Previous != null ? (
              <Link href={data?.Previous?.href}>
                <div  className='flex items-center gap-3 '>
                  <img src={arrow_back} width={26} />
                  <span className="text-3xl">Previous</span>
                </div>
              </Link>
            ) : null}
          </a>
          <div className="border-b-4 h-9 w-52 border-black hidden sm:block" />
          <div className="w-5 h-5 bg-black mt-6 -ml-2 rounded-full hidden sm:block">
            {data.Previous != null ? (
              <div className="-mt-9 -ml-1 text-lg">{data.Previous?.year}</div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-auto justify-center items-center flex-grow p-10 md:p-0">
        <span className="text-5xl">{data.year}</span>
        <span className="text-xl md:text-3xl">{data.theme}</span>
      </div>
      <div className="prev hidden md:block" style={!data.Next?{'visibility':'hidden'}:{}}>
        <div className="flex pt-10 pb-20">
          <a className=" sm:absolute mt-16 ml-28 flex hover:scale-95 transition-all cursor-pointer ">
            {data.Next != null ? (
              <Link href={data.Next?.href}>
                <div className='flex items-center gap-3'>
                  <span className="text-3xl">Next</span>
                  <img src={arrow_back} width={26} className="rotate-180" />
                </div>
              </Link>
            ) : ""}
          </a>
          <div className="w-5 h-5 bg-black mt-6 -ml-2 rounded-full hidden sm:block">
            {data.Next != null ? (
              <div className="-mt-9 -ml-1 text-lg">{data.Next?.year}</div>
            ) : null}
          </div>
          <div className="border-b-4 h-9 w-52 border-black hidden sm:block" />
        </div>
      </div>
    </div>
  );
}

export default Top;
