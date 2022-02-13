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
            let res = await xhr.get(`${process.env.NEXT_PUBLIC_HOST}/auth/handshake`, ...config);
            console.log(res.data.csrf, localStorage.getItem('csrf'))
            localStorage.setItem('csrf', res.data.csrf)
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