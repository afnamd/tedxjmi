import React from "react";
import Image from 'next/image'

import arrow_back from "./assets/arrow_back_black_24dp.svg"

function Top() {
  return (
    <div class="bg-white font-Cinzel">
      <div class="prev">
        <div class="flex pt-10 pb-20">
          <a class="absolute mt-16 ml-28 text-3xl flex">
            <Image class="mr-4" src={arrow_back}/>
              Previous
          </a>
          <div class="border-b-4 h-9 w-96 border-black" />
          <div class="w-5 h-5 bg-black mt-6 -ml-2 rounded-full">
            <div class="-mt-9 -ml-1 text-lg">2017</div>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Top;
