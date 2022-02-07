import React, { useState } from "react";
import Layout from "../../components/layout";
import {data} from '../api/speakers';
import SpeakerCard from "../../components/Speakers/Speaker-card";
import SpeakerDesktop from "../../components/Speakers/Speaker_Desktop";
import SpeakerMobile from "../../components/Speakers/Speakers_Mobile"


function Speakers() {

    console.log(data);

  return (
    <Layout>
      <div className="bg-white font-Cinzel py-0 px-10 ">
          <SpeakerDesktop data={data}/>
          <SpeakerMobile data={data}/>

      </div>
    </Layout>
  );
}

export default Speakers;
