"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
	Droplets,
	Zap,
	Shield,
	Heart,
	ArrowRight,
	Play,
	ShieldCheck,
	Scale,
	Recycle,
	Droplet,
} from "lucide-react";
import Advantages from "./Advantages";
import Products from "./Products";

const Home = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [currentFeature, setCurrentFeature] = useState(0);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setCurrentFeature((prev) => (prev + 1) % 3);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const features = [
		{ icon: Droplets, text: "Pure H2O", color: "text-blue-500" },
		{ icon: Shield, text: "99.9% Filtered", color: "text-green-500" },
		{ icon: Heart, text: "Health First", color: "text-red-500" },
	];

	const stats = [
		{ number: "70", unit: "%", label: "Our body is WATER", highlight: true },
		{ number: "99.9", unit: "%", label: "Purification Rate" },
		{ number: "10K+", unit: "", label: "Happy Families" },
		{ number: "24/7", unit: "", label: "Support Available" },
	];

	return (
		<div className="relative py-0 overflow-hidden mt-20 bg-[#75D0F1]">
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
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
				{/* Enhanced Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					{/* Multiple floating bubbles */}
					<div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
					<div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full opacity-30 animate-bounce"></div>
					<div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-25 animate-pulse delay-1000"></div>

					{/* Additional animated elements */}
					<div className="absolute top-60 left-1/3 w-16 h-16 bg-cyan-100 rounded-full opacity-40 animate-bounce delay-700"></div>
					<div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-50 rounded-full opacity-35 animate-pulse delay-1500"></div>
					<div className="absolute top-32 right-1/4 w-20 h-20 bg-cyan-200 rounded-full opacity-30 animate-bounce delay-300"></div>

					{/* Moving wave effect */}
					<div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
						<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-pulse"></div>
						<div className="absolute bottom-2 left-0 w-full h-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-pulse delay-500"></div>
					</div>

					{/* Floating Water Drops with enhanced animation */}
					<div className="absolute top-1/4 left-1/3 text-blue-300 animate-bounce delay-500">
						<Droplets size={20} className="animate-pulse" />
					</div>
					<div className="absolute top-1/3 right-1/4 text-cyan-300 animate-bounce delay-1000">
						<Droplets
							size={16}
							className="animate-spin"
							style={{ animationDuration: "4s" }}
						/>
					</div>
					<div className="absolute bottom-1/3 left-1/5 text-blue-400 animate-bounce delay-1500">
						<Droplets size={24} className="animate-pulse delay-300" />
					</div>
					<div className="absolute top-1/5 left-1/2 text-cyan-400 animate-bounce delay-800">
						<Droplets size={18} className="animate-ping" />
					</div>
					<div className="absolute bottom-1/4 right-1/5 text-blue-300 animate-bounce delay-1200">
						<Droplets size={22} className="animate-pulse delay-700" />
					</div>

					{/* Animated gradient orbs */}
					<div className="absolute top-1/6 right-1/6 w-12 h-12 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-40 animate-ping delay-600"></div>
					<div className="absolute bottom-1/6 left-1/6 w-18 h-18 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-30 animate-ping delay-1300"></div>
				</div>

				<div className="container mx-auto px-4 pt-8 pb-16 relative z-10">
					<div className="flex flex-col items-center justify-center min-h-screen space-y-8">
						{/* Left Content */}
						<div
							className={`w-full lg:w-1/2 space-y-8 transform transition-all duration-1000 ${
								isVisible
									? "translate-x-0 opacity-100"
									: "-translate-x-10 opacity-0"
							}`}
						>
							{/* Brand Header with Original Images */}
							<div className="text-center lg:text-left">
								<div className="flex flex-col items-center lg:items-start space-y-2">
									<div className="relative">
										<img
											src="/kengen_images/Kengen_Title.png"
											alt="Kengen Title"
											className="w-80 h-auto object-contain filter drop-shadow-lg"
										/>
										<div className="absolute -top-2 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
											<Droplets className="text-white" size={16} />
										</div>
									</div>
									<div className="text-right w-full">
										<h2
											className="text-4xl font-bold text-gray-800"
											style={{ fontFamily: "Lavishly Yours, cursive" }}
										>
											Waters
										</h2>
									</div>
								</div>
							</div>

							{/* Tagline */}
							<div className="text-center lg:text-left">
								<h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
									Change Your Water
									<span className="block text-blue-600 text-3xl lg:text-5xl font-extrabold">
										Change Your Life
									</span>
								</h2>
								<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto lg:mx-0 rounded-full"></div>
							</div>

							{/* Rotating Features */}
							<div className="flex justify-center lg:justify-start">
								<div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
									<div className="flex items-center space-x-4">
										{features.map((feature, index) => {
											const Icon = feature.icon;
											return (
												<div
													key={index}
													className={`flex items-center space-x-2 transition-all duration-500 ${
														currentFeature === index
															? "scale-110 opacity-100"
															: "scale-90 opacity-50"
													}`}
												>
													<div
														className={`p-2 rounded-full bg-gradient-to-r ${
															currentFeature === 0
																? "from-blue-500 to-blue-600"
																: currentFeature === 1
																? "from-green-500 to-green-600"
																: "from-red-500 to-red-600"
														}`}
													>
														<Icon className="text-white" size={20} />
													</div>
													<span className={`font-semibold ${feature.color}`}>
														{feature.text}
													</span>
												</div>
											);
										})}
									</div>
								</div>
							</div>

							{/* Stats Grid */}
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
								{stats.map((stat, index) => (
									<div
										key={index}
										className={`text-center p-4 rounded-xl transition-all duration-500 hover:scale-105 ${
											stat.highlight
												? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
												: "bg-white shadow-md"
										}`}
									>
										<div className="flex items-baseline justify-center">
											<span
												className={`text-3xl font-bold ${
													stat.highlight ? "text-white" : "text-blue-600"
												}`}
											>
												{stat.number}
											</span>
											<span
												className={`text-xl ${
													stat.highlight ? "text-blue-100" : "text-blue-500"
												}`}
											>
												{stat.unit}
											</span>
										</div>
										<p
											className={`text-sm font-medium mt-1 ${
												stat.highlight ? "text-blue-100" : "text-gray-600"
											}`}
										>
											{stat.label}
										</p>
									</div>
								))}
							</div>

							{/* Animated Water Flow Visualization */}
							<div className="relative h-32 bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="flex space-x-8">
										{[...Array(5)].map((_, i) => (
											<div
												key={i}
												className="w-4 h-4 bg-blue-500 rounded-full animate-bounce opacity-80"
												style={{
													animationDelay: `${i * 0.2}s`,
													animationDuration: "1.5s",
												}}
											></div>
										))}
									</div>
								</div>

								{/* Flowing water animation */}
								<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
									<div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
									<div className="absolute top-1/2 left-0 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
									<div
										className="absolute top-1/2 right-0 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-ping"
										style={{ animationDelay: "1s" }}
									></div>
								</div>

								<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-600 font-semibold text-sm">
									Pure Water Flow
								</div>
							</div>

							{/* Trust Indicators */}
							<div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
								<div className="flex items-center space-x-1">
									<Shield size={16} className="text-green-500" />
									<span>ISO Certified</span>
								</div>
								<div className="flex items-center space-x-1">
									<Zap size={16} className="text-yellow-500" />
									<span>Energy Efficient</span>
								</div>
								<div className="flex items-center space-x-1">
									<Heart size={16} className="text-red-500" />
									<span>Family Safe</span>
								</div>
							</div>
						</div>

						{/* Mobile Image - Visible on mobile only */}
						<div
							className={`lg:hidden w-full flex justify-center transform transition-all duration-1000 delay-300 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
						>
							<div className="relative flex justify-center items-center">
								{/* Mobile Spotlight/Highlight Background */}
								<div className="absolute inset-0 flex justify-center items-center">
									<div className="w-72 h-72 bg-gradient-radial from-white via-blue-50 to-transparent rounded-full opacity-80 animate-pulse"></div>
									<div className="absolute w-60 h-60 bg-gradient-radial from-blue-100 via-cyan-50 to-transparent rounded-full opacity-60 animate-pulse delay-500"></div>
									<div className="absolute w-48 h-48 bg-gradient-radial from-white via-blue-25 to-transparent rounded-full opacity-90 animate-pulse delay-1000"></div>
								</div>

								{/* Mobile Orbiting Elements */}
								<div
									className="absolute w-72 h-72 animate-spin"
									style={{ animationDuration: "20s" }}
								>
									<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-ping">
										<Droplets className="text-white w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute top-1/4 right-0 w-2 h-2 bg-cyan-400 rounded-full opacity-70 animate-bounce">
										<Droplets className="text-white w-1 h-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full opacity-50 animate-pulse">
										<Droplets className="text-white w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute top-1/4 left-0 w-3 h-3 bg-cyan-300 rounded-full opacity-60 animate-ping delay-500">
										<Droplets className="text-white w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
								</div>

								{/* Mobile Main Image */}
								<div className="relative z-20 flex justify-center items-center">
									<div className="relative">
										<div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-cyan-200 rounded-full opacity-30 transform scale-110 animate-pulse"></div>

										<img
											src="/waterborn_fig.png"
											alt="Waterborn Figure in Motion"
											className="relative z-10 w-64 h-auto object-contain transform hover:scale-110 transition-all duration-700"
											style={{
												filter:
													"brightness(1.1) contrast(1.1) drop-shadow(0 0 30px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(6, 182, 212, 0.4)) drop-shadow(0 -15px 40px rgba(255, 255, 255, 0.8))",
												maxWidth: "280px",
											}}
										/>

										{/* Mobile floating particles */}
										<div className="absolute top-6 -left-6 w-2 h-2 bg-white rounded-full opacity-80 animate-ping"></div>
										<div className="absolute top-12 -right-4 w-2 h-2 bg-blue-300 rounded-full opacity-60 animate-bounce delay-300"></div>
										<div className="absolute bottom-8 -left-3 w-1 h-1 bg-cyan-300 rounded-full opacity-70 animate-ping delay-700"></div>
										<div className="absolute bottom-6 -right-6 w-3 h-3 bg-white rounded-full opacity-50 animate-bounce delay-1000"></div>
									</div>
								</div>

								{/* Mobile Ripple Effects */}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-3 bg-gradient-to-r from-transparent via-blue-200 to-transparent rounded-full opacity-60 animate-pulse"></div>
							</div>
						</div>

						{/* Right Content - Desktop Image - Hidden on mobile */}
						<div
							className={`hidden lg:flex w-full lg:w-1/2 justify-center mt-8 lg:mt-0 transform transition-all duration-1000 delay-300 ${
								isVisible
									? "translate-x-0 opacity-100"
									: "translate-x-10 opacity-0"
							}`}
						>
							<div className="relative flex justify-center items-center">
								{/* Spotlight/Highlight Background */}
								<div className="absolute inset-0 flex justify-center items-center">
									{/* Main spotlight circle */}
									<div className="w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-radial from-white via-blue-50 to-transparent rounded-full opacity-80 animate-pulse"></div>

									{/* Secondary glow */}
									<div className="absolute w-80 h-80 lg:w-96 lg:h-96 bg-gradient-radial from-blue-100 via-cyan-50 to-transparent rounded-full opacity-60 animate-pulse delay-500"></div>

									{/* Inner bright circle */}
									<div className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-gradient-radial from-white via-blue-25 to-transparent rounded-full opacity-90 animate-pulse delay-1000"></div>
								</div>

								{/* Enhanced Orbiting Elements with more animations */}
								<div
									className="absolute w-96 h-96 lg:w-[500px] lg:h-[500px] animate-spin"
									style={{ animationDuration: "20s" }}
								>
									<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-ping">
										<Droplets className="text-white w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute top-1/4 right-0 w-3 h-3 bg-cyan-400 rounded-full opacity-70 animate-bounce">
										<Droplets className="text-white w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full opacity-50 animate-pulse">
										<Droplets className="text-white w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute top-1/4 left-0 w-4 h-4 bg-cyan-300 rounded-full opacity-60 animate-ping delay-500">
										<Droplets className="text-white w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute bottom-1/4 right-0 w-6 h-6 bg-blue-600 rounded-full opacity-40 animate-bounce delay-700">
										<Droplets className="text-white w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
									<div className="absolute bottom-1/4 left-0 w-3 h-3 bg-cyan-500 rounded-full opacity-80 animate-ping delay-1000">
										<Droplets className="text-white w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
									</div>
								</div>

								{/* Counter-rotating inner orbit */}
								<div
									className="absolute w-64 h-64 lg:w-80 lg:h-80 animate-spin"
									style={{
										animationDuration: "15s",
										animationDirection: "reverse",
									}}
								>
									<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-90 animate-ping"></div>
									<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-200 rounded-full opacity-70 animate-bounce"></div>
									<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-200 rounded-full opacity-80 animate-pulse"></div>
									<div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-300 rounded-full opacity-60 animate-ping delay-300"></div>
								</div>

								{/* Main Image Container - Centered and Highlighted */}
								<div className="relative z-20 flex justify-center items-center">
									<div className="relative">
										{/* Enhanced backdrop for image */}
										<div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-cyan-200 rounded-full opacity-30 transform scale-110 animate-pulse"></div>

										<img
											src="/waterborn_fig.png"
											alt="Waterborn Figure in Motion"
											className="relative z-10 w-80 h-auto lg:w-96 object-contain transform hover:scale-110 transition-all duration-700"
											style={{
												filter:
													"brightness(1.1) contrast(1.1) drop-shadow(0 0 50px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 100px rgba(6, 182, 212, 0.4)) drop-shadow(0 -20px 60px rgba(255, 255, 255, 0.8))",
												maxWidth: "400px",
											}}
										/>

										{/* Enhanced floating highlight particles around image */}
										<div className="absolute top-8 -left-8 w-2 h-2 bg-white rounded-full opacity-80 animate-ping"></div>
										<div className="absolute top-16 -right-6 w-3 h-3 bg-blue-300 rounded-full opacity-60 animate-bounce delay-300"></div>
										<div className="absolute bottom-12 -left-4 w-2 h-2 bg-cyan-300 rounded-full opacity-70 animate-ping delay-700"></div>
										<div className="absolute bottom-8 -right-8 w-4 h-4 bg-white rounded-full opacity-50 animate-bounce delay-1000"></div>

										{/* Additional animated particles */}
										<div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full opacity-90 animate-ping delay-200"></div>
										<div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-bounce delay-800"></div>
										<div className="absolute top-1/3 left-8 w-1 h-1 bg-white rounded-full opacity-100 animate-ping delay-400"></div>
										<div className="absolute bottom-1/3 right-8 w-3 h-3 bg-blue-200 rounded-full opacity-60 animate-bounce delay-1100"></div>
										<div className="absolute top-2/3 -left-2 w-2 h-2 bg-cyan-200 rounded-full opacity-70 animate-pulse delay-600"></div>

										{/* Sparkle effects */}
										<div className="absolute top-6 left-1/4 w-1 h-1 bg-yellow-300 rounded-full opacity-80 animate-ping delay-900"></div>
										<div className="absolute bottom-6 right-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-90 animate-ping delay-1200"></div>
									</div>
								</div>

								{/* Ripple Effects */}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-gradient-to-r from-transparent via-blue-200 to-transparent rounded-full opacity-60 animate-pulse"></div>
								<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-3 bg-gradient-to-r from-transparent via-cyan-200 to-transparent rounded-full opacity-40 animate-pulse delay-500"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Wave */}
				<div
					className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10"
					style={{
						clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 50%)",
					}}
				></div>

				<style jsx>{`
					@keyframes float {
						0%,
						100% {
							transform: translateY(0px);
						}
						50% {
							transform: translateY(-20px);
						}
					}
					.animate-float {
						animation: float 3s ease-in-out infinite;
					}
					@import url("https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap");
				`}</style>
			</div>

			{/* Features Section */}
			<div className=" bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 shadow-grey-400 shadow-lg max-w-4/5 justify-center mx-auto mt-8 mb-8 rounded-2xl">
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
