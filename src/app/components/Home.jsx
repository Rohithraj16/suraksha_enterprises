"use client";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Scale, Recycle, Droplet } from "lucide-react";

const Home = () => {
	return (
		<div className="relative py-4 overflow-hidden mt-20">
			{/* Top Wave Shape */}
			<div className="absolute top-0 left-0 w-full overflow-hidden">
				<svg
					className="relative block w-full h-16 md:h-20"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
						fill="#1B3A9B" //color #1B3A99
					/>
				</svg>
			</div>

			{/* Content with padding-top to accommodate the wave */}
			<div className="container mx-auto px-4 pt-16 md:pt-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-7">
				<div className="w-3/4 md:w-2/5 flex flex-col items-start space-y-6 md:ml-auto md:mr-0	 md:pr-8">
					<h1 className="text-3xl md:text-4xl font-bold text-black ">
						{/* heading goes here */}
						Pure Water for Every Home
					</h1>
					<p className="text-3xl md:text-2xl text-black">
						{/* description goes here */}
						Experience the elegance and fluidity of our Waterborn Figure, a
						testament to the beauty of motion and design.
					</p>
				</div>
				<div className="w-3/4 md:w-1/2 flex justify-center">
					<div className="relative md:w-3/5 max-w-md">
						<Image
							src="/waterborn Figure in Motion.png"
							alt="Waterborn Figure in Motion"
							width={500}
							height={500}
							className="object-contain"
							priority
						/>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="bg-white py-4 shadow-grey-400 shadow-lg max-w-4/5 justify-center mx-auto mt-8">
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
		</div>
	);
};

export default Home;
