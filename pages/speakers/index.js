import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import {data} from '../api/speakers';
import SpeakerCard from "../../components/Speakers/Speaker-card";
import SpeakerDesktop from "../../components/Speakers/Speaker_Desktop";
import SpeakerMobile from "../../components/Speakers/Speakers_Mobile"


function noSpeaker() {

  const ref = React.createRef(null);
  const [mH, setMH] = useState(0);
  useEffect(() => {
    function MH_set(){
      const {x,y} = ref.current.getBoundingClientRect();
      setMH(innerHeight - y);
      
    }
    console.log(mH);
    window.addEventListener('resize', MH_set);
    MH_set();

    return () => {
      window.removeEventListener('resize', MH_set);
    }

  },[mH]);

  return (
    <>
      <div 
        ref={ref}
      className=" flex flex-col justify-center items-center"
        style={{
          minHeight: mH,
        }}
      >
          <div>
            <h1 className="text-xl italic opacity-50">Speakers Will Be Announced Soon!</h1>
          </div>
      </div>
    </>
  )
}

function Speakers() {

    console.log(data);

    

  return (
    <Layout>
      <div className="bg-white font-Cinzel py-0 px-10 ">
          {data.length == 0 ? noSpeaker() : <>
            <div className="pb-32 pt-10 bg-white">
              <SpeakerDesktop data={data}/>
              <SpeakerMobile data={data}/>
            </div>
          </>}

      </div>
    </Layout>
  );
}

export default Speakers;
