import xhr from './xhr'
import axios from 'axios'

let cancelToken;

const config = [{
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    withCredentials: true,
    cancelToken: null
}]
class ticket {

    constructor() { }

    static createOrder = (amount) => {
        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/ticket/create-order/`, { amount }, ...config)
    }
    static paymentSuccess = (data) => {
        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/ticket/payment-success/`, { ...data }, ...config)
    }
    static paymentInitiate = (data) => {
        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/ticket/payment-initiate/`, { ...data }, ...config)
    }
    static getTicketPrice = (data) => {

        console.log(cancelToken);

        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Operation Cancelled due to new request");
        }
        cancelToken = axios.CancelToken.source()

        config[0].cancelToken = cancelToken.token;

        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/ticket/ticket-price/`, { ...data }, ...config)
    }

    static ticketDetails = (data) => {
        return xhr.post(`${process.env.NEXT_PUBLIC_HOST}/ticket/ticket-details/`, { ...data }, ...config)
    }
}
export default ticket