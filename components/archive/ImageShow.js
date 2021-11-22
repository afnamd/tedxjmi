import React from 'react'

import Icons from '../icons'
function ImageShow({archive,setArchive,hideImage}) {
    return (
        <div className="imgshow fixed top-0 left-0 z-20 transition-all" style={{
            pointerEvents: archive?.show ? "auto" : "none",
            opacity: archive.show ? 1 : 0,
        }}>

            <div className="cross fixed top-5 right-5 z-30" onClick={(e) =>{
                console.log("Image Hiding")    
                hideImage(e)
            }}>
                <Icons icon="cross" w="52px" fill="white"/>
            </div>

            <div className="image flex w-screen items-center justify-center h-screen transition-all  ">
                <img className="z-10 md:h-4/5 sm:h-4/5 shadow-lg rounded-2xl" src={archive.src}/>
            </div>
            <div className="backdrop fixed h-screen w-screen bg-gray-900 opacity-80 top-0 pointer-events-auto" style={{
                zIndex: '1',
                pointerEvents: archive.show ? "auto" : "none",

            }} onClick={(e) =>{
                console.log("Image Hiding")    
                hideImage(e)
            }}/>


        </div>
    )
}

export default ImageShow
