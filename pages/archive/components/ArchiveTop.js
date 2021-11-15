import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrow_back from "./assets/arrow_back_black_24dp.svg";

function Top({ data }) {
  return (
    <div class="bg-white font-Cinzel flex w-full">
      <div class="prev hidden md:block">
        <div class="flex pt-10 pb-20">
          <a class="sm:absolute mt-16 ml-28 flex hover:scale-95 transition-all cursor-pointer">
            {data.Previous != null ? (
              <Link href={data.Previous.href}>
                <div>
                  <Image src={arrow_back} width={26} />
                  <span class="text-3xl">Previous</span>
                </div>
              </Link>
            ) : null}
          </a>
          <div class="border-b-4 h-9 w-96 border-black hidden sm:block" />
          <div class="w-5 h-5 bg-black mt-6 -ml-2 rounded-full hidden sm:block">
            {data.Previous != null ? (
              <div class="-mt-9 -ml-1 text-lg">{data.Previous.year}</div>
            ) : null}
          </div>
        </div>
      </div>
      <div class="flex flex-col w-auto justify-center items-center flex-grow p-10 md:p-0">
        <span class="text-5xl">{data.year}</span>
        <span class="text-xl md:text-3xl">{data.theme}</span>
      </div>
      <div class="prev hidden md:block">
        <div class="flex pt-10 pb-20">
          <a class=" sm:absolute mt-16 ml-28 flex hover:scale-95 transition-all cursor-pointer ">
            {data.Next != null ? (
              <Link href={data.Next.href}>
                <div>
                  <span class="text-3xl">Next</span>
                  <Image src={arrow_back} width={26} class="rotate-180" />
                </div>
              </Link>
            ) : null}
          </a>
          <div class="w-5 h-5 bg-black mt-6 -ml-2 rounded-full hidden sm:block">
            {data.Next != null ? (
              <div class="-mt-9 -ml-1 text-lg">{data.Next.year}</div>
            ) : null}
          </div>
          <div class="border-b-4 h-9 w-96 border-black hidden sm:block" />
        </div>
      </div>
    </div>
  );
}

export default Top;
