"use client";
import React from "react";
import {
	Phone,
	Mail,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";

const Footer = () => {
	return (
		<>
			{/* Call to Action Section */}
			<section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 overflow-hidden">
				{/* Wave Shape */}
				<div className="absolute top-0 left-0 w-full overflow-hidden">
					<svg
						className="relative block w-full h-20"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
							fill="#F4FFFF"
						/>
					</svg>
				</div>

				<div className="relative container mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Please <span className="text-cyan-400">Call Us</span> to Take an
						Extraordinary Service
					</h2>
					<a
						href="tel:9449666606"
						className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
					>
						<Phone className="inline-block w-5 h-5 mr-2" />
						+91 9449666606
					</a>
				</div>
			</section>

			{/* Main Footer */}
			<footer className="bg-blue-900 text-white py-12 footerMainContainer">
				<div className="container mx-auto px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="space-y-6">
							<div className="flex items-center space-x-2">
								<div className="w-8 h-8 bg-cyan-400 rounded triangle-shape flex items-center justify-center">
									<div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-white"></div>
								</div>
								<span className="text-xl font-bold">Suraksha Enterprises</span>
							</div>
							<p className="text-gray-300 text-sm leading-relaxed"></p>
							Providing high-quality water filtration systems for homes and
							businesses. Proudly serving you with clean, safe water.
							<div className="space-y-3">
								<h4 className="font-semibold text-lg">Open Hours:</h4>
								<div className="text-gray-300 text-sm space-y-1">
									<p>Mon - Sat: 9AM - 6PM</p>
									<p>Sunday: Closed</p>
								</div>
							</div>
						</div>

						{/* Address */}
						<div className="space-y-6">
							<h4 className="font-semibold text-lg">Address</h4>
							<div className="space-y-4 text-gray-300 text-sm">
								<div className="flex items-start space-x-3">
									<MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
									<div>
										<p>Ashok nagar batwadi tumkur</p>
										<p>572102</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
									<span>Call Us: 9449666606</span>
								</div>

								<div className="flex items-center space-x-3">
									<Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
									<span>Surakshaenterprises@gmail.com</span>
								</div>
							</div>
						</div>

						{/* Useful Links */}
						<div className="space-y-6">
							<h4 className="font-semibold text-lg">Useful Link</h4>
							<ul className="space-y-3 text-gray-300 text-sm">
								<li>
									<a
										href="#"
										className="hover:text-cyan-400 transition-colors duration-300"
									>
										About Company
									</a>
								</li>
								<li>
									<a
										href="/services"
										className="hover:text-cyan-400 transition-colors duration-300"
									>
										Services
									</a>
								</li>
								<li>
									<a
										href="/contact"
										className="hover:text-cyan-400 transition-colors duration-300"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>

						{/* Subscribe */}
						<div className="space-y-6">
							<h4 className="font-semibold text-lg">Subscribe</h4>
							<p className="text-gray-300 text-sm">
								Your trusted partner in clean, safe water. From residential
								solutions to commercial-grade filtration systems, we’re
								dedicated to purity and performance.
							</p>

							<div className="flex">
								<input
									type="email"
									placeholder="Your Email"
									className="flex-1 px-4 py-3 rounded-l-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 max-w-3/4"
								/>
								<button className="bg-cyan-400 hover:bg-cyan-500 px-6 rounded-r-full transition-colors duration-300">
									<Mail className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Footer Bottom */}
			<div className="bg-blue-950 text-white py-6">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-sm text-gray-300">
							<span>Suraksha Enterprises © 2025 All Right Reserved</span>
						</div>

						<div className="flex items-center space-x-6">
							<div className="flex space-x-4">
								<a
									href="#"
									className="w-8 h-8 bg-gray-700 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-colors duration-300"
								>
									<Facebook className="w-4 h-4" />
								</a>
								<a
									href="#"
									className="w-8 h-8 bg-gray-700 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-colors duration-300"
								>
									<Twitter className="w-4 h-4" />
								</a>
								<a
									href="#"
									className="w-8 h-8 bg-gray-700 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-colors duration-300"
								>
									<Instagram className="w-4 h-4" />
								</a>
								<a
									href="#"
									className="w-8 h-8 bg-gray-700 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-colors duration-300"
								>
									<Linkedin className="w-4 h-4" />
								</a>
							</div>

							<div className="flex space-x-4 text-sm text-gray-300">
								<a
									href="#"
									className="hover:text-cyan-400 transition-colors duration-300"
								>
									Terms of Service
								</a>
								<span>|</span>
								<a
									href="#"
									className="hover:text-cyan-400 transition-colors duration-300"
								>
									Privacy Policy
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
