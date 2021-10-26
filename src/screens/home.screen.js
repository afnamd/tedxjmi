import React from 'react';
import useJedis from 'jedisdb'
export default function HomeSceen() {
  const modal = useJedis('modal')
  return (
    <div class="h-screen w-full bg-black">
      <div  class="absolute top-0 w-full h-full bg-image"></div>

      <div class="flex flex-col  h-screen items-center justify-evenly absolute w-full">
        <div class="flex flex-col items-center ">
          <div>
            <img src="/assets/images/tedxjmi.png" class=" h-16" />
          </div>
          <div class="text-white">
            JANUARY'22
          </div>
        </div>
        <div 
          class="bg-tedRed-default cursor-pointer pt-2 pb-2 w-36 text-center rounded-md text-white"
          onClick={()=>{
            modal.state = 1
          }}
        >
          Join us
        </div>
      </div>
    </div>

  );
}
