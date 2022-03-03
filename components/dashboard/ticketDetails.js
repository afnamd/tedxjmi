import React, { useEffect, useState } from 'react'
import { useRecoilState } from "recoil";
import { userState as userState } from "../../components/atoms";
import LoadingScreen from "../../components/loading_screen";
import ticket from '../../api/ticket';
import { HiDownload, HiShare } from 'react-icons/hi'
import auth from '../../api/auth';

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

function TicketDetails() {
    const [userData, setUserData] = useRecoilState(userState);

    const [Loading, setLoading] = useState(true);
    const [Ticket, setTicket] = useState({
        image: "",
    });
    useEffect(async () => {

        const ticketData = await ticket.ticketDetails();
        // console.log(ticketData);

        const b64img = arrayBufferToBase64(ticketData.data.image.data);
        // console.log(b64img);

        setTicket({
            ...Ticket,
            image: b64img
        });

        setLoading(false);
    }, [])


    if (Loading) {
        return <LoadingScreen />
    }

    const handleLogout = async () => {
        setUserData({ ...userData, isAuth: null, alreadyHaveATicket: false });
        try {
            console.log("Logging out");
            await auth.logout()
            setUserData({ isAuth: false, alreadyHaveATicket: false });
        } catch (e) {
            console.log(e);
            setUserData({ ...userData, isAuth: true })
        }
    }

    return (
        <div className={`flex flex-col justify-center items-center h-screen`}>

            <button className="absolute right-8 top-7 hover:underline" onClick={() => handleLogout()}>Logout</button>


            <div
                className={`h-3/4 p-4 `}
            >
                <img
                    className={`h-full rounded-md shadow-2xl shadow-red-400/20`}
                    src={`data:image/png;base64, ${Ticket.image}`} alt="ticket" />
            </div>
            <div
                className={`mt-5`}
            >
                <button
                    className={`p-3 px-4 bg-green-600/70 text-sm text-white font-Poppins font-medium rounded-md shadow-2xl flex
                        hover:bg-green-600/80
                        transition-all
                    `}
                >
                    <HiDownload className={`self-center mr-2`} />
                    <a
                        className={`self-center`}
                        href={`data:image/png;base64, ${Ticket.image}`}
                        download="ticket.png"
                    >
                        Download Ticket
                    </a>
                </button>

            </div>
        </div>
    )
}

export default TicketDetails;