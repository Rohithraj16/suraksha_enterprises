"use client";
import React from "react";
import Image from "next/image";

import { ShieldCheck, Scale, Recycle, Droplet } from "lucide-react";
import Advantages from "./Advantages";
import Products from "./Products";

const Home = () => {
	return (
		<div className="relative py-4 overflow-hidden mt-20 bg-[#75D0F1]">
			{/* Top Wave Shape */}
			<div className="absolute top-0 left-0 w-full overflow-hidden">
				<svg
					className="relative block w-full h-16 md:h-20"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						fill="white" //color #1B3A99
					/>
				</svg>
			</div>

			{/* Content with padding-top to accommodate the wave */}
			<div className="container mx-auto px-4 pt-16 md:pt-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-7">
				<div className="w-3/4 md:w-2/5 flex flex-col items-start space-y-6 md:ml-auto md:mr-0 md:pr-8">
					<style>
						@import
						url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');
					</style>
					<div className="flex flex-col items-end justify-center mb-1">
						<Image
							src="/kengen_images/Kengen_Title.png"
							alt="Kengen Title"
							width={300}
							height={100}
							className="object-contain"
							key="kengen-title"
						/>
						<h2 className=" text-black text-2xl lavishly-yours-regular">
							<b>Waters</b>
						</h2>
					</div>
					<p className="text-sm md:text-2xl text-[#243E79] text-center md:text-left font-[550] ">
						{/* description goes here */}
						Change Your Water .... Change Your Life
					</p>
					<div className="flex flex-row items-center justify-between p-1 w-full">
						<div className="flex flex-col items-start">
							<p className="text-black text-sm font-semibold mb-0">
								Our body is
							</p>
							<div className="flex items-baseline">
								<span className="text-[#243969] text-5xl font-bold">70</span>
								<span className="text-[#243969] text-2xl">%</span>
							</div>
							<p className="text-black text-xl font-bold uppercase">WATER</p>
						</div>

						<div className="flex flex-col items-start">
							<p className="text-black text-sm font-medium mb-0.5">
								And we only
							</p>
							<p className="text-black text- font-medium">talk about</p>
							<p className="text-black text-3xl font-bold uppercase">Food?</p>
						</div>
					</div>
				</div>
				<div className="w-3/4 md:w-1/2 flex justify-center">
					<div className="relative md:w-3/5 max-w-md">
						<Image
							src="/waterborn Figure in Motion.png"
							alt="Waterborn Figure in Motion"
							width={500}
							height={500}
							className="object-contain "
							style={{
								filter: "brightness(1.05) drop-shadow(0 -20px 30px white)",
							}}
							priority
						/>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 shadow-grey-400 shadow-lg max-w-4/5 justify-center mx-auto mt-8 mb-8 rounded-2xl">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							A Trusted Name In
							<br />
							Bottled Water Industry
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Feature 1 */}
						<div className="text-center group hover:shadow-lg hover:bg-gray-50 rounded-lg p-6 transition-all duration-300 leading-tight">
							<div className="flex justify-center mb-4">
								<ShieldCheck className="text-gray-700 w-12 h-12 transform transition-transform duration-300 group-hover:scale-110" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								Antioxidizing
							</h3>
							<p className="text-gray-600">
								Ionized water, rich in active hydrogen, neutralizes free
								radicals, boosts energy, and helps reduce signs of aging.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="text-center group hover:shadow-lg hover:bg-gray-50 rounded-lg p-6 transition-all duration-300 leading-tight">
							<div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
								<Scale className="text-gray-700 w-12 h-12" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								Alkalizing
							</h3>
							<p className="text-gray-600">
								With a pH of 8.5–9.5, this water supports a healthy pH balance,
								counteracts acidic foods, and promotes overall well-being.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="text-center group hover:shadow-lg hover:bg-gray-50 rounded-lg p-6 transition-all duration-300 leading-tight">
							<div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
								<Recycle className="text-gray-700 w-12 h-12" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								Detoxifying
							</h3>
							<p className="text-gray-600">
								Helps flush out acid waste and toxins, supporting colon detox,
								improved digestion, and faster hydration.
							</p>
						</div>

						{/* Feature 4 */}
						<div className="text-center group hover:shadow-lg hover:bg-gray-50 rounded-lg p-6 transition-all duration-300 leading-tight">
							<div className="flex justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
								<Droplet className="text-gray-700 w-12 h-12" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								Hydrating
							</h3>
							<p className="text-gray-600">
								Provides superior hydration through micro-clustered water,
								enhancing cellular absorption and nutrient uptake.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Kenger water filter advantages */}
			<Advantages />
			{/* Kenger Main products*/}
			<Products />
		</div>
	);
};

export default Home;
