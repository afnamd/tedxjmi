import { useState } from "react";
import ticket from "../../api/ticket";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

export default function(){
    const [loading, setLoading] = useState(false)
    const createOrder = async(amount) =>{
        setLoading(true)
        try{
            await displayRazorpay(amount)
        }catch(e){
            console.log(e)
        }
        setLoading(false)
    }
    async function displayRazorpay(selectedAmount) {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
    
        // creating a new order
        const result = await ticket.createOrder(selectedAmount)
    
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
    
        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;
    
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "TEDxJMI",
            image: 'https://i.ibb.co/ncZ8qLG/image.png',
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };
                try{
                    const res = await ticket.paymentSuccess(data);
                    if(res.data.status)
                        console.log('paymentData,',res.data)
                    alert('paymentsuccessfull, see console')
                }catch(e){
                    alert(e)
                    console.log(e)
                }
    
                
            },
            prefill: {            
                // email: "idk@tedxjmi.org",
            },
            notes: {
                address: "TEDxJMI",
            },
            theme: {
                color: "white",
            },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <div>
            <button className="bg-black text-white p-4" onClick={()=>createOrder(300)}>buy ticket</button>
        </div>
    )
}