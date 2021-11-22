import React,{useEffect, useState} from "react";
import useWindowSize from '../../utils/winResize'
import ImageShow from "./ImageShow";    
const ImageGrid = ({data}) =>{
    const [gridCount, setGridCount] = useState(0)
    const [width] = useWindowSize()
    useEffect(()=>{
        if(width>1119)
            setGridCount(4);
        else if(width>640)
            setGridCount(3);
        else
            setGridCount(1)
    },[width, setGridCount])

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
    return(
        <>
        <ImageShow archive={archive} setArchive={setArchive} hideImage={hideImage}/>
        <div className="flex flex-wrap justify-center">
            {
                Array(gridCount).fill(0).map((_,i)=>{
                    return (
                        <div key={i.toString()} className="flex flex-col">
                            {
                                [...data].map((gallery,j)=>{
                                return j%gridCount===i?(
                                    <div key={gallery.displayName} className="md:w-96 w-80 flex flex-col border relative overflow-hidden rounded-md">
                                            <img className="sm:rounded-lg rounded-sm sm:box-border" src={gallery} onClick={(e) => {showImage(e,gallery)}}/>
                                    </div>
                                ):null
                                })
                            }

                        </div>

                    )
                })
            }
        </div>
        </>
    )
}
export default ImageGrid;