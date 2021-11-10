import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'

const ArchiveDesktop = () =>{
  return (
    <div class="flex  justify-around mt-5">
    <div class="flex">
      <div class="group -mr-4">
        <div class=" w-4 h-4 bg-black rounded-full transition-all" />
        <div class="absolute w-80 h-48 bg-white opacity-0 -mt-48 
        
        group-hover:-mt-52 group-hover:opacity-100 transition-all -ml-32 rounded-md border-2 p-8 shadow-xl">
          <h1>
              TEDxJMI <span class="text-red-500">2011</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
        <p class="text-sm -ml-1 mt-7 font-bold">2011</p>
      </div>
      <div class="w-96 border-t-2 mt-2 border-black" />
      <div class="group -mr-4">
        <div class=" w-4 h-4 bg-black rounded-full transition-all " />
        <div class="absolute w-80 h-48 bg-white opacity-0 -mt-48 
        
        group-hover:-mt-52 group-hover:opacity-100 transition-all -ml-32 rounded-md border-2 p-8 shadow-xl">
          <h1>
              TEDxJMI <span class="text-red-500">2017</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
        <p class="text-sm -ml-1 mt-7 font-bold">2017</p>
      </div>
      <div class="w-56 border-t-2 mt-2 border-black" />
      <div class="group -mr-4">
        <div class=" w-4 h-4 bg-black rounded-full transition-all " />
        <div class="absolute w-80 h-48 bg-white opacity-0 -mt-48 
        
        group-hover:-mt-52 group-hover:opacity-100 transition-all -ml-32 rounded-md border-2 p-8 shadow-xl">
          <h1>
              TEDxJMI <span class="text-red-500">2019</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
        <p class="text-sm -ml-1 mt-7 font-bold">2019</p>
      </div>
      <div class="w-52 border-t-2 mt-2 border-black" />
      <div class="group -mr-4">
        <div class=" w-4 h-4 border-4 border-black box-border rounded-full transition-all " />
        <div class="absolute w-80 h-48 bg-white opacity-0 -mt-48 
        
        group-hover:-mt-52 group-hover:opacity-100 transition-all -ml-32 rounded-md border-2 p-8 shadow-xl">
          <h1>
              TEDxJMI <span class="text-red-500">2021</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
        <p class="text-sm -ml-1 mt-7 font-bold">2021</p>
      </div>

    </div>
  </div>

  );
}

const ArchiveMobile = () =>{
  return (
    <div class="flex justify-around mt-5 flex-col">
    <div class="flex flex-col">
      <div class="group -mr-4">
        <div class=" w-4 h-4 bg-black rounded-full transition-all" />
        <div class="absolute w-56 h-48 ml-8 -mt-4">
          <h1>
              TEDxJMI <span class="text-red-500">2011</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
      </div>
      <div class="h-64 border-l-2 ml-2 border-black" />
      <div class="group -mr-4 ">
        <div class=" w-4 h-4 bg-black rounded-full transition-all " />
        <div class="absolute w-56 h-48 ml-8 -mt-5">
          <h1>
              TEDxJMI <span class="text-red-500">2017</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
      </div>
      <div class="h-64 border-l-2 ml-2 border-black" />
      <div class="group -mr-4">
        <div class=" w-4 h-4 bg-black rounded-full transition-all " />
        <div class="absolute w-56 h-48 ml-8 -mt-5">
          <h1>
              TEDxJMI <span class="text-red-500">2017</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
      </div>
      <div class="h-52 border-l-2 ml-2 border-black" />
      <div class="group -mr-4 mb-40">
        <div class=" w-4 h-4 bg-black rounded-full transition-all " />
        <div class="absolute w-56 h-48 ml-8 -mt-5">
          <h1>
              TEDxJMI <span class="text-red-500">2017</span>
          </h1>
          <div class="text-sm mt-2 mb-5">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <a class="text-base text-red-500 transition-all hover:text-red-600" href="#">
              Know More
          </a>

        </div>
      </div>

    </div>
  </div>
  )
}

const Partners = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })



  return (
    <div class="bg-white rounded-2xl p-12 flex flex-col gap-12">
      <div class="font-Cinzel text-2xl">
        <div class=" text-center">Partners</div>
        <div class="flex  justify-around mt-5">
          <div>afnamd</div>
          <div>afnamd</div>
        </div>
      </div>

      <div class="font-Cinzel text-2xl">
        <div class=" text-center">Archive</div>
        {isTabletOrMobile ? <ArchiveMobile/> : <ArchiveDesktop />}
      </div>
    </div>
  );
};
export default Partners;

// Get static props