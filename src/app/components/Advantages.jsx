import React from "react";
import { ShoppingCart, Star } from "lucide-react";
const Advantages = () => {
	return (
		<>
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
				<div className="relative max-w-5xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
						{/* Top Left - Purified Clean Water (7.0 pH) */}
						<div className="bg-white rounded-3xl p-4 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 left-20 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								7.0 pH
							</div>
							<div className="absolute top-4 left-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229527/image_baby2_tdjjk2.jpg"
									alt="Child"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-12">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Purified Clean Water
								</h4>
								<ul className="space-y-1 text-lg text-gray-700 text-center">
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Three layered water filter
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Removes chlorine and sediments
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										Has essential minerals
									</li>
									<li className="flex items-center">
										<span className="mr-3 text-2xl">💧</span>
										<span className="text-left">
											Best for medications and baby formula
										</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Top Right - Beauty Water (4.5-6 pH) */}
						<div className="bg-white rounded-3xl p-4 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 right-20 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								4.5 - 6 pH
							</div>
							<div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-gray-800 shadow-lg">
								<img
									src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229787/women_beauty_water_bw7zoc.jpg"
									alt="Woman"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-8">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Beauty Water
								</h4>
								<ul className="space-y-1 text-lg text-gray-700 w-full text-right">
									<li className="flex items-center justify-end">
										<span>Skin toner & Astringent</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
									<li className="flex items-center justify-end">
										<span>Hair care, Groom pets</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
									<li className="flex items-center justify-end">
										<span>Clean mirrors & glass</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
									<li className="flex items-center justify-end">
										<span>House cleaning - Floor tiles</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
									{/* <li className="flex items-center justify-end">
								  <span>Great for plants</span>
								  <span className="ml-3 text-2xl">💧</span>
								</li> */}
								</ul>
							</div>
						</div>

						{/* Bottom Left - Strong Acidic Water (2.5 pH) */}
						<div className="bg-white rounded-3xl p-4 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 left-20 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								2.5 pH
							</div>
							<div className="absolute top-4 left-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229527/handwash_acidic_water_kkiptg.jpg"
									alt="Person cleaning"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-8">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Strong Acidic Water
								</h4>
								<ul className="space-y-1 text-lg text-gray-700">
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
						<div className="bg-white rounded-3xl p-4 text-gray-800 relative shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200">
							<div className="absolute top-4 right-20 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
								11.5 pH
							</div>
							<div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
								<img
									src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229786/vegetable_image1_zye9np.jpg"
									alt="Kitchen scene"
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="pt-16 pb-12">
								<h4 className="text-3xl font-bold mb-6 text-center text-gray-800">
									Strong Kangen Water
								</h4>
								<ul className="space-y-1 text-lg text-gray-700 w-full text-right">
									<li className="flex items-center justify-end">
										<span>Oil Emulsifier</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
									<li className="flex items-center justify-end">
										<span>Removes pesticides and chemicals</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
									<li className="flex items-center justify-end">
										<span>From grains, fruits and vegetables</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
									<li className="flex items-center justify-end">
										<span>Cleans greasy pots, pans, laundry</span>
										<span className="ml-3 text-2xl">💧</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Central Image - Water Delivery Professional */}
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
						<div className="w-70 h-70 rounded-full overflow-hidden border-8 border-white shadow-2xl">
							<img
								src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229703/product4_z6qnb8.webp"
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
		</>
	);
};

export default Advantages;
