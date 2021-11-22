import React from "react";
const data ={
    arrowLeft:(
        <>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </>
    ),
    arrowRight:(
        <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/>
    ),
    close:(
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    ),
    checkBoxOff:(
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    ),
    checkBoxOn:(
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    ),
    cross:(
        <>
            <path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </>
    )
}
const Icons = ({icon, w = "24px", fill = 'black'}) =>{    
    return(
        <svg width={w} height={w} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            {data[icon]}
        </svg>
    )
}
export default Icons;