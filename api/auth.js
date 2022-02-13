import xhr from './xhr'
const config = [{
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	},
	withCredentials: true
}]
class auth{
    static handshake = async() =>{
        try{
            return await xhr.get(`${process.env.NEXT_PUBLIC_HOST}/auth/handshake`, {withCredentials: true});
        }catch(err){
            console.log(err)
            alert('something went wrong, please refresh the page')
        }
    }
    static status = () =>{
        return xhr.get(`${process.env.NEXT_PUBLIC_HOST}/auth/status`, ...config);
    }
    static login = (token) =>{
        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/auth/signin/`,  {token}, ...config)
    }
}
export default auth