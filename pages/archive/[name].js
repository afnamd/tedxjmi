import React from "react";
import axios from "axios";

import { getArchive } from "../api/archive";
import Layout from "../../components/layout";

//Components
import ArchiveTop from "./components/ArchiveTop"

function archive(props) {
  console.log(props);

  return (
    <Layout>
        <ArchiveTop />
    </Layout>
  );
}

export default archive;

// get static props
export async function getServerSideProps({ params }) {
  const resdata = getArchive(params.name);

  return {
    props: {
      data: resdata[0],
      id: params.name,
    },
  };
}
