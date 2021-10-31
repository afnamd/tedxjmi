import axios from 'axios'
class xhr{
    static get = (url, configuration) =>{
        return axios.get(url, configuration)
    }
    static post = (url, data, configuration) =>{
        return axios.post(url, data, configuration)
    }
}
export default xhr