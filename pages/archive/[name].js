import React,{useState} from "react";

import { getArchive } from "../api/archive";
import Layout from "../../components/layout";

//Components
import ArchiveTop from "./components/ArchiveTop"
import Theme from "./components/theme"
import Speaker from "./components/Speaker"
import Team from "./components/Team"
import ImageGallery from "./components/ImageGallery"
import ImageShow from "./components/ImageShow"
import ArchiveMobile from "./components/ArchiveMobile";

function archive(props) {
  console.log(props);

  const [archive, setArchive] = useState({
    src: "",
    show: false
  });

  function showImage(e, src){
    e.preventDefault();
    setArchive({
      src: src,
      show: true
    });
  }

  function hideImage(e){
    e.preventDefault();
    setArchive({
      src: "",
      show: false
    });
  }

  return (
    <Layout>

        <ImageShow archive={archive} setArchive={setArchive} hideImage={hideImage}/>
        <ArchiveTop data={props.data}/>
        <Theme />
        {props.data.Speaker ? <Speaker archive={archive} setArchive={setArchive} showImage={showImage} data={props.data}/>:null}
        {props.data.Teams ? <Team archive={archive} setArchive={setArchive} showImage={showImage} data={props.data}/>:null}
        {props.data.Gallery ? <ImageGallery archive={archive} setArchive={setArchive} showImage={showImage} data={props.data}/>:null}
        <ArchiveMobile data={props.data}/>
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
