import React, { useState } from "react";
import Layout from "../../components/layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    name: "Student Organizers",
    members: [
      {
        name: "Shiraz Sajid Hashmi ",
        role: "Organiser",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Shiraz Sajid Hashmi ",
        role: "Organiser",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Shiraz Sajid Hashmi ",
        role: "Organiser",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Shiraz Sajid Hashmi ",
        role: "Organiser",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Shiraz Sajid Hashmi ",
        role: "Organiser",
        course: "B.Tech ME",
        year: "IV",
      },
    ],
  },
  {
    name: "Curation Team",
    members: [
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
    ],
  },
  {
    name: "Content Team",
    members: [
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
    ],
  },
  {
    name: "Operations Team",
    members: [
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
    ],
  },
  {
    name: "Curation Team",
    members: [
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
    ],
  },
  {
    name: "Curation Team",
    members: [
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
    ],
  },
  {
    name: "Curation Team",
    members: [
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
      {
        name: "Falak Kazmi",
        course: "B.Tech ME",
        year: "IV",
      },
    ],
  },
];

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 7000,
  autoplaySpeed: 7000,
  cssEase: "linear",
  adaptiveHeight: true,
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

function Speakers() {
  return (
    <Layout>
      <div className="bg-white font-Cinzel py-0 px-10 ">
        <h1 className={`ml-16 text-3xl`}>Teams</h1>
        <div className={`flex flex-row  w-full items-center justify-center mt-10`}>
          <h1 className="mx-8 text-4xl whitespace-nowrap text-red-600 ">{data[0].name}</h1>
        </div>
        <div className="flex flex-row justify-center flex-wrap">
          {data[0].members.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-evenly shadow-md mx-10 my-5 m p-10 rounded-sm">
              <h2 className="font-semibold text-lg my-4 border-b-2 border-b-red-400 ">{item.name}</h2>
              {item.role && <p className="text-red-500 my-1">{item.role}</p>}

              <p className="text-xs font-light my-1">{item.course}</p>
              <p className="text-xs font-light my-1">{item.year}</p>
            </div>
          ))}
        </div>

        {data
          .filter((item, idx) => idx != 0)
          .map((team, index) => {
            return (
              <div key={index} className="flex flex-col mt-8 ">
                <div className={`flex ${index % 2 ? "flex-row-reverse" : "flex-row"}  w-full items-center justify-start`}>
                  <div className="h-4 w-4 bg-gray-500 rounded-full absolute "></div>
                  <div className="md:w-1/4 h-0.5 bg-gray-500  "></div>
                  <h1 className="mx-8 text-2xl whitespace-nowrap text-red-600 ">{team.name}</h1>
                  <div className="w-full h-0.5 bg-gray-500"></div>
                </div>
                <Slider {...settings} slidesToScroll={index % 2 ? 1 : -1}>
                  {team.members.map((item, index) => (
                    <div className=" md:p-10 p-2 ">
                      <div key={index} className="flex flex-col items-center justify-evenly shadow-md md:mx-10 md:my-5 md:p-10 p-3 rounded-sm  group-hover:cursor-pointer">
                        <h2 className="font-semibold text-lg my-4 border-b-2 border-b-red-400  group-hover:text-w">{item.name}</h2>
                        {item.role && <p className="text-red-500 my-1">{item.role}</p>}

                        <p className="text-xs font-light my-1">{item.course}</p>
                        <p className="text-xs font-light my-1">{item.year}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export default Speakers;
