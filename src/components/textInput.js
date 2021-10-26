import React, { useEffect, useState } from 'react'
const TextInput = ({label='',defaultValue='', placeholder,subLabel='',error='', button, onChange=()=>{}, update} ) =>{
    if(!placeholder)
        placeholder = label
    const [data, setData] = useState(defaultValue)   
    useEffect(()=>{
        console.log(11,update)
        setData(update)
    },[update]) 
    useEffect(()=>{
        onChange(data)
    },[data])
    return(
        <div class="flex flex-col gap-1 w-full" >
            <div class="text-gray-300 font-bold">
                {label}
            </div> 
            {subLabel&&<div class="text-gray-300 font-thin text-sm mb-1">
                {subLabel}
            </div> }
            {error&&<div class="text-red-400 font-thin text-sm mb-1">
                {error}
            </div> }
            <div className='flex gap-3'>
                <input 
                    type="text" 
                    value={data} 
                    placeholder={placeholder} 
                    class="p-3 rounded-md w-full outline-none bg-darkGray-default"
                    onChange={(e)=>setData(e.target.value)}
                />
                {button}
            </div>
        </div>
    )
}
export default TextInput;