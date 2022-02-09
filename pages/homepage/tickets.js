import React from "react";
const Venue = () => {
	return (
		<div className="bg-black relative venueBg flex items-center justify-center ">
			<div
				className="relative gap-4 font-Cinzel flex justify-center flex-col items-center"
				style={{ filter: "blur(0)" }}
			>
				<div
					className="bg-white/90 backdrop-blur-3xl px-20 py-12 rounded-md flex flex-col justify-center items-center"
				>
					<h1
						className="text-2xl text-center"
					>
						<span className="text-red-500">TEDxJMI</span> will premiere online on
					</h1>

					<p className="mt-7 text-3xl">
						<span className="text-red-500">27th</span> of March
					</p>

					<button
						className="mt-10 px-6 py-3 bg-gray-300 text-white"
						disabled
					>
						Book Your Tickets
					</button>
					<p className="text-xs mt-4 opacity-30">
						Tickets aren't available right now. Check back later!
					</p>
				</div>
			</div>
		</div>
	);
};
export default Venue;
