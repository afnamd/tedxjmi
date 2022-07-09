import qs from 'qs'
import axios from 'axios'
class xhr{
    static get = (url, configuration) =>{
        return axios.get(url, configuration)
    }
    static post = (url, data, configuration) =>{
        let csrf = localStorage.getItem('csrf')
        if(!csrf)
            return
        return axios.post(url, qs.stringify({...data, csrf}), configuration)
    }
}
export default xhr