import React from "react";
import AfnamdLogo from "../../components/svg/afnamd";
import Link from "next/link";
import { data } from "../api/archive";
const ArchiveDesktop = () => {
  let maxDiff = data[data.length - 1].year - data[0].year;
  return (
    <div className="xl:flex hidden justify-around mt-12 text-base">
      <div className="flex w-4/5">
        {data.map((_, i) => {
          return (
            <div key={_.theme}>
              <div className="group h-16 ">
                <div
                  className={` w-4 h-4 border-2 border-black ${
                    i !== data.length - 1 ? "bg-black" : "bg-white"
                  } rounded-full transition-all`}
                />
                <div className="absolute  bg-white w-80 h-0 overflow-hidden opacity-0 -mt-48 group-hover:-mt-52 group-hover:h-48 group-hover:opacity-100 transition-all -ml-32 rounded-md border-2 p-8 shadow-xl">
                  <h1>
                    {_.theme} <span className="text-red-500">{_.year}</span>
                  </h1>
                  <div className="text-sm mt-2 mb-5">
                    {_.description.substring(0, 60) + " . . . "}
                  </div>
                  <Link href={"/archive/" + _.year}>
                    <a className="text-base text-red-500 transition-all hover:text-red-600">
                      Know More
                    </a>
                  </Link>
                </div>
                <div className="absolute  bg-white w-80 h-12 -mt-4 opacity-0    overflow-hidden  transition-all -ml-32 rounded-md border-2 shadow-xl" />
                <p className="text-sm -ml-1 mt-7 font-bold absolute">
                  {_.year}
                </p>
              </div>
              {i !== data.length - 1 && (
                <div
                  className="border-t-2 mt-2 border-black"
                  style={{
                    width:
                      (100 / maxDiff) * (data[i + 1].year - data[i].year) + "%",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ArchiveMobile = () => {
  return (
    <div className="mt-12 md:ml-52 xl:hidden block">
      {[...data].reverse().map((d, i) => {
        return (
          <div key={d.theme}>
            <div className="group -mr-4 ">
              <div
                className={` w-4 h-4 border-2 border-black ${
                  i !== 0 ? "bg-black" : "bg-white"
                } rounded-full transition-all`}
              />
              <div className="">
                <div className="absolute w-56 h-48 ml-8 -mt-5">
                  <h1>
                    {d.theme} <span className="text-red-500">{d.year}</span>
                  </h1>
                  <div className="text-sm mt-2 mb-5">
                    {d.description.substring(0, 60) + " . . . "}
                  </div>
                  <Link href="/archive/2011">
                    <a
                      className="text-base text-red-500 transition-all hover:text-red-600"
                      href="#"
                    >
                      Know More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {i !== data.length - 1 ? (
              <div className="h-48 border-l-2 ml-2 border-black" />
            ) : (
              <div className="h-48 ml-2" />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Partners = () => {
  return (
    <div className="bg-white rounded-2xl p-12 flex flex-col gap-12 min-h-400">
      <div className="font-Cinzel text-2xl mt-12">
        <div className=" md:text-center text-left">
          <h3 className="">Partners</h3>
        </div>
        <div className="flex flex-wrap w-full items-center justify-around mt-12">
          <div>
            <AfnamdLogo fill={"#2A2829"} w={256} />
          </div>
          {/* <div>
            <img
              className="w-44"
              src="/static/images/lotto-logo.png"
              alt="afnamd"
            />
          </div> */}
        </div>
      </div>
      <div className="font-Cinzel text-2xl mt-12">
        <div className=" md:text-center text-left">Timeline</div>
        <ArchiveMobile />
        <ArchiveDesktop />
      </div>
    </div>
  );
};
export default Partners;

// Get static props
