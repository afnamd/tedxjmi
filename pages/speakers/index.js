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
      <div className="bg-white font-Cinzel py-8 px-10 ">
        {/*<h1 className="text-2xl mb-10">Speakers</h1>*/}

        {/*<div className="flex flex-wrap">*/}
        {/*  {Array(10)*/}
        {/*    .fill(0)*/}
        {/*    .map((_, i) => {*/}
        {/*      return (*/}
        {/*          <SpeakerCard />*/}
        {/*      );*/}
        {/*    })}*/}
        {/*</div>*/}
          <SpeakerDesktop data={data}/>
          <SpeakerMobile data={data}/>

      </div>
    </Layout>
  );
}

export default Speakers;
