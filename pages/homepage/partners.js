import React from "react";
import AfnamdLogo from "../../components/svg/afnamd";
const Partners = () =>{
    return(
        <div class="bg-white rounded-2xl p-12 flex flex-col gap-12 min-h-400">
            <div class="font-Cinzel text-2xl">
            <div class=" text-center">
                <h3>Partners</h3>
            </div>
            <div class="flex  justify-around mt-5">
                <div>
                   <AfnamdLogo fill={'#2A2829'} w={256}/>
                </div>
            </div>
            </div>
        
            <div class="font-Cinzel text-2xl">
            {/* <div class=" text-center">
                Archive
            </div>
            <div class="flex  justify-around mt-5">
                *---------------------*----*----*
            </div> */}
            </div>
        </div>
    )
}
export default Partners;