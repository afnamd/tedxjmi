import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {
        isAuth: false,
        name: '',
        email: '',
        img: ''
    }
});
