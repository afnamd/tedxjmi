import React, { useState, useEffect } from "react";
import useWindowSize from "../../utils/winResize";
import ImageShow from "./ImageShow";
const Loader = () => {
  return (
    <div className=" w-4/6 m-auto flex justify-center gap-1 flex-wrap animate-pulse">
      <div className="w-52 h-52 bg-gray-200  rounded-md" />
      <div className="w-52 h-52 bg-gray-200  rounded-md" />
      <div className="w-52 h-52 bg-gray-200  rounded-md" />
      <div className="w-52 h-52 bg-gray-200  rounded-md" />
      <div className="w-52 h-52 bg-gray-200  rounded-md" />
      <div className="w-52 h-52 bg-gray-200  rounded-md" />
    </div>
  );
};
const AsyncImageGrid = ({ galleryId }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=8f7e34cc57c58c6e98d6378955b17fab&gallery_id=${galleryId}&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => setData(data.photos.photo));
  }, []);
  const [gridCount, setGridCount] = useState(3);
  const [width] = useWindowSize();
  useEffect(() => {
    if (width > 1119) setGridCount(4);
    else if (width > 640) setGridCount(3);
    else setGridCount(1);
  }, [width, setGridCount]);

  const [archive, setArchive] = useState({
    src: "",
    show: false,
  });

  function showImage(e, gallery) {
    e.preventDefault();
    setArchive({
      src: `https://farm${gallery.farm}.staticflickr.com/${gallery.server}/${gallery.id}_${gallery.secret}.jpg`,
      show: true,
    });
  }

  function hideImage(e) {
    e.preventDefault();
    setArchive({
      src: "",
      show: false,
    });
  }
  if (!data) return <Loader />;
  return (
    <>
      <ImageShow
        archive={archive}
        setArchive={setArchive}
        hideImage={hideImage}
      />

      <div className="flex justify-center gap-1">
        {Array(gridCount)
          .fill(0)
          .map((_, i) => {
            return (
              <div
                key={i.toString()}
                className="flex flex-col gap-1 w-full md:w-auto "
              >
                {[...data].map((gallery, j) => {
                  return j % gridCount === i ? (
                    <div
                      key={gallery.displayName}
                      className=" flex flex-col rounded-md w-full md:w-44  overflow-hidden "
                    >
                      <img
                        src={`https://farm${gallery.farm}.staticflickr.com/${gallery.server}/${gallery.id}_${gallery.secret}_m.jpg`}
                        onClick={(e) => {
                          showImage(e, gallery);
                        }}
                      />
                    </div>
                  ) : null;
                })}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default AsyncImageGrid;
