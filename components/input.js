import React,{useState} from "react";
const Input = ({className, placeholder=''}) =>{
    const [focus, setFocus] = useState(false)
    const [data, setData] = useState("")
    return(
        <div class="font-sans">
            <div class={`flex relative border group  rounded-lg  transition-all ${className}`}>
                <div class={`absolute z-0 duration-100 ${!focus&&data===""?'p-5 text-gray-500':'pl-4 pt-1 text-xs text-gray-800'} `} >
                {placeholder}
                </div>
                <input type="text" onChange={(e)=>setData(e.target.value)} onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} class=" z-10 outline-none p-5" style={{backgroundColor: 'rgba(255, 242, 0, 0)'}} />
            </div>
        </div>
    )
}
export default Input;