import React from 'react'
import Link from 'next/link'

function ArchiveMobile({data}) {
    return (
        <div className=" bg-white font-Cinzel border-0">
            <div className="w-screen flex justify-center p-8">
                <div className="w-1/2 flex">    
                    {data.Previous ? 
                    <Link href={data.Previous.href}>
                        <a className="flex text-xl">
                            Previous
                        </a>
                    </Link> 
                    : null}
                </div>
                <div className="w-1/2 flex justify-end">
                    {data.Next ?
                    <Link href={data.Next.href}>
                        <a className="flex text-xl">
                            Next
                        </a>
                    </Link>:null}
                </div>
            </div>
        </div>
    )
}

export default ArchiveMobile
