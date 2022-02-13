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
