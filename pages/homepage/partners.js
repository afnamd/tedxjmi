import React from "react";
const Partners = () =>{
    return(
        <div class="bg-white rounded-2xl p-12 flex flex-col gap-12">
            <div class="font-Cinzel text-2xl">
            <div class=" text-center">
                Partners
            </div>
            <div className="flex flex-wrap w-full items-center justify-around mt-5">
                <div >
                    <img className="w-44" src="/static/images/afnamd-logo.png" alt="afnamd" />
                </div>
                <div>
                    <img className="w-44" src="/static/images/lotto-logo.png" alt="afnamd" />
                </div>
                {/* <div>
                    <img className="w-44" src="/static/images/lotto-logo.png" alt="afnamd" />
                </div>
                <div>
                    <img className="w-44" src="/static/images/lotto-logo.png" alt="afnamd" />
                </div> */}
            </div>
            </div>
        
            <div class="font-Cinzel text-2xl">
            <div class=" text-center">
                Archive
            </div>
            <div class="flex  justify-around mt-5">
                *---------------------*----*----*
            </div>
            </div>
        </div>
    )
}
export default Partners;