import React, { useState } from "react";
import Layout from "../../components/layout";
import SpeakerCard from "../../components/Speakers/Speaker-card";
function Speakers() {
  return (
    <Layout>
      <div className="bg-white font-Cinzel flex flex-col justify-center items-center py-8">
        <h1 className="text-2xl mb-10">Speakers</h1>

        <div className="flex flex-wrap">
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return (
                  <SpeakerCard />
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Speakers;
