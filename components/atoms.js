import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {
        isAuth: null,
        name: '',
        email: '',
        picture: '',
        alreadyHaveATicket: false
    }
});

export const paymentState = atom({
    key: "paymentState",
    default: {
        status: null,
        finalamount: 0,
        coupon: '',
        isJMIStudent: false,
    }
});