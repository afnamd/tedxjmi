import React from 'react'
import Image from 'next/image'

function Speaker({showImage,data}) {
    return (
        <div class="font-Cinzel bg-white flex flex-col md:p-20 md:pl-24 md:pr-24 md:pt-1 text-center md:text-left">
            <div class="text-red-500 text-xl mx-4">Speaker</div>
            <div class="mt-10">
                <div class="flex flex-wrap text-center md:text-left justify-center items-center md:items-start md:justify-start">
                    {data.Speaker.map((speaker,index) => {
                        return (
                            <img src={speaker} class="mx-4 w-1/3 mt-2 md:w-1/5 sm:rounded-lg rounded-sm" onClick={(e) => {showImage(e,speaker)}}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Speaker
