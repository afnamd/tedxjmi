import React from 'react'

function Gallery({showImage,data}) {
    return (
        <div class="font-Cinzel bg-white flex flex-col md:p-20 md:pl-24 md:pr-24 pt-1 pl-4 text-center md:text-left border-0">
            <div class="text-red-500 text-xl mx-4">Image Gallery</div>
            <div class="mt-10">
                <div class="flex flex-wrap ml-10 sm:ml-0">

                    {data.Gallery.map((gallery,index) => {
                        return (
                            <img class="ml-8 md:ml-2 mt-2 object-cover w-1/3 h-36 sm:w-auto sm:h-64 sm:rounded-lg rounded-sm sm:box-border" src={gallery} onClick={(e) => {showImage(e,gallery)}}/>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Gallery
