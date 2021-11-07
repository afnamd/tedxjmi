import React from 'react'
import Navbar from '../../components/navbar';
const Landingpage = () =>{
    return(
        <div className="landingPage font-Cinzel flex flex-col gap-5 bg-white">
            <div className=" text-3xl md:text-5xl text-center ">
                    Different Lenses
            </div>
            <div className='flex justify-center'>
                <img src="static/images/landingPage-bg-image.jpg" className='md:w-4/5'/>
            </div>
        </div>
    )
    return(
        <div className="main  relative font-Cinzel ">
            <div className="flex md:flex-row flex-col">
                <div className=" w-96 text-5xl hidden md:flex  justify-center p-6 pt-10">
                    Different Lenses
                </div>
                <div className="flex-grow text-4xl mt-12 md:hidden text-center">
                    Different Lenses
                </div>
                <div className="flex-grow">
                    <img src="images/landingPage-bg-image.jpg" />
                </div>
            </div>
        </div>
    )
}
export default Landingpage;