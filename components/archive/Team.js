import React from 'react'
import AsyncImageGrid from './asyncImageGrid'

function Team({showImage,data}) {
    console.log('team',data.Teams)

    return (
        <div className="font-Cinzel bg-white flex flex-col p-6 md:p-20 md:pl-24 md:pr-24 pt-10 text-center md:text-left">
            <div className="text-red-500 text-xl mx-4">Team</div>
            <div className="mt-10">
                <AsyncImageGrid galleryId={data.Teams}/>
            </div>
        </div>
    )
}

export default Team
