import React, { useEffect, useState } from 'react'
import useJedis from "jedisdb";

var ESCAPE_KEY = 27;

const Alert = () =>{
    const _handleKeyDown = (event) => {
        switch( event.keyCode ) {
            case ESCAPE_KEY:
                hideAlertMiddleware()
                break;
            default: 
                break;
        }
    }
    const alert = useJedis('alert')
    const callAlertAction = (index) =>{
        hideAlertMiddleware()
        if(alert.state.payload.actions[index].callBack)
            alert.state.payload.actions[index].callBack()
    }
    const hideAlertMiddleware = () =>{
        if(alert.state.active && !alert.state.payload.alive){
            if(alert.state.payload.onClose)
                alert.state.payload.onClose()
            alert.state = {}
        }
    }
    useEffect(()=>{
        if(alert.state.active){
            window.history.pushState(null, null, "#alert")
            window.addEventListener('popstate', hideAlertMiddleware)
        }
        else{
            window.history.replaceState(null, null, ' ');
        }
        document.addEventListener("keydown", _handleKeyDown);
        return () => {
            document.removeEventListener("keydown", _handleKeyDown);
            window.removeEventListener("popstate", hideAlertMiddleware);

        }
    },[alert.state.active])// eslint-disable-line react-hooks/exhaustive-deps
    const [display, setDisplay] = useState(false);
    useEffect(()=>{
        if(alert.state.active)
            setDisplay(true)
        else{
            setTimeout(()=>{
                setDisplay(false)
            },200)
        }
    },[alert.state.active])
    return display?(
        <div className=" fixed top-0 w-full h-full flex justify-center items-center" style={{zIndex: '999998', backgroundColor:'rgba(0,0,0,0.8)'}}>
            <div className={`animate__animated ${display && !alert.state.active?'animate__ZoomOut':'animate__ZoomIn' } w-80 md:w-96 h-auto bg-darkGray-default rounded-xl shadow-2xl flex flex-col relative`} style={{animationDuration: '300ms'}}>
            <div className="p-3">
                {
                    alert.state.payload?.data.renderer?
                    alert.state.payload?.data.renderer():
                    (
                        <>
                            <div className="text-center text-white p-2.5 font-bold text-lg">{alert.state.payload?.data.heading}</div>
                            <div className="p-2 text-white tracking-wide text-center text-sm">{alert.state.payload?.data.text}</div>
                        </>
                    )
                }
                
            </div>
            <div className={`bottom-0 flex justify-center w-full border-t-2 border-darkGray-700 text-blue-100 ${!alert.state.payload?.actions?"hidden":''}  relative`}>
                {
                    alert.state.payload?.actions?.map((action, index)=>{
                        return(
                            <div key={action.text} className=" hover:bg-darkGray-600 cursor-pointer rounded-b-xl w-full p-2.5 text-center" onClick={()=>{callAlertAction(index)}}>{action.text}</div>
                        )
                    })
                }                
            </div>
            </div>
        </div>
    ):null
}
export default Alert;