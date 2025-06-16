import React from "react";
import {
	ArrowRight,
	Play,
	ShieldCheck,
	Scale,
	Recycle,
	Droplet,
} from "lucide-react";
function Features() {
	return (
		// Features Section
		<div className=" bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 shadow-grey-400 shadow-lg max-w-9/10 justify-center mx-auto mt-8 mb-8 rounded-2xl">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						A Trusted Name In
						<br />
						Water Purifier Industry
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
							Ionized water, rich in active hydrogen, neutralizes free radicals,
							boosts energy, and helps reduce signs of aging.
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
	);
}

export default Features;
