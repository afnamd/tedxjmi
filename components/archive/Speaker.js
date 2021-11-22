import React from 'react'
import ImageGrid from './imageGrid'

function Speaker({data}) {
    console.log('speaker',data.Speaker)
    return (
        <div className="font-Cinzel bg-white flex flex-col md:p-20 md:pl-24 md:pr-24 md:pt-1 text-center md:text-left">
            <div className="text-red-500 text-xl mx-4">Speaker</div>
            <div className="mt-10">
                <ImageGrid data={data.Speaker} />
            </div>
        </div>
    )
}

export default Speaker
