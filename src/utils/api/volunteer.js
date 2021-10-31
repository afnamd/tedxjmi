import xhr from './xhr'
import qs from 'qs'
const config = [{
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	},
	withCredentials: true
}]
class volunteer{
    static register = (data) =>{       
        data.csrf = localStorage.getItem('csrf')
        return xhr.post(`${process.env.REACT_APP_WEB_HOST}/app/volunteer/register`,  qs.stringify(data), ...config)
    }

}
export default volunteer