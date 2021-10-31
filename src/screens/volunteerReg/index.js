import React, { useEffect, useState } from 'react'
import CheckBox from '../../components/checkbox';
import TextInput from '../../components/textInput';
import AsyncButton from '../../components/asyncButton';
import useJedis from 'jedisdb'
import { useHistory } from 'react-router';

import ReCAPTCHA from 'react-google-recaptcha'
import volunteer from '../../utils/api/volunteer';
  
const Step2 =() =>{
    const [data, setData] = useState({})
    const [err, setErr] =  useState({})
    const alert = useJedis('alert')
    const modal = useJedis('modal')
    const roles =['Digital Marketing', 'Sponsorship', 'Graphic Designing']
    const societies =['SAE JMI', 'TRS JMI', 'IEEE JMI', 'ENACTUS JMI']
    const [tick, setTick] = useState(false)
    const [tickErr, setTickErr] = useState(false)
    const [captchaErr, setCaptchaErr] = useState(false)
    const handleInputs =(input, text) =>{
        setData({...data, [input]: text})
    }
    window.d = data
    window.volunteerFormErr = err
    const history = useHistory()
    const openAlert = (heading,text) =>{
        alert.state ={
            payload:{
                data:{
                    heading: heading,
                    text: text
                },
                actions:[
                    {
                        text: 'okay',
                        callBack: async() =>{
                            modal.state=0
                        }
                    }
                ]
            },
            active: true
        } 
    }
    const handleSubmit =async () =>{
        if(!data.name){
            window.volunteerFormErr={...window.volunteerFormErr, name: 'Enter name'}
        }else{
            delete window.volunteerFormErr.name
        }

        if(!data.collegeId){
            window.volunteerFormErr={...window.volunteerFormErr, collegeId: 'Enter College id'}
        }else{
            delete window.volunteerFormErr.collegeId
        }

        if(!data.department){
            window.volunteerFormErr={...window.volunteerFormErr, department: 'Enter department'}
        }else{
            delete window.volunteerFormErr.department
        }

        if(!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(data.email)){
            window.volunteerFormErr={...window.volunteerFormErr, email: 'Enter Email'}
        }else{
            delete window.volunteerFormErr.email
        }
        
        if(!/^\d{10}$/.test(data.whatsappNumber)){
            window.volunteerFormErr = {...window.volunteerFormErr, whatsappNumber: 'invalid mobile number'}
        }else{
            delete window.volunteerFormErr.whatsappNumber
        }

        if(!data.gender?.length){
            window.volunteerFormErr = {...window.volunteerFormErr, gender: 'select gender'}
        }else{
            delete window.volunteerFormErr.gender
        }

        if(!data.role?.length){
            window.volunteerFormErr = {...window.volunteerFormErr, role: 'select roles'}
        }else{
            delete window.volunteerFormErr.role
        }

        if(!tick){
            setTickErr(1)
            return
        }
        if(!window.captchaToken){
            setCaptchaErr(1)
            return
        }
        setErr(window.volunteerFormErr)
       
        
        if(!Object.keys(window.volunteerFormErr).length){
            try{
                let res = await volunteer.register({
                    ...data,
                    captchaToken: window.captchaToken
                })
                console.log(res)
                openAlert('Thank You', 'We\'ll be in touch with you shortly')
            }catch(err){
                openAlert('Oops!','something went wrong please try after later')
            }
        }
        
    }

    return(
        <div className="h-full flex justify-center">
            <div className='flex flex-col gap-8 w-full'>                
                <TextInput label="Name" error={err.name} onChange={(data)=>handleInputs('name', data)} />
                <CheckBox label="Gender" error={err.gender} data={['Male', 'Female', 'Prefer not to say', 'Not specified']} onChange={(data)=>handleInputs('gender', data)}/>
                <TextInput label="Email" error={err.email} onChange={(data)=>handleInputs('email', data.replaceAll(" ",''))} />
                <TextInput label="Department / Faculty" error={err.department} onChange={(data)=>handleInputs('department', data)} />
                <TextInput label="College Id number / Roll number" error={err.collegeId} onChange={(data)=>handleInputs('collegeId', data)} />

                <TextInput label="Whatsapp number" error={err.whatsappNumber} onChange={(data)=>handleInputs('whatsappNumber', data.replaceAll(" ",''))}/>
                <CheckBox  label="Role" error={err.role}  data={roles} maxSelected={roles.length} onChange={(data)=>handleInputs('role', data)}/>
                <CheckBox  label="if you are currently associated with any of these societies" data={societies} maxSelected={societies.length} onChange={(data)=>handleInputs('society', data)}/>
                <div className={`flex  cursor-pointer hover:bg-darkGray-600 p-4 rounded-lg gap-5 items-center justify-center ${!tick && tickErr?'border-red-300 border':''}`} onClick={()=>setTick(!tick)}>
                    <div className='' >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/>
                        {
                            tick?(
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                                ):(
                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                            )
                        }
                        </svg>

                    </div>
                    <div class="text-gray-300 font-extralight text-center">
                        Kindly send your resume, work-sample (if graphic design) and college id to <span className='text-red-400'>contact@tedxjmi.org</span><br/>
                        and mention your selected roles in capital in the e-mail subject line
                    </div>
                </div>  
                {
                    console.log(1)
                }
                <div className={`flex justify-center`}>
                    <div className={`${captchaErr?'border border-red-300':''}`}>
                        <ReCAPTCHA
                            theme='dark'
                            sitekey="6LeLufYcAAAAANmJuNp4iNaOrzDvQIrlyQnaylBG"
                            onChange={(e)=>{
                                window.captchaToken = e
                            }}
                        />
                    </div>
                </div>
                <div className='flex justify-center text-red-400'>
                    {
                        Object.values(err)[0]
                    }
                </div>
                <div className='w-full flex justify-center pb-10'>
                    <AsyncButton
                        callBack={
                            handleSubmit
                        }
                    >
                        Submit
                    </AsyncButton>
                </div>

            </div>
        </div>

    )

}
export default Step2;