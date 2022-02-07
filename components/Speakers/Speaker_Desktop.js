import React from 'react';
import Socials from './socials';

const Card = (props) => {
    return (
        <div className={`flex flex-col justify-center items-center m-3 mx-8 transition-all hover:scale-105 shadow-lg shadow-red-400/5 hover:shadow-2xl hover:shadow-red-400/40 py-9 z-50 border-b-4 border-b-red-500`} key={props.key}>
            <img className='w-56 h-56 my-5 rounded-full hover:brightness-75 transition-all' src={props.data.img} />
            <h2 className={`text-2xl font-bold`}>{props.data.name}</h2>
            <h4 className='mt-1 text-gray-400'>{props.data.title}</h4>
            <p className='text-center text-sm my-4 mx-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>            
            <Socials className='flex my-2' instagram={''} twitter={``} facebook={``} />
        </div>
    )   
}

export default function Speaker(props){


    

    return(
        <>
            <div className={`flex flex-col hidden lg:block`}>
                <h1 className={`ml-16 text-3xl`}>Speaker</h1>

                <div className='grid grid-cols-3'>
                    {props.data.map((item,key) => {
                        return(
                            <Card data ={item} key={key}/>
                        )
                    })}
                </div>

                

            </div>
        </>
    )
}