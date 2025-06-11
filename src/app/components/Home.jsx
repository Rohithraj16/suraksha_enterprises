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
			{/* Kenger water filter advantages */}
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
					Protect Your Family with Best Water
				</h2>
				<h3 className="text-2xl md:text-3xl font-bold text-gray-800">
					Filtering System Services
				</h3>
			</div>

			{/* Services Grid with spacing */}
			<div className="mx-8 mt-16 mb-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 relative">
					{/* Purified Clean Water - 7.0 pH */}
					<div className="bg-green-500 rounded-3xl p-8 text-white relative">
						<div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
							7.0 pH
						</div>
						<div className="absolute top-4 left-4 w-24 h-24 rounded-full overflow-hidden border-2 border-white">
							<img
								src="image_baby2.jpeg"
								alt="Child"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="mt-20">
							<h4 className="text-2xl font-bold mb-4">Purified clean water</h4>
							<ul className="space-y-2 text-sm">
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Three layered water filter
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Removes chlorine and sediments like rust impurities
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Has essential minerals
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Best for medications and baby formula
								</li>
							</ul>
						</div>
						<div className="absolute bottom-4 left-4 w-24 h-24 rounded-full overflow-hidden border-2 border-white">
							<img
								src="image_baby.jpeg"
								alt="Baby"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Purified Clean Water - 4.5-6 pH */}
					<div className="bg-yellow-400 rounded-3xl p-8 text-black relative">
						<div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
							4.5 - 6 pH
						</div>
						<div className="absolute top-4 right-20 w-24 h-24 rounded-full overflow-hidden border-2 border-gray-800">
							<img
								src="women_beauty_water.jpeg"
								alt="Woman"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="mt-20">
							<h4 className="text-2xl font-bold mb-4">Purified clean water</h4>
							<ul className="space-y-2 text-sm">
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Skin toner & Astringent
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Hair care, Groom pets
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Clean mirrors & glass
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									House cleaning - Floor tiles
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Great for plants
								</li>
							</ul>
						</div>
					</div>

					{/* Strong Acidic Water - 2.5 pH */}
					<div className="bg-orange-500 rounded-3xl p-8 text-white relative">
						<div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
							2.5 pH
						</div>
						<div className="absolute top-4 left-4 w-24 h-24 rounded-full overflow-hidden border-2 border-white">
							<img
								src="handwash_acidic_water.jpeg"
								alt="Person cleaning"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="mt-20">
							<h4 className="text-2xl font-bold mb-4">Strong acidic water</h4>
							<ul className="space-y-2 text-sm">
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Disinfectant
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Electrolyzed Hypochlorous Acid
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Kills virus and bacteria
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Sterilizing & Sanitizing (Hand sanitizer)
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Skin rashes and allergies
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Make your own chemical free germ killing solutions at home
								</li>
							</ul>
						</div>
					</div>

					{/* Strong Kangen Water - 11.5 pH */}
					<div className="bg-blue-600 rounded-3xl p-8 text-white relative">
						<div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
							11.5 pH
						</div>
						<div className="absolute top-4 right-20 w-24 h-24 rounded-full overflow-hidden border-2 border-white">
							<img
								src="vegetable_image1.jpeg"
								alt="Kitchen scene"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="mt-20">
							<h4 className="text-2xl font-bold mb-4">Strong Kangen water</h4>
							<ul className="space-y-2 text-sm">
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Oil Emulsifier
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Removes pesticides and agricultural chemicals from food
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									grains, fruits and vegetables &
								</li>
								<li className="flex items-center">
									<span className="mr-2">💧</span>
									Cleans greasy pots, pans, laundry detergent
								</li>
							</ul>
						</div>
						<div className="absolute bottom-4 right-4 w-24 h-24 rounded-full overflow-hidden border-2 border-white">
							<img
								src="fruits_image.jpeg"
								alt="Vegetables"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Central Image - Made Much Bigger */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
						<div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
							<img
								src="product4.webp"
								alt="Water delivery professional"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
