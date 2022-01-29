import React, { useState } from "react";

function SpeakerCard() {
  const card = React.useRef(null);
  const [Shadow, setShadow] = useState({
    width: "0px",
    height: "0px",
    x: "0px",
    y: "0px",
  });
  React.useEffect(() => {
    if (card != null) {

      const { x, y, height, width } = card.current.getBoundingClientRect();

      setShadow({
        width: `${width}px`,
        height: `${height}px`,
        x: `${x}px`,
        y: `${y}px`,
      });
    }

    const resizeListener = () => {
        const { x, y, height, width } = card.current.getBoundingClientRect();

        setShadow({
          width: `${width}px`,
          height: `${height}px`,
          x: `${x}px`,
          y: `${y}px`,
        });
    }

    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [card]);

  return (
    <div className="w-1/2 lg:w-1/4 md:p-8">
      <div
        className="flex flex-col justify-center items-center card overflow-hidden"
        ref={card}
      >
        <img
          className="w-full photo"
          src="/static/images/speakers/dummyperson.jpeg"
        />
        <div
          className="black-blur w-72 h-10 bg-black absolute"
          style={{
            width: Shadow.width,
            height: Shadow.height,
          }}
        ></div>
        <div
          className="absolute flex flex-col justify-end items-center"
          style={{
            width: Shadow.width,
            height: Shadow.height,
          }}
        >
          <h1 className="py-4 text-white lg:text-2xl">Name</h1>
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;
