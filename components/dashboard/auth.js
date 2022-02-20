import { useRecoilState } from "recoil";
import { GoogleLogin } from "react-google-login";
import Icons from "../../components/icons";
import { userState as userState } from "../../components/atoms";
import Link from "next/link";
import auth from "../../api/auth";


const onFailure = () => {
    alert("something went wrong please try again after somee times");
};
export default function Auth(){
  const [user, setUser] = useRecoilState(userState);
  const onSuccess = async (data) => {
    try {
        setUser({
            isAuth: null
        })
        console.log(data);
        await auth.login(data.tokenId);
        setUser({...data.profileObj, isAuth: true});
    } catch (err) {
        console.log(err);
        setUser({
            isAuth: false
        })
    }
};
return (
    <div className="flex flex-col h-screen justify-between p-12 items-center animate__animated animate__slideInRight"> 
        <img src="/static/images/Tedxjmi.png"  className="h-12"/> 
        <div >
            <GoogleLogin
                clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                    <div 
                    class="flex cursor-pointer gap-3 pl-8 pr-8 hover:scale-105 active:scale-100 border w-auto justify-center items-center h-12 rounded-full"
                    onClick={renderProps.onClick}
                    >
                    <div>
                        <img src="/static/images/google.svg" />
                    </div>
                    <div>Sign in with google</div>
                    </div>
                )}
            />
        </div>
        <Link href='/'> 
            <div className="flex gap-4 cursor-pointer hover:bg-gray-100 pl-4 pr-4 pt-2 pb-2 rounded-lg"> <Icons icon="arrowLeft" fill="#616161"/>Back to Home</div>
        </Link>
    </div>
)
}