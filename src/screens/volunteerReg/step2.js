import React, { useEffect, useState } from 'react'
import CheckBox from '../../components/checkbox';
import TextInput from '../../components/textInput';
import AsyncButton from '../../components/asyncButton';
import {saveVolunteerForm} from '../../utils/firebase/volunteerForm'
import useJedis from 'jedisdb'
import { useHistory } from 'react-router';
const WorkSample =({callBack}) =>{
    const [list, setList] = useState([])
    const [text, setText] = useState('')
    const [error, setError] = useState(null)
    function isValidWebUrl(url) {
        let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
        return regEx.test(url);
    }
    const handleList =() =>{
        if(!isValidWebUrl(text)){
            setError('invalid link')
            return
        }
        setError(null)
        setList([...list, text]); 
        setText('')
        callBack('workSample', [...list, text])
    }
    return(
        <>
        <div className='flex items-center'>
            <TextInput 
                label="Work sample, Resume or profile" 
                placeholder="make sure link is public"
                defaultValue={text}
                update={text}
                error={error}
                onChange={(data)=>{
                    setText(data)
                    setError(null)
                }}
                button={
                    <div
                        className='btn w-24'
                        onClick={()=>{
                            handleList()
                        }}
                    >
                        Add
                    </div>
                }
            />
        </div>
        <div className='flex flex-col gap-1'>
            {
                list.map((link, i)=>{
                    return(
                        <div className=' hover:bg-darkGray-default text-white pl-4  rounded-md relative flex justify-between items-center `'>
                            {link}
                            <div 
                                className=' pl-3 pr-3  cursor-pointer hover:bg-darkGray-600 flex justify-center items-center'
                                onClick={()=>{
                                    list.splice(i,1)
                                    setList([...list])
                                    callBack('workSample', [...list])
                                }}
                            > 
                                x
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
const Step2 =() =>{
    const [data, setData] = useState({})
    const [err, setErr] =  useState({})
    const alert = useJedis('alert')
    const modal = useJedis('modal')

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
        if(!data.role?.length || data.role?.length <2){
            window.volunteerFormErr = {...window.volunteerFormErr, role: 'select atleast 2 roles'}
        }else{
            delete window.volunteerFormErr.role
        }
        setErr(window.volunteerFormErr)
        
        if(!Object.keys(window.volunteerFormErr).length){
            let res = await saveVolunteerForm(data)   
            if(res){
                openAlert('Thank You', 'We\'ll be in touch with you shortly')
            }else{
                openAlert('Oops!','seems like you\'re already registered')
            }
        }
        
    }
    const roles =['Digital Marketing', 'Sponsorship', 'Content writing', 'Graphic Designing', 'Web Development']
    const societies =['SAE JMI', 'TRS JMI', 'IEEE JMI', 'ENACTUS JMI']

    return(
        <div className='flex flex-col gap-8 w-full'>
            <TextInput label="Name" error={err.name} onChange={(data)=>handleInputs('name', data)} />
            <TextInput label="Whatsapp number" error={err.whatsappNumber} onChange={(data)=>handleInputs('whatsappNumber', data)}/>
            <CheckBox label="Gender" error={err.gender} data={['Male', 'Female', 'Prefer not to say', 'Not specified']} onChange={(data)=>handleInputs('gender', data)}/>
            <CheckBox  label="Role" error={err.role} subLabel="Choose atleast two" data={roles} maxSelected={roles.length} onChange={(data)=>handleInputs('role', data)}/>
            <CheckBox  label="Are you currently associated with any society" data={societies} maxSelected={societies.length} onChange={(data)=>handleInputs('society', data)}/>
            {/* <WorkSample callBack={handleInputs}/> */}
            <div class="text-gray-300 font-extralight text-center">
                Kindly send your resume, work-sample and college id to <span className='text-red-400'>contact@tedxjmi.org</span><br/>
                and mention your selected roles in capital in the e-mail subject line
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
    )
}
export default Step2;