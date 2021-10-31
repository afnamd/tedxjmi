import React from 'react'
import { motion } from "framer-motion"
import VolunteerReg from '../screens/volunteerReg/index'
import useJedis from 'jedisdb'
const Modal = () =>{
    const modal = useJedis('modal')
    const variants ={
        show: {scale:1},
        hidden: {scale:0}

    }
    return(
        <motion.div 
            className="fixed w-full h-screen" 
            style={{zIndex:999997}}
            initial="hidden"
            animate={modal.state?'show':'hidden'}
            variants={variants}

            transition={{ duration: 0.2 }}
        >
            <div class="absolute h-screen w-full flex justify-center items-center">
                <div 
                    style={{backgroundColor:'#4C4B4E'}} 
                    class="relative overflow-y-scroll h-screen w-full md:pt-12 pt-20 md:pl-12 md:pr-12 pl-4 pr-4 pb-4 text-white"
                >
                    <div 
                        class="absolute left-3 top-4 hover:bg-darkGray-default p-4 rounded-full cursor-pointer"
                        onClick={()=>{
                            modal.state=0
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                    </div>
                    <div className='h-full w-full flex  justify-center'>
                        <VolunteerReg />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Modal;