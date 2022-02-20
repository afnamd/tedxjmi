import React,{useState} from "react";

import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function isValidEmail(email){
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  
    return emailRegex.test(email);
  }
  

const Input = ({className, placeholder=''}) =>{
    const [focus, setFocus] = useState(false)
    const [data, setData] = useState("")

    const onSubmit = async () => {
        if(isValidEmail(data)){
            try{
                const url = `${process.env.NEXT_PUBLIC_BASE_URL}/different-lenses/newsletter_signup`;
                // console.log(url);

                const res = await axios.post(url, {
                    email: data
                });
                if (res.status === 200) {
                    toast.success("Successfully subscribed");

                    // console.log(res.data)
                    setData("");
                }

            } catch(e){
                toast.error("Something went wrong");
            }
        }else{
            toast.error("Please enter a Valid Email")
        }
    }

    return(
        <div className="font-sans">
            <div className={`flex relative border group  rounded-lg h-16 transition-all ${className}`}>
                <div className={`absolute z-0 duration-100 ${!focus&&data===""?'pl-4 pr-5 pt-4 text-gray-200':'pl-4 pt-2  text-sm text-gray-400'} `} >
                {placeholder}
                </div>
                <input type="text" onChange={(e)=>setData(e.target.value)} onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} className=" z-10 outline-none pl-5 pr-5 pt-5 w-full" style={{backgroundColor: 'rgba(255, 242, 0, 0)'}}  value={data}/>
                <button className="hover:bg-gray-900 active:bg-slate-800 rounded-r-2xl ring-white p-4" onClick={onSubmit}>Signup</button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Input;