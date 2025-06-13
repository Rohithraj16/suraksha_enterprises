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
	const services = [
		{
			id: 1,
			title: "Filter Cartridge Replacement",
			description:
				"Professional replacement of water filter cartridges for optimal water quality. We handle all types of filter cartridges including sediment, carbon, and specialty filters.",
			features: [
				"Quick installation",
				"Quality cartridges",
				"Performance testing",
				"Disposal of old filters",
			],
			image: "/services_page_pics/waterfilter_serviies_image1.jpeg",
			alt: "Filter cartridge replacement service",
		},
		{
			id: 2,
			title: "Under-Sink System Installation",
			description:
				"Complete installation of under-sink water filtration systems. Perfect for kitchens, providing clean filtered water directly from your tap.",
			features: [
				"Professional installation",
				"System testing",
				"User training",
				"Warranty included",
			],
			image: "/services_page_pics/waterfilter_serviies_image2.png",
			alt: "Under-sink water filter installation",
		},
		{
			id: 3,
			title: "System Maintenance & Repair",
			description:
				"Comprehensive maintenance and repair services for all water filtration systems. Keep your system running efficiently with regular professional care.",
			features: [
				"Diagnostic testing",
				"Component replacement",
				"System optimization",
				"Emergency repairs",
			],
			image: "/services_page_pics/waterfilter_serviies_image3.webp",
			alt: "Water filter system maintenance",
		},
		{
			id: 4,
			title: "Commercial RO System Setup",
			description:
				"Industrial-grade reverse osmosis systems for businesses and commercial properties. High-capacity filtration for demanding environments.",
			features: [
				"Custom sizing",
				"Professional installation",
				"Monitoring systems",
				"Maintenance contracts",
			],
			image: "/services_page_pics/waterfilter_serviies_image4.webp",
			alt: "Commercial RO system installation",
		},
		{
			id: 5,
			title: "Filter Components & Accessories",
			description:
				"Complete range of water filter components, replacement parts, and accessories. Everything you need to maintain your water filtration system.",
			features: [
				"Genuine parts",
				"Complete kits",
				"Installation hardware",
				"Technical support",
			],
			image: "/services_page_pics/waterfilter_serviies_image5.jpg",
			alt: "Water filter components and accessories",
		},
	];
	const ups_services = [
		{
			id: 1,
			title: "UPS Installation & Setup",
			description:
				"Professional installation of UPS systems for homes and offices. We ensure proper sizing, configuration, and integration with your electrical systems for reliable backup power.",
			features: [
				"System sizing & selection",
				"Professional installation",
				"Load testing",
				"User training",
			],
			image: "/services_page_pics/ups_services_image1.jpg",
			alt: "UPS installation and setup service",
			icon: <Power className="h-8 w-8" />,
		},
		{
			id: 2,
			title: "Battery Replacement & Testing",
			description:
				"Expert battery replacement and testing services for all UPS brands. We ensure your backup power system is always ready with high-quality replacement batteries.",
			features: [
				"Battery health testing",
				"Genuine replacements",
				"Proper disposal",
				"Performance verification",
			],
			image: "/services_page_pics/ups_services_image2.webp",
			alt: "UPS battery replacement service",
			icon: <Battery className="h-8 w-8" />,
		},
		{
			id: 3,
			title: "UPS Maintenance & Repair",
			description:
				"Comprehensive maintenance and repair services for all UPS systems. Keep your backup power solution running efficiently with regular professional care and quick repairs.",
			features: [
				"Preventive maintenance",
				"Component repair",
				"System diagnostics",
				"Emergency repairs",
			],
			image: "/services_page_pics/ups_services_image3.jpeg",
			alt: "UPS maintenance and repair service",
			icon: <Wrench className="h-8 w-8" />,
		},
		{
			id: 4,
			title: "Commercial UPS Solutions",
			description:
				"Industrial-grade UPS systems for businesses and commercial properties. High-capacity backup power solutions for servers, data centers, and critical equipment.",
			features: [
				"Custom solutions",
				"Scalable systems",
				"Monitoring integration",
				"Service contracts",
			],
			image: "/services_page_pics/ups_services_image4.jpeg",
			alt: "Commercial UPS solutions",
			icon: <Monitor className="h-8 w-8" />,
		},
		{
			id: 5,
			title: "UPS Components & Accessories",
			description:
				"Complete range of UPS components, replacement parts, and accessories. Everything you need to maintain and upgrade your uninterruptible power supply system.",
			features: [
				"Genuine parts",
				"Complete accessories",
				"Technical support",
				"Warranty coverage",
			],
			image: "/services_page_pics/ups_services_image5.jpeg",
			alt: "UPS components and accessories",
			icon: <Cpu className="h-8 w-8" />,
		},
	];
	const gas_services = [
		{
			id: 1,
			title: "Gas Geyser Installation",
			description:
				"Professional installation of gas geysers with proper ventilation and safety measures. We ensure code compliance and optimal performance for your new gas water heating system.",
			features: [
				"Professional installation",
				"Safety compliance",
				"Ventilation setup",
				"Performance testing",
			],
			image: "/services_page_pics/gasgeyser_services_image1.jpeg",
			alt: "Gas geyser installation service",
			icon: <Flame className="h-8 w-8" />,
		},
		{
			id: 2,
			title: "Gas Geyser Repair & Maintenance",
			description:
				"Expert repair and maintenance services for all gas geyser brands. Keep your gas water heater running efficiently with regular professional maintenance and quick repairs.",
			features: [
				"Burner cleaning",
				"Thermostat repair",
				"Gas line inspection",
				"Emergency repairs",
			],
			image: "/services_page_pics/gasgeyser_services_image2.jpeg",
			alt: "Gas geyser repair service",
			icon: <Wrench className="h-8 w-8" />,
		},
		{
			id: 3,
			title: "Gas Line Connection & Safety",
			description:
				"Safe and professional gas line connections for geysers. Our certified technicians ensure proper gas supply and safety compliance for your gas water heating system.",
			features: [
				"Gas line installation",
				"Leak detection",
				"Safety inspection",
				"Compliance certification",
			],
			image: "/services_page_pics/gasgeyser_services_image3.jpg",
			alt: "Gas line connection service",
			icon: <Settings className="h-8 w-8" />,
		},
		{
			id: 4,
			title: "Instant Gas Geyser Service",
			description:
				"Specialized service for instant gas geysers including installation, repair, and maintenance. Perfect for on-demand hot water with energy efficiency.",
			features: [
				"Instant heating setup",
				"Flow sensor calibration",
				"Efficiency optimization",
				"Digital display repair",
			],
			image: "/services_page_pics/gasgeyser_services_image4.webp",
			alt: "Instant gas geyser service",
			icon: <Zap className="h-8 w-8" />,
		},
		{
			id: 5,
			title: "Gas Geyser Showroom & Consultation",
			description:
				"Visit our showroom to explore various gas geyser models and get expert advice on the best solution for your home's hot water needs and budget.",
			features: [
				"Multiple brands",
				"Expert consultation",
				"Live demonstrations",
				"Financing options",
			],
			image: "/services_page_pics/gasgeyser_services_image5.jpg",
			alt: "Gas geyser showroom",
			icon: <Thermometer className="h-8 w-8" />,
		},
	];
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
				<div className="absolute inset-0 bg-black opacity-10"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex justify-center mb-6">
						<Droplets className="h-16 w-16 text-blue-200" />
					</div>
					<h1 className="text-5xl font-bold mb-6">Our Water Filter Services</h1>
					<p className="text-xl max-w-3xl mx-auto leading-relaxed">
						Professional water filtration solutions for homes and businesses.
						From installation to maintenance, we ensure your water is pure,
						safe, and great-tasting with our comprehensive range of services.
					</p>
				</div>
			</div>

			{/* Description Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Why Choose Our Water Filter Services?
						</h2>
						<p className="text-lg text-gray-700 mb-6">
							With years of experience in water filtration technology, we
							provide reliable, efficient, and cost-effective solutions tailored
							to your specific needs. Our certified technicians ensure every
							installation and service meets the highest industry standards.
						</p>
						<div className="space-y-4">
							<div className="flex items-center">
								<Shield className="h-6 w-6 text-blue-600 mr-3" />
								<span className="text-gray-700">
									Licensed & Insured Professionals
								</span>
							</div>
							<div className="flex items-center">
								<CheckCircle className="h-6 w-6 text-green-600 mr-3" />
								<span className="text-gray-700">Quality Guaranteed Work</span>
							</div>
							<div className="flex items-center">
								<Wrench className="h-6 w-6 text-orange-600 mr-3" />
								<span className="text-gray-700">24/7 Emergency Support</span>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-lg shadow-xl p-8">
						<h3 className="text-2xl font-semibold text-gray-900 mb-4">
							Service Benefits
						</h3>
						<ul className="space-y-3 text-gray-700">
							<li className="flex items-start">
								<span className="text-blue-600 mr-2">•</span>
								Improved water taste and odor elimination
							</li>
							<li className="flex items-start">
								<span className="text-blue-600 mr-2">•</span>
								Removal of harmful contaminants and chemicals
							</li>
							<li className="flex items-start">
								<span className="text-blue-600 mr-2">•</span>
								Reduced plastic bottle waste and costs
							</li>
							<li className="flex items-start">
								<span className="text-blue-600 mr-2">•</span>
								Increased appliance lifespan and efficiency
							</li>
							<li className="flex items-start">
								<span className="text-blue-600 mr-2">•</span>
								Peace of mind with clean, safe water
							</li>
						</ul>
					</div>
				</div>

				{/* Services Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
						>
							{/* Service Image */}
							<div className="relative h-48">
								<img
									src={service.image}
									alt={service.alt}
									className="object-cover w-full h-full"
								/>
								<div className="absolute top-4 left-4">
									<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
										Service {service.id}
									</span>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">
									{service.description}
								</p>

								<div className="space-y-2 mb-6">
									{service.features.map((feature, index) => (
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
									Get Quote
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
				{/* Hero Section */}
				<div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
					<div className="absolute inset-0 bg-black opacity-10"></div>
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<div className="flex justify-center mb-6">
							<Flame className="h-16 w-16 text-orange-200" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Our Gas Geyser Services</h1>
						<p className="text-xl max-w-3xl mx-auto leading-relaxed">
							Professional gas geyser solutions for homes and businesses. From
							installation to maintenance, we ensure your gas water heating
							system is safe, efficient, and provides reliable hot water with
							our comprehensive range of services.
						</p>
					</div>
				</div>

				{/* Description Section */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Why Choose Our Gas Geyser Services?
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								With years of experience in gas water heating technology, we
								provide reliable, safe, and cost-effective solutions tailored to
								your specific needs. Our certified technicians ensure every
								installation and service meets the highest safety standards and
								industry regulations.
							</p>
							<div className="space-y-4">
								<div className="flex items-center">
									<Shield className="h-6 w-6 text-orange-600 mr-3" />
									<span className="text-gray-700">
										Licensed Gas Technicians
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="h-6 w-6 text-green-600 mr-3" />
									<span className="text-gray-700">Safety Guaranteed Work</span>
								</div>
								<div className="flex items-center">
									<Wrench className="h-6 w-6 text-red-600 mr-3" />
									<span className="text-gray-700">
										24/7 Emergency Gas Service
									</span>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-xl p-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-4">
								Gas Geyser Benefits
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

					{/* Gas Services Grid with Images */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{gas_services.map((service) => (
							<div
								key={service.id}
								className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
							>
								{/* Service Image */}
								<div className="relative h-48">
									<img
										src={service.image}
										alt={service.alt}
										className="object-cover w-full h-full"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
											Gas Service {service.id}
										</span>
									</div>
									{/* Icon overlay */}
									<div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
										<div className="text-orange-600">{service.icon}</div>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{service.title}
									</h3>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{service.description}
									</p>

									<div className="space-y-2 mb-6">
										{service.features.map((feature, index) => (
											<div
												key={index}
												className="flex items-center text-sm text-gray-700"
											>
												<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
												<span>{feature}</span>
											</div>
										))}
									</div>

									<button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
										Get Quote
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Safety Information */}
					<div className="mt-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-500">
						<div className="flex items-center mb-4">
							<Shield className="h-8 w-8 text-orange-600 mr-3" />
							<h3 className="text-2xl font-bold text-gray-900">Safety First</h3>
						</div>
						<p className="text-gray-700 mb-4">
							Gas geyser installation and maintenance require specialized
							knowledge and certification. Our technicians are fully licensed
							and follow strict safety protocols to ensure your family's safety.
						</p>
						<div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
							<div className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
								<span>Gas leak detection</span>
							</div>
							<div className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
								<span>Proper ventilation</span>
							</div>
							<div className="flex items-center">
								<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
								<span>Safety certifications</span>
							</div>
						</div>
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
				{/* Hero Section */}
				<div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
					<div className="absolute inset-0 bg-black opacity-10"></div>
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<div className="flex justify-center mb-6">
							<Battery className="h-16 w-16 text-purple-200" />
						</div>
						<h1 className="text-5xl font-bold mb-6">Our UPS Services</h1>
						<p className="text-xl max-w-3xl mx-auto leading-relaxed">
							Professional UPS solutions for homes and businesses. From
							installation to maintenance, we ensure your critical systems have
							reliable backup power with our comprehensive range of
							uninterruptible power supply services.
						</p>
					</div>
				</div>

				{/* Description Section */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Why Choose Our UPS Services?
							</h2>
							<p className="text-lg text-gray-700 mb-6">
								With years of experience in power backup technology, we provide
								reliable, efficient, and scalable UPS solutions tailored to your
								specific needs. Our certified technicians ensure every
								installation and service meets the highest industry standards
								for critical power protection.
							</p>
							<div className="space-y-4">
								<div className="flex items-center">
									<Shield className="h-6 w-6 text-purple-600 mr-3" />
									<span className="text-gray-700">
										Certified UPS Technicians
									</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="h-6 w-6 text-green-600 mr-3" />
									<span className="text-gray-700">
										Reliable Power Protection
									</span>
								</div>
								<div className="flex items-center">
									<Wrench className="h-6 w-6 text-indigo-600 mr-3" />
									<span className="text-gray-700">24/7 Emergency Support</span>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-xl p-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-4">
								UPS System Benefits
							</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Instant backup power during outages
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Protection from power surges and spikes
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Prevents data loss and equipment damage
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Maintains business continuity
								</li>
								<li className="flex items-start">
									<span className="text-purple-600 mr-2">•</span>
									Clean, regulated power supply
								</li>
							</ul>
						</div>
					</div>

					{/* UPS Services Grid with Images */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{ups_services.map((service) => (
							<div
								key={service.id}
								className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
							>
								{/* Service Image */}
								<div className="relative h-48">
									<img
										src={service.image}
										alt={service.alt}
										className="object-cover w-full h-full"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
											UPS Service {service.id}
										</span>
									</div>
									{/* Icon overlay */}
									<div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
										<div className="text-purple-600">{service.icon}</div>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{service.title}
									</h3>
									<p className="text-gray-600 mb-4 leading-relaxed">
										{service.description}
									</p>

									<div className="space-y-2 mb-6">
										{service.features.map((feature, index) => (
											<div
												key={index}
												className="flex items-center text-sm text-gray-700"
											>
												<CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
												<span>{feature}</span>
											</div>
										))}
									</div>

									<button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105">
										Get Quote
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
