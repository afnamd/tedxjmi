import Layout from "../../components/layout";
import { GoogleLogin } from 'react-google-login';
import { useEffect, useState } from "react";
import auth from "../../api/auth";
import Razorpay from "../../components/dashboard/razorpay";

export default function Auth() {
    const [user, setUser] = useState(null)
    useEffect(async()=>{
        localStorage.setItem('csrf', (await auth.handshake()).data.csrf);
        let res = await auth.status()
        if(res.data.status)
            setUser(res.data)
    },[])
    const onSuccess = async(data) =>{
        try{
            setUser(data)
            console.log(data)
            let res = await auth.login(data.tokenId)
        }catch(err){
            console.log(err)
        }
    }
    const onFailure = () =>{
        alert('something went wrong please try again after somee times')
    }
    return (
        <Layout>
            <div className="h-screen flex justify-center items-start">
                {
                    user?
                    <Razorpay />:
                    <GoogleLogin
                        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                }
            </div>
        </Layout>
    )
}