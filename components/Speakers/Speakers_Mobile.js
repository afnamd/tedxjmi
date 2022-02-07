import React,{useState} from 'react';
import Slider from "react-slick";
import Socials from './socials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

const SpeakerCard = (props) => { 
  return (
    <div className={`flex sm:flex-row flex-col justify-center items-center py-10 sm:py-0`} key={props.key}>
            <img className='w-56 h-56 sm:w-32 sm:h-32 my-5 rounded-full transition-all sm:ml-10' src={props.data.img} />
            <div className='flex-col mx-5 justify-center items-center flex-1 sm:text-center'>
              <h2 className={`text-2xl sm:whitespace-nowrap sm:text-base font-bold`}>{props.data.name}</h2>
              <h4 className='mt-1 text-gray-400'>{props.data.title}</h4>
              <Socials className='my-2 hidden sm:flex' instagram={''} twitter={``} facebook={``} />

            </div>
            <p className='text-center text-sm sm:text-xs my-4 mx-5 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>            
            <Socials className='flex my-2 sm:hidden' instagram={''} twitter={``} facebook={``} />
    </div>
  )
}

function Speakers(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <AiOutlineRight className='text-3xl text-black'/>,
    prevArrow: <AiOutlineLeft className='text-3xl text-black'/>
  };

  console.log(settings);

  const [Speakers, setSpeakers] = useState(props.data);
  const [Counter, setCounter] = useState(0);


  return (
    <div className='md:hidden'>
    <Slider {...settings}
      onSwipe={(e) => {
        let k = 0;
        if(e == "left"){
          k = (Counter+ Speakers.length + 1) % Speakers.length;
        }else{
          k = (Counter+ Speakers.length - 1) % Speakers.length;
        }

        setCounter(k);
      }}
    >
      {Speakers.map((_, i) => {
          return (
            <SpeakerCard data={_} key={i}/>
          )
      })}
    </Slider>

    <div className='mt-16 grid grid-cols-4 pb-10'>
      {Speakers.map((_,i) => {
        return (
          <div className='m-2 flex justify-center items-center'>
            <img src={_.img} className={`sm:w-20 rounded-full ${Counter === i ? "shadow-xl shadow-red-500/20" : ""}`} />
          </div>
        )
      })}
    </div>

  </div>
  );
}

export default Speakers;
