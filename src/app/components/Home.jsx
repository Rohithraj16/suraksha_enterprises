"use client";
import React from "react";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { ShieldCheck, Scale, Recycle, Droplet } from "lucide-react";

const Home = () => {
	const [hoveredProduct, setHoveredProduct] = useState(null);

	const products = [
		{
			id: 1,
			name: "LevelLuk SD501",
			price: 277000,
			image: "kengenproduct01.png",
			description:
				"Enagic's flagship model. The industry-leading continuous ionized electrolysis water generator system with the strongest electrolysis chamber available.",
			rating: 4.9,
			plates: "7 Titanium Plates",
			features: [
				"Built-in electrolysis chamber",
				"Large LCD panel",
				"Clear voice prompts",
			],
		},
		{
			id: 2,
			name: "Kangen K8",
			price: 343000,
			image: "kengenproduct2.webp",
			description:
				"Enagic's most powerful antioxidant machine featuring 8 platinum-dipped titanium plates for improved water ionization and increased antioxidant production potential.",
			rating: 4.8,
			plates: "8 Titanium Plates",
			features: [
				"Multi-voltage power supply",
				"Interchangeable plug capability",
				"User-friendly automated features",
			],
		},
		{
			id: 3,
			name: "ANESPA DX",
			price: 200000,
			image: "kengenproduct5.jpg",
			description:
				"Home Spa System that transforms your ordinary bathroom into a natural hot spring resort with continuous stream of healthy ionized mineral water.",
			rating: 4.7,
			plates: "Mineral Ion Water",
			features: [
				"Removes 100% chlorine",
				"Adds safe moisturizing minerals",
				"Healthy for skin and hair",
			],
		},
		{
			id: 4,
			name: "LevelLuk SD501 Platinum",
			price: 297000,
			image: "kengenproduct3.jpg",
			description:
				"Used and loved throughout 82 countries. Now comes with ONE machine capable of speaking all notifications in FIVE languages!",
			rating: 4.9,
			plates: "7 Titanium Plates",
			features: [
				"5-language voice notifications",
				"Built-in electrolysis chamber",
				"Large LCD panel",
			],
		},
		{
			id: 5,
			name: "LevelLuk Super501",
			price: 397000,
			image: "product4.webp",
			description:
				"Enagic's top of the line model for heavy home use. No other water ionizer on the market can compare! Perfect for large families.",
			rating: 5.0,
			plates: "12 Titanium Plates",
			features: [
				"Twin hose system",
				"Industry leading cleaning system",
				"Built-in tank for electrolysis enhancer",
			],
		},
	];
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
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 shadow-grey-400 shadow-lg max-w-4/5 justify-center mx-auto mt-8 mb-8">
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
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						Protect Your Family with Best Water
					</h2>
					<h3 className="text-2xl md:text-3xl font-bold text-gray-600">
						Filtering System Services
					</h3>
				</div>

				{/* Cards Container */}
				<div className="relative max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
						{/* Top Left - Purified Clean Water (7.0 pH) */}
						<div className="bg-white rounded-3xl p-8 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								7.0 pH
							</div>
							<div className="absolute top-4 left-4 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="image_baby2.jpeg"
									alt="Child"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-12">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Purified Clean Water
								</h4>
								<ul className="space-y-4 text-lg text-gray-700">
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Three layered water filter
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Removes chlorine and sediments like rust impurities
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Has essential minerals
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Best for medications and baby formula
									</li>
								</ul>
							</div>

							<div className="absolute bottom-4 left-4 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="image_baby.jpeg"
									alt="Baby"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* Top Right - Beauty Water (4.5-6 pH) */}
						<div className="bg-white rounded-3xl p-8 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								4.5 - 6 pH
							</div>
							<div className="absolute top-4 right-20 w-20 h-20 rounded-full overflow-hidden border-2 border-gray-800 shadow-lg">
								<img
									src="women_beauty_water.jpeg"
									alt="Woman"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-8">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Beauty Water
								</h4>
								<ul className="space-y-4 text-lg text-gray-700">
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Skin toner & Astringent
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Hair care, Groom pets
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Clean mirrors & glass
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										House cleaning - Floor tiles
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Great for plants
									</li>
								</ul>
							</div>
						</div>

						{/* Bottom Left - Strong Acidic Water (2.5 pH) */}
						<div className="bg-white rounded-3xl p-8 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								2.5 pH
							</div>
							<div className="absolute top-4 left-4 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="handwash_acidic_water.jpeg"
									alt="Person cleaning"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-8">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Strong Acidic Water
								</h4>
								<ul className="space-y-3 text-lg text-gray-700">
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Disinfectant
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Electrolyzed Hypochlorous Acid
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Kills virus and bacteria
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Sterilizing & Sanitizing
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Skin rashes and allergies
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Chemical free germ killing solutions
									</li>
								</ul>
							</div>
						</div>

						{/* Bottom Right - Strong Kangen Water (11.5 pH) */}
						<div className="bg-white rounded-3xl p-8 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								11.5 pH
							</div>
							<div className="absolute top-4 right-20 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="vegetable_image1.jpeg"
									alt="Kitchen scene"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-12">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Strong Kangen Water
								</h4>
								<ul className="space-y-4 text-lg text-gray-700">
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Oil Emulsifier
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Removes pesticides and chemicals
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										From grains, fruits and vegetables
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Cleans greasy pots, pans, laundry
									</li>
								</ul>
							</div>

							<div className="absolute bottom-4 right-4 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="fruits_image.jpeg"
									alt="Vegetables"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Central Image - Water Delivery Professional */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
						<div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
							<img
								src="product4.webp"
								alt="Water delivery professional"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Bottom Service Icons */}
				<div className="mt-20 max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🏠</span>
							</div>
							<h4 className="text-xl font-bold text-gray-800 mb-2">
								Residential Waters
							</h4>
							<p className="text-gray-600 text-sm">
								Premium water solutions for your home and family
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🏢</span>
							</div>
							<h4 className="text-xl font-bold text-gray-800 mb-2">
								Commercial Waters
							</h4>
							<p className="text-gray-600 text-sm">
								Professional water systems for businesses
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">🔧</span>
							</div>
							<h4 className="text-xl font-bold text-gray-800 mb-2">
								Filtration Plants
							</h4>
							<p className="text-gray-600 text-sm">
								Advanced filtration technology and maintenance
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-3xl">💎</span>
							</div>
							<h4 className="text-xl font-bold text-gray-800 mb-2">
								Water Softening
							</h4>
							<p className="text-gray-600 text-sm">
								Mineral treatment and water conditioning
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Kenger Main products*/}
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 px-4">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<h1 className="text-5xl font-bold text-gray-800 mb-4 tracking-tight">
							Premium Kangen Water
						</h1>
						<h2 className="text-4xl font-semibold text-blue-600 mb-8">
							Ionizer Systems
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{products.map((product) => (
							<div
								key={product.id}
								className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
									hoveredProduct === product.id ? "ring-2 ring-blue-300" : ""
								}`}
								onMouseEnter={() => setHoveredProduct(product.id)}
								onMouseLeave={() => setHoveredProduct(null)}
							>
								{/* Product Image */}
								<div className="relative p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
									<div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
										{product.plates}
									</div>
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
									/>
								</div>

								{/* Product Info */}
								<div className="p-6">
									{/* Rating */}
									<div className="flex items-center mb-3">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < Math.floor(product.rating)
														? "text-yellow-400 fill-current"
														: "text-gray-300"
												}`}
											/>
										))}
										<span className="ml-2 text-sm text-gray-600">
											({product.rating})
										</span>
									</div>

									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{product.name}
									</h3>

									<p className="text-gray-600 text-sm mb-4 leading-relaxed">
										{product.description}
									</p>

									{/* Features */}
									{product.features && (
										<div className="mb-4">
											<h4 className="text-sm font-semibold text-gray-700 mb-2">
												Key Features:
											</h4>
											<ul className="text-xs text-gray-600 space-y-1">
												{product.features.slice(0, 2).map((feature, index) => (
													<li key={index} className="flex items-center">
														<div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
														{feature}
													</li>
												))}
											</ul>
										</div>
									)}

									{/* Price only */}
									<div className="flex items-center justify-between">
										<div className="text-2xl font-bold text-cyan-500">
											₹{product.price.toLocaleString()}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Call to Action */}
					<div className="text-center mt-16">
						<div className="mb-6">
							<p className="text-gray-600 text-lg mb-4">
								Transform your health with Kangen Water technology
							</p>
							<p className="text-sm text-gray-500">
								*Shipping charges extra as per zone
							</p>
						</div>
						<button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
							Contact for Demo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
