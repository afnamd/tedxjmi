import React from "react";
const Venue = () => {
  return (
    <div className="bg-black relative venueBg text-white flex items-center justify-center ">
      <div
        className="relative gap-4 font-Cinzel flex justify-center flex-col items-center"
        style={{ filter: "blur(0)" }}
      >
        <div className="text-3xl md:text-5xl">Venue</div>
        <div className="flex flex-col items-center">
          <div className="md:text-2xl">Dr. M. A. Ansari Auditorium,</div>
          <div>Jamia Millia Islamia</div>
        </div>
        <a target="_blank" href="https://goo.gl/maps/4Y14DhZe4Fu">
          <div className="flex border-2 p-4 gap-1 rounded-2xl bg-white text-black border-white cursor-pointer">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>View Location</div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Venue;
