import React,{useState} from "react";
const Input = ({className, placeholder=''}) =>{
    const [focus, setFocus] = useState(false)
    const [data, setData] = useState("")
    return(
        <div className="font-sans">
            <div className={`flex relative border group  rounded-lg pt-2 pb-2 transition-all ${className}`}>
                <div className={`absolute z-0 duration-100 ${!focus&&data===""?'pl-4 pr-5 pt-2 text-gray-200':'pl-4  text-sm text-gray-400'} `} >
                {placeholder}
                </div>
                <input type="text" onChange={(e)=>setData(e.target.value)} onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} className=" z-10 outline-none pl-5 pr-5 pt-5 w-full" style={{backgroundColor: 'rgba(255, 242, 0, 0)'}} />
            </div>
        </div>
    )
}

export default Input;