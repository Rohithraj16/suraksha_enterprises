"use client";
import React from "react";
import Image from "next/image";
import {
	Droplets,
	Shield,
	Wrench,
	CheckCircle,
	Phone,
	Mail,
	Flame,
	Settings,
	Zap,
	Thermometer,
	Battery,
	Power,
	Monitor,
	Cpu,
} from "lucide-react";

function Services() {
	const filter_products = [
		{
			id: 1,
			title: "Kent Water Purifiers",
			description:
				"Explore a wide range of Kent water purifiers known for advanced RO + UV + UF filtration technologies.",
			features: [
				"Kent Grand Plus",
				"Kent Pearl",
				"Kent Supreme Extra",
				"Kent Maxx UV",
				"Kent Ultra Storage",
			],
			image: "/product_images/kent.png",
			alt: "Kent water purifiers lineup",
		},
		{
			id: 2,
			title: "Copper Pearl Water Purifiers",
			description:
				"Elegant and efficient Copper Pearl water purifiers that combine modern filtration with the goodness of copper.",
			features: [
				"Copper Pearl RO+UV",
				"Copper Pearl Mineral Guard",
				"Wall-Mount & Countertop Models",
				"High TDS Removal Models",
				"Advanced Auto-Clean Function",
			],
			image: "/product_images/copper_pearl.webp",
			alt: "Copper Pearl water purifier",
		},
		{
			id: 3,
			title: "Lux Pure Water Systems",
			description:
				"High-quality Lux Pure purifiers featuring multi-stage filtration and compact designs for homes and offices.",
			features: [
				"Lux Pure AquaStar",
				"Lux Pure Crystal RO+UV",
				"Slim Wall-Mount Models",
				"Dual Cartridge Systems",
				"Smart LED Indicators",
			],
			image: "/product_images/lux_pure.png",
			alt: "Lux Pure RO water systems",
		},
		{
			id: 4,
			title: "Aqua Guard Range",
			description:
				"Trusted Aqua Guard purifiers that offer reliable, high-capacity purification with modern technology.",
			features: [
				"Aqua Guard Reviva",
				"Aqua Guard Enhance RO+UV+MTDS",
				"Aqua Guard Geneus",
				"Aqua Guard Marvel",
				"UV+UF Countertop Solutions",
			],
			image: "/product_images/aqua_guard.webp",
			alt: "Aqua Guard purifier models",
		},
		{
			id: 5,
			title: "Water Filter Services",
			description:
				"Professional services including installation, cartridge replacement, and system repairs for all major brands.",
			features: [
				"Certified Technicians",
				"Original Spare Parts",
				"Annual Maintenance Contracts",
				"24/7 Support",
				"Quick Turnaround",
			],
			image: "/product_images/filter_service.jpg",
			alt: "Technician installing water purifier",
		},
	];

	const ups_products = [
		{
			id: 1,
			title: "Keven Smart UPS",
			description:
				"Compact home UPS offering pure sine wave output for safer appliance performance.",
			features: [
				"1000VA Rating",
				"Smart Overload Protection",
				"Fast Charging",
				"Digital Display",
				"Compact Design",
			],
			image: "/product_images/keven_ups.jpg",
			alt: "Keven UPS system",
		},
		{
			id: 2,
			title: "Microtek UPS SEBz",
			description:
				"Trusted Microtek UPS solution for reliable power backup with auto reset feature.",
			features: [
				"1100VA Capacity",
				"LED Indications",
				"Microcontroller Based",
				"Auto Reset",
				"Battery Protection",
			],
			image: "/product_images/micro_tek.jpg",
			alt: "Microtek UPS",
		},
		{
			id: 3,
			title: "SF Sonic Inverter UPS",
			description:
				"Durable UPS by SF Sonic with advanced circuit design for extended backup.",
			features: [
				"High Surge Protection",
				"Smart LED Indicators",
				"Supports Heavy Appliances",
				"Thermal Management",
				"Short Circuit Proof",
			],
			image: "/product_images/sf_sonic.webp",
			alt: "SF Sonic UPS",
		},
		{
			id: 4,
			title: "Sukam Falcon Eco",
			description:
				"Energy-efficient Sukam UPS designed for residential and small office use.",
			features: [
				"Digital Display",
				"Sine Wave Output",
				"Low Harmonics",
				"Supports Solar Input",
				"Overload Warning",
			],
			image: "/product_images/sukam_ups.webp",
			alt: "Sukam UPS",
		},
		{
			id: 5,
			title: "UPS Installation & Service",
			description:
				"Professional UPS installation and maintenance service for all supported brands.",
			features: [
				"Site Survey",
				"Safe Installation",
				"Battery Checkup",
				"Load Testing",
				"Warranty Support",
			],
			image: "/product_images/ups_service.jpg",
			alt: "UPS technician service",
		},
	];

	const gas_products = [
		{
			id: 1,
			title: "V-Guard Safeflo Gas Geyser",
			description:
				"Energy-efficient instant geyser with auto-ignition and flame failure protection.",
			features: [
				"6L Capacity",
				"Copper Heat Exchanger",
				"Anti-Dry Burning",
				"Overheat Protection",
				"Wall-Mount Design",
			],
			image: "/product_images/v_guard_geyser.webp",
			alt: "V-Guard gas geyser",
		},
		{
			id: 2,
			title: "Hot Touch Rapid 6L Geyser",
			description:
				"Quick-heating gas geyser ideal for small families and bathrooms.",
			features: [
				"6L Tank",
				"Auto Ignition",
				"Double Safety Valve",
				"Rustproof Body",
				"Slim Design",
			],
			image: "/product_images/hot_touch_geyser.webp",
			alt: "Hot Touch gas geyser",
		},
		{
			id: 3,
			title: "Racold Eco Instant",
			description:
				"Reliable instant geyser with Italian design and smart heat sensors.",
			features: [
				"Auto Cut-Off",
				"Temperature Control Knob",
				"Anti-Splash Coating",
				"High Efficiency Burner",
				"IS Certified",
			],
			image: "/product_images/racold_geyser.webp",
			alt: "Racold gas geyser",
		},
		{
			id: 4,
			title: "Blossom 5L Gas Geyser",
			description:
				"Budget-friendly geyser with basic safety features and fast heating capability.",
			features: [
				"5L Capacity",
				"Battery Operated Ignition",
				"Flame Failure Device",
				"Anti-Freeze Protection",
				"Low Gas Consumption",
			],
			image: "/product_images/blossom_geyser.webp",
			alt: "Blossom gas geyser",
		},
		{
			id: 5,
			title: "Geyser Installation & Service",
			description:
				"Certified geyser technicians offering quick, safe setup and regular maintenance.",
			features: [
				"Leak Check",
				"Pipe Fittings",
				"Burner Cleaning",
				"Gas Line Inspection",
				"Annual Servicing Plans",
			],
			image: "/product_images/gas_geyser_service.jpg",
			alt: "Geyser technician service",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 mt-10">
				<div className="absolute inset-0 bg-black opacity-10"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex justify-center mb-6">
						<Droplets className="h-16 w-16 text-blue-200" />
					</div>
					<h1 className="text-5xl font-bold mb-6">Our Water Filter Products</h1>
					<p className="text-xl max-w-3xl mx-auto leading-relaxed">
						Browse our premium selection of water purifiers from trusted brands
						like Kent, Copper Pearl, Aqua Guard, and more. Whether you need RO,
						UV, or mineral filtration, we have the right solution to keep your
						water pure and healthy.
					</p>
				</div>
			</div>

			{/* Description Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Description Section */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						{/* Text Content */}
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Why Choose Our Water Filter Products?
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								We offer a curated selection of top-quality water purifiers from
								trusted brands like Kent, Aqua Guard, Copper Pearl, and Lux
								Pure. Whether you're looking for RO, UV, or mineral-enhanced
								filtration, our products are designed to deliver safe,
								great-tasting water for every household.
							</p>
							<div className="space-y-4">
								<div className="flex items-center">
									<Shield className="h-6 w-6 text-blue-600 mr-3" />
									<span className="text-gray-700">
										Trusted & Certified Brands
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="h-6 w-6 text-green-600 mr-3" />
									<span className="text-gray-700">
										Multi-Stage Filtration Systems
									</span>
								</div>
								<div className="flex items-center">
									<Wrench className="h-6 w-6 text-orange-600 mr-3" />
									<span className="text-gray-700">
										Compatible With All Home Setups
									</span>
								</div>
							</div>
						</div>

						{/* Highlight Box */}
						<div className="bg-white rounded-lg shadow-xl p-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-4">
								Product Benefits
							</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Superior taste and odor removal
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Eliminates bacteria, viruses, and heavy metals
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Environmentally friendly & cost-saving
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Energy-efficient and space-saving models
								</li>
								<li className="flex items-start">
									<span className="text-blue-600 mr-2">•</span>
									Hassle-free installation & maintenance
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Products Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filter_products.map((product) => (
						<div
							key={product.id}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
						>
							{/* Product Image */}
							<div className="relative h-48">
								<img
									src={product.image}
									alt={product.alt}
									className="object-contain w-full h-full"
								/>
								<div className="absolute top-4 left-4">
									<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
										{product.title.split(" ")[0]} {/* Brand name */}
									</span>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{product.title}
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">
									{product.description}
								</p>

								<div className="space-y-2 mb-6">
									{product.features.map((feature, index) => (
										<div
											key={index}
											className="flex items-center text-sm text-gray-700"
										>
											<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
											<span>{feature}</span>
										</div>
									))}
								</div>

								<button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
									View Details
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white p-8 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Improve Your Water Quality?
					</h2>
					<p className="text-xl mb-8 opacity-90">
						Contact us today for a free consultation and quote on our water
						filter services.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						{/* Call Button */}
						<a
							href="tel:+919449666606"
							className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
						>
							<Phone className="h-5 w-5 mr-2" />
							Call Now
						</a>

						{/* Email Button */}
						<a
							href="mailto:Surakshaenterprises@gmail.com"
							className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
						>
							<Mail className="h-5 w-5 mr-2" />
							Email Us
						</a>
					</div>
				</div>
			</div>
			<div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
				{/* Hero Section for Gas Geyser Products */}
				<div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
					<div className="absolute inset-0 bg-black opacity-10"></div>
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<div className="flex justify-center mb-6">
							<Flame className="h-16 w-16 text-orange-200" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Our Gas Geyser Products</h1>
						<p className="text-xl max-w-3xl mx-auto leading-relaxed">
							Discover our range of efficient gas geysers from trusted brands
							like V-Guard, Hot Touch, and Racold Blossom. Designed for instant
							and storage heating needs, our geysers offer energy-saving
							performance and consistent hot water for your home.
						</p>
					</div>
				</div>

				{/* Description Section */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					{/* Description Section for Gas Geyser Products */}
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
						<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
							<div>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Why Choose Our Gas Geyser Products?
								</h2>
								<p className="text-lg text-gray-700 mb-6">
									We offer a curated selection of premium gas geysers designed
									for safety, efficiency, and long-lasting performance. Whether
									you need instant or storage-based heating, our models from
									trusted brands deliver consistent hot water and are perfect
									for Indian households.
								</p>
								<div className="space-y-4">
									<div className="flex items-center">
										<Shield className="h-6 w-6 text-orange-600 mr-3" />
										<span className="text-gray-700">
											Trusted & Verified Brands
										</span>
									</div>
									<div className="flex items-center">
										<CheckCircle className="h-6 w-6 text-green-600 mr-3" />
										<span className="text-gray-700">
											Certified Quality & Durability
										</span>
									</div>
									<div className="flex items-center">
										<Wrench className="h-6 w-6 text-red-600 mr-3" />
										<span className="text-gray-700">
											Easy Installation & Maintenance
										</span>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-lg shadow-xl p-8">
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">
									Product Highlights
								</h3>
								<ul className="space-y-3 text-gray-700">
									<li className="flex items-start">
										<span className="text-orange-600 mr-2">•</span>
										Instant hot water with faster heating
									</li>
									<li className="flex items-start">
										<span className="text-orange-600 mr-2">•</span>
										Lower operating costs compared to electric
									</li>
									<li className="flex items-start">
										<span className="text-orange-600 mr-2">•</span>
										Energy-efficient and environmentally friendly
									</li>
									<li className="flex items-start">
										<span className="text-orange-600 mr-2">•</span>
										Reliable performance during power outages
									</li>
									<li className="flex items-start">
										<span className="text-orange-600 mr-2">•</span>
										Compact design saves space
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Gas Services Grid with Images */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{gas_products.map((product) => (
							<div
								key={product.id}
								className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
							>
								{/* Product Image */}
								<div className="relative h-48">
									<img
										src={product.image}
										alt={product.alt}
										className="object-contain w-full h-full"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
											{product.title.split(" ")[0]}
										</span>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{product.title}
									</h3>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{product.description}
									</p>

									<div className="space-y-2 mb-6">
										{product.features.map((feature, index) => (
											<div
												key={index}
												className="flex items-center text-sm text-gray-700"
											>
												<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
												<span>{feature}</span>
											</div>
										))}
									</div>

									<button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
										View Details
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Call to Action */}
					<div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-white p-8 text-center">
						<h2 className="text-3xl font-bold mb-4">
							Ready for Efficient Gas Water Heating?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Contact us today for a free consultation and quote on our gas
							geyser services.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							{/* Call Button */}
							<a
								href="tel:+919449666606"
								className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
							>
								<Phone className="h-5 w-5 mr-2" />
								Call Now
							</a>

							{/* Email Button */}
							<a
								href="mailto:Surakshaenterprises@gmail.com"
								className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
							>
								<Mail className="h-5 w-5 mr-2" />
								Email Us
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
				{/* Hero Section for UPS Products */}
				<div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
					<div className="absolute inset-0 bg-black opacity-10"></div>
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<div className="flex justify-center mb-6">
							<Battery className="h-16 w-16 text-purple-200" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Our UPS Products</h1>
						<p className="text-xl max-w-3xl mx-auto leading-relaxed">
							Explore our curated range of UPS products for homes, offices, and
							critical systems. From compact home units to high-capacity
							commercial backups, we offer reliable power solutions from top
							brands to keep you protected during outages.
						</p>
					</div>
				</div>

				{/* Description Section */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					{/* Description Section for UPS Products */}
					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Why Choose Our UPS Products?
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								With years of experience in power backup technology, we offer a
								reliable and carefully curated range of UPS systems designed for
								homes, businesses, and mission-critical setups. Our products are
								selected for quality, efficiency, and long-term
								durability—sourced from trusted brands and configured to match
								your exact needs.
							</p>
							<div className="space-y-4">
								<div className="flex items-center">
									<Shield className="h-6 w-6 text-purple-600 mr-3" />
									<span className="text-gray-700">Industry-Leading Brands</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="h-6 w-6 text-green-600 mr-3" />
									<span className="text-gray-700">
										Trusted Quality & Performance
									</span>
								</div>
								<div className="flex items-center">
									<Wrench className="h-6 w-6 text-indigo-600 mr-3" />
									<span className="text-gray-700">
										Support for All Major Models
									</span>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-xl p-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-4">
								UPS Product Benefits
							</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Instant backup power during outages
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Protection from power surges and voltage drops
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Prevents data loss and device damage
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Seamless power for sensitive equipment
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Long-lasting battery life and support
								</li>
							</ul>
						</div>
					</div>

					{/* UPS Services Grid with Images */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{ups_products.map((product) => (
							<div
								key={product.id}
								className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
							>
								{/* Product Image */}
								<div className="relative h-48">
									<img
										src={product.image}
										alt={product.alt}
										className="object-contain w-full h-full"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
											{product.title.split(" ")[0]}
										</span>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{product.title}
									</h3>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{product.description}
									</p>

									<div className="space-y-2 mb-6">
										{product.features.map((feature, index) => (
											<div
												key={index}
												className="flex items-center text-sm text-gray-700"
											>
												<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
												<span>{feature}</span>
											</div>
										))}
									</div>

									<button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105">
										View Details
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Technical Information */}
					<div className="mt-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 border-l-4 border-purple-500">
						<div className="flex items-center mb-4">
							<Power className="h-8 w-8 text-purple-600 mr-3" />
							<h3 className="text-2xl font-bold text-gray-900">
								Power Protection Expertise
							</h3>
						</div>
						<p className="text-gray-700 mb-4">
							UPS installation and maintenance require specialized knowledge of
							electrical systems and power protection. Our technicians are fully
							certified and follow industry best practices to ensure reliable
							backup power for your critical equipment.
						</p>
						<div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
							<div className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
								<span>Load calculation & sizing</span>
							</div>
							<div className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
								<span>Battery health monitoring</span>
							</div>
							<div className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
								<span>Power quality analysis</span>
							</div>
						</div>
					</div>

					{/* Call to Action */}
					<div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white p-8 text-center">
						<h2 className="text-3xl font-bold mb-4">
							Ready for Reliable Backup Power?
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Contact us today for a free consultation and quote on our UPS
							services.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							{/* Call Button */}
							<a
								href="tel:+919449666606"
								className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
							>
								<Phone className="h-5 w-5 mr-2" />
								Call Now
							</a>

							{/* Email Button */}
							<a
								href="mailto:Surakshaenterprises@gmail.com"
								className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center"
							>
								<Mail className="h-5 w-5 mr-2" />
								Email Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
