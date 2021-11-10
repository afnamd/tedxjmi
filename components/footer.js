import React from 'react'
import AfnamdLogo from './svg/afnamd';
const Footer = () =>{
    return(
        <div class="text-white  ml-auto mr-auto w-11/12 2xl:w-10/12 font-Cinzel pt-10 pl-10 pr-10 flex flex-col gap-10 bg-black">
            <div class="flex gap-12 md:items-start items-center flex-col md:flex-row md:justify-between">
            <div class="flex flex-col gap-3">
                <div class=" font-bold text-center md:text-left text-2xl">
                Jamia Millia Islamia, New Delhi
                </div>
                <a target="_blank" href='https://goo.gl/maps/4Y14DhZe4Fu'>
                    <div class="flex items-center gap-3 cursor-pointer hover:ring-1 p-2 ring-white">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 2.5835C10.5012 2.5835 6.45831 6.62641 6.45831 11.6252C6.45831 18.4064 15.5 28.4168 15.5 28.4168C15.5 28.4168 24.5417 18.4064 24.5417 11.6252C24.5417 6.62641 20.4987 2.5835 15.5 2.5835ZM15.5 14.8543C13.7175 14.8543 12.2708 13.4077 12.2708 11.6252C12.2708 9.84266 13.7175 8.396 15.5 8.396C17.2825 8.396 18.7291 9.84266 18.7291 11.6252C18.7291 13.4077 17.2825 14.8543 15.5 14.8543Z" fill="white"/>
                        </svg>
                        <div class="flex flex-col">
                            <div class=" underline">
                            Dr. M. A. Ansari Auditorium, Jamia Millia Islamia
                            </div> 
                            <div class=" font-sans">
                            Where is This?
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex flex-col gap-12">
                <div class="flex flex-col gap-2">
                <div class=" text-xl">
                    Subscribe to our newsletters
                </div>
                <div class="border pl-4 flex rounded-2xl font-sans">
                    <input type="text" class="bg-black outline-none " placeholder="Email" />
                    <button class="hover:ring-1 rounded-r-2xl ring-white p-4">Signup</button>
                </div>
        
                </div>
                <div class="flex justify-center gap-12">
                <div>
                    <a target="_blank" href="https://www.instagram.com/tedxjmi/">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3.75C6.55375 3.75 3.75 6.55375 3.75 10V20C3.75 23.4463 6.55375 26.25 10 26.25H20C23.4463 26.25 26.25 23.4463 26.25 20V10C26.25 6.55375 23.4463 3.75 20 3.75H10ZM10 6.25H20C22.0675 6.25 23.75 7.9325 23.75 10V20C23.75 22.0675 22.0675 23.75 20 23.75H10C7.9325 23.75 6.25 22.0675 6.25 20V10C6.25 7.9325 7.9325 6.25 10 6.25ZM21.25 7.5C20.9185 7.5 20.6005 7.6317 20.3661 7.86612C20.1317 8.10054 20 8.41848 20 8.75C20 9.08152 20.1317 9.39946 20.3661 9.63388C20.6005 9.8683 20.9185 10 21.25 10C21.5815 10 21.8995 9.8683 22.1339 9.63388C22.3683 9.39946 22.5 9.08152 22.5 8.75C22.5 8.41848 22.3683 8.10054 22.1339 7.86612C21.8995 7.6317 21.5815 7.5 21.25 7.5ZM15 8.75C11.5538 8.75 8.75 11.5538 8.75 15C8.75 18.4462 11.5538 21.25 15 21.25C18.4462 21.25 21.25 18.4462 21.25 15C21.25 11.5538 18.4462 8.75 15 8.75ZM15 11.25C17.0675 11.25 18.75 12.9325 18.75 15C18.75 17.0675 17.0675 18.75 15 18.75C12.9325 18.75 11.25 17.0675 11.25 15C11.25 12.9325 12.9325 11.25 15 11.25Z" fill="white"/>
                        </svg>
                    </a>
                </div>
                {/* <div>
                    <a target="_blank" href="#">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 6.93704C27.043 7.36204 26.015 7.64804 24.936 7.77704C26.038 7.11704 26.883 6.07204 27.281 4.82604C26.251 5.43704 25.109 5.88104 23.893 6.12104C22.92 5.08404 21.534 4.43604 20 4.43604C17.054 4.43604 14.666 6.82504 14.666 9.77004C14.666 10.188 14.714 10.596 14.804 10.985C10.371 10.763 6.44099 8.63904 3.80899 5.41104C3.35099 6.19904 3.08799 7.11504 3.08799 8.09404C3.08799 9.94404 4.02899 11.577 5.45999 12.533C4.58599 12.505 3.76299 12.265 3.04399 11.866C3.04399 11.889 3.04399 11.91 3.04399 11.933C3.04399 14.518 4.88199 16.674 7.32299 17.163C6.87599 17.285 6.40399 17.35 5.91699 17.35C5.57399 17.35 5.23899 17.316 4.91399 17.255C5.59299 19.374 7.56299 20.917 9.89699 20.96C8.07199 22.391 5.77199 23.244 3.27199 23.244C2.84199 23.244 2.41699 23.219 1.99899 23.169C4.35999 24.682 7.16299 25.565 10.176 25.565C19.988 25.565 25.352 17.437 25.352 10.388C25.352 10.157 25.347 9.92704 25.337 9.69804C26.38 8.94503 27.285 8.00604 28 6.93704Z" fill="white"/>
                        </svg>
                    </a>
                </div> */}
                <div>
                    <a target="_blank" href="https://www.facebook.com/tedxjmi">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.7998C7.70999 1.7998 1.79999 7.70981 1.79999 14.9998C1.79999 21.6178 6.67499 27.082 13.0272 28.0366V18.4984H9.76139V15.0286H13.0272V12.7198C13.0272 8.89721 14.8896 7.219 18.0666 7.219C19.5882 7.219 20.3928 7.3318 20.7738 7.3834V10.4122H18.6066C17.2578 10.4122 16.7868 11.6908 16.7868 13.132V15.0286H20.7396L20.2032 18.4984H16.7868V28.0648C23.2296 27.1906 28.2 21.682 28.2 14.9998C28.2 7.70981 22.29 1.7998 15 1.7998Z" fill="white"/>
                        </svg>
                    </a>
                </div>
                </div>
            </div>
            
            </div>
            <div class="font-sans mt-10 mb-5 flex md:border-t  flex-col md:flex-row items-center md:justify-between justify-center">
            <div>
                TEDxJMI 2021 Operating under license from TED™
            </div>
            <div class="flex items-center gap-3 hover:ring-1 ring-white m-3 p-3 cursor-pointer">
                Made 
                With
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 20 20">
                    <path d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"/>
                </svg>
                By
                <AfnamdLogo w={138} fill={'white'}/>
        
            </div>
            </div>
        </div>
    )
}
export default Footer;