import React, { useEffect, useState } from 'react'
import AsyncImageGrid from './asyncImageGrid';
function Gallery({showImage,data}) {
    console.log('gallery',data.Gallery  )
    
    return(
        <div className="font-Cinzel bg-white flex flex-col p-6 md:p-20 md:pl-24 md:pr-24 pt-10 text-center md:text-left">
            <div className="text-red-500 text-xl mx-4 font-Cinzel mb-8 ">Image Gallery</div>            
            <AsyncImageGrid galleryId={data.Gallery}/>
        </div>
    ) 
}

export default Gallery
