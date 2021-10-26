import React, { useEffect, useState } from 'react'
import Router from '../../utils/router'
import { auth, authHandler } from '../../utils/firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
const VolunteerReg =() =>{
    const [user, loading, error] = useAuthState(auth);
    const routes=[
        {
            auth: false,
            screen:  require('./step1').default,
        },
        {
            auth: false,
            screen:  require('./step2').default,
        },
    ]
    
    return(
        <Router urlRouting={false} className="h-full flex justify-center" activeIndex={user?1:0} data={routes} props={{app: window.app}}  animate={true}/>
    )
}
export default VolunteerReg