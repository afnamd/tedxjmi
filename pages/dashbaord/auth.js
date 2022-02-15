import Layout from "../../components/layout";
import { GoogleLogin } from 'react-google-login';
import { useEffect, useState } from "react";
import auth from "../../api/auth";
import Razorpay from "../../components/dashboard/razorpay";
import { useRecoilState } from "recoil";
import { userState as userState } from "../../components/atoms";
import { ToastContainer, toast } from "react-toastify";

const LoadingScreen = () =>{
    return(
        <div className="fixed h-screen w-screen flex justify-center items-start">
            Loading
        </div>
    )
}
export default function Auth() {
    const [user, setUser] = useRecoilState(userState);
    
    const onSuccess = async(data) =>{
        try{
            console.log(data)
            await auth.login(data.tokenId)
            toast.success("Successfully logged in");
            setUser(data.profileObj);
        }catch(err){
            console.log(err)
        }
    }
    const onFailure = () =>{
        alert('something went wrong please try again after somee times')
    }
    return (
        <Layout>
            <div className="min-h-screen flex justify-center items-start">
                {
                    user.isAuth===null?
                    <LoadingScreen />:
                    user.isAuth===false?
                    <GoogleLogin
                        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                    />:
                    <Razorpay />
                    
                }
            </div>
      <ToastContainer />

        </Layout>
    )
}