import React from 'react'

function Team({showImage,data}) {
    return (
        <div class="font-Cinzel bg-white flex flex-col md:p-20 md:pl-24 md:pr-24 pt-10 text-center md:text-left">
            <div class="text-red-500 text-xl mx-4">Team</div>
            <div class="mt-10">
                <div class="flex flex-wrap text-center md:text-left justify-center items-center md:items-start md:justify-start">
                    {data.Teams.map((team,index) => {
                        return (
                            <img class="m-4 w-1/3 mt-2 md:w-1/5 sm:rounded-lg rounded-sm" src={team} onClick={(e) => {showImage(e,team)}}/>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Team
