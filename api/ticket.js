import xhr from './xhr'
const config = [{
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	},
	withCredentials: true
}]
class ticket{
    static createOrder = (amount) =>{
        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/ticket/create-order/`,  {amount}, ...config)
    }
    static paymentSuccess = (data) =>{
        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/ticket/payment-success/`,  {...data}, ...config)
    }
}
export default ticket