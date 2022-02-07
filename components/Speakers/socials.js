import React from 'react';

import {BsInstagram,BsTwitter,BsFacebook} from 'react-icons/bs';

function Socials(props) {

    return (
    <div className={props.className}>
        <a 
        className='mx-3 sm:mx-1 sm:text-lg text-xl hover:text-pink-600 transition-all'
        href={props.instagram}>
            <BsInstagram />
        </a>
        <a 
        className='mx-3 sm:mx-2 sm:text-lg text-xl hover:text-blue-400 transition-all'
        href={props.twitter}>
            <BsTwitter />
        </a>
        <a 
        className='mx-3 sm:mx-1 sm:text-lg text-xl hover:text-blue-600 transition-all'
        href={props.facebook}>
            <BsFacebook />
        </a>
    </div>);
}

export default Socials;
