import React, { useState } from "react";

import { getArchive, data } from "../api/archive";
import Layout from "../../components/layout";

//Components
import ArchiveTop from "../../components/archive/ArchiveTop";
import Theme from "../../components/archive/theme";
import Speaker from "../../components/archive/Speaker";
import Team from "../../components/archive/Team";
import ImageGallery from "../../components/archive/ImageGallery";
import ArchiveMobile from "../../components/archive/ArchiveMobile";

function archive(props) {
  return (
    <Layout>
      <ArchiveTop data={props} />
      <div className="bg-white rounded-b-2xl md:p-12 pb-12">
        <div className="lg:flex 2xl:w-5/6  ml-auto mr-auto"></div>

        <Theme>{props.description} </Theme>
        {props.Speaker ? <Speaker archive={archive} data={props} /> : null}
        {props.Teams ? <Team archive={archive} data={props} /> : null}
        {props.Gallery ? <ImageGallery archive={archive} data={props} /> : null}
        <ArchiveMobile data={props} />
      </div>
    </Layout>
  );
}

export default archive;

export async function getStaticPaths() {
  let paths = data.map((_) => {
    return {
      params: { name: `${_.year}` },
    };
  });
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  let res = data.find((_) => _.year === parseInt(params.name));
  return {
    props: res,
  };
}
