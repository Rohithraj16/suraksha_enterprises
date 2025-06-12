import React from "react";
import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

function Products() {
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
		<>
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
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
											₹{product.price.toLocaleString("en-IN")}
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
		</>
	);
}

export default Products;
