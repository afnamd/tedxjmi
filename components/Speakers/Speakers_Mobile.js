import React,{useState} from 'react';
import Slider from "react-slick";
import Socials from './socials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

const SpeakerCard = (props) => { 
  return (
    <div className={`flex flex-col justify-center items-center py-10`} key={props.key}>
            <img className='w-56 h-56 my-5 rounded-full transition-all' src={props.data.img} />
            <h2 className={`text-2xl font-bold`}>{props.data.name}</h2>
            <h4 className='mt-1 text-gray-400'>{props.data.title}</h4>
            <p className='text-center text-sm my-4 mx-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>            
            <Socials className='flex my-2' instagram={''} twitter={``} facebook={``} />
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

    <div className='mt-16 grid grid-cols-4'>
      {Speakers.map((_,i) => {
        return (
          <div className='m-2'>
            <img src={_.img} className={`rounded-full ${Counter === i ? "shadow-xl shadow-red-500/20" : ""}`} />
          </div>
        )
      })}
    </div>

  </div>
  );
}

export default Speakers;
