import React, { useState } from 'react'
import Loadingsvg from './loadingSvg'
const AsyncButton = ({callBack, children, button = 'primary'}) =>{    
    const [loading, setLoading] = useState(false)
    const middleware = async(callBack) =>{
        setLoading(true)
        try{
            await callBack()
        }catch(e){
            console.log(e)
        }
        setLoading(false)
    }
    return(
        <>
            <button 
                className={`${button === 'primary'?'btn':'tertiaryBtn'} flex items-center relative w-36 justify-center`}
                onClick={()=>{middleware(callBack)}}
            >
                <div className="absolute left-0 pl-2">
                    <Loadingsvg active={loading} w={button === 'primary'?'25px':'20px'}/>
                </div>
                {children}
            </button>
        </>
    )
}
export default AsyncButton