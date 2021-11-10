import React from 'react'
import Navbar from '../../components/navbar';
const Landingpage = () =>{
    return(
        <div className="landingPage font-Cinzel flex flex-col gap-5 bg-white">
            <div className=" text-3xl md:text-5xl text-center flex flex-col ">
                <h3>Different Lenses</h3>
                <span className='text-base'>at</span>
                <h2 className='text-2xl'>Jamia Millia islamia</h2>
            </div>
            <div className='flex justify-center'>
                <img src="static/images/landingPage-bg-image.jpg" className='md:w-4/5'/>
            </div>
        </div>
    )
}
export default Landingpage;