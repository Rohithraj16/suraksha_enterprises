"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // REQUIRED for default styles

import {
	Droplets,
	Flame,
	RefreshCw,
	GlassWater,
	CheckCircle,
} from "lucide-react";

export default function About() {
	return (
		<>
			<div className="relative w-full h-[200px] sm:h-[400px] md:h-[450px] mt-20 bg-white">
				<div className="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="w-full h-24"
					>
						<path
							d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
							fill="white"
						/>
					</svg>
				</div>

				<Image
					src="/contact-bg.jpg"
					alt="Background"
					fill
					className="object-cover object-center z-0"
				/>

				<div className="absolute inset-0 flex items-center justify-center z-10">
					<h1 className="text-4xl md:text-5xl font-bold text-black">
						About Us
					</h1>
				</div>

				{/* Bottom wave */}
				<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="w-full h-24"
					>
						<path
							d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>

			<section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white">
				{/* Image */}
				<div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
					<Image
						src="/about_page_pics/about-graphic.png"
						alt="Water Bottle and Ice Cubes"
						width={500}
						height={500}
						className="object-contain"
					/>
				</div>

				{/* Text content */}
				<div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
						We’re Committed to <br />
						Delivering Safe and Pure <br />
						Water for a Healthier Life.
					</h2>
					<p className="mt-6 text-gray-600">
						Access to clean, healthy water is essential for your well-being. Our
						mission is to provide high-quality, purified water using advanced
						filtration systems that remove harmful impurities while preserving
						essential minerals.
					</p>
					<p className="mt-4 text-gray-600">
						With cutting-edge technology and rigorous quality checks, we ensure
						every drop meets the highest standards of safety and freshness.Join
						thousands who trust us for purity, taste, and peace of mind —
						because your health deserves nothing less.
					</p>

					{/* Button */}
					<div className="mt-8">
						<button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
							Read More
						</button>
					</div>
				</div>
			</section>
			<section className="bg-white py-16 px-4 md:px-10 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
					A Trusted Name In <br />
					Bottled Water Industry
				</h2>

				{/* Feature Items */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
					<FeatureCard
						icon={<Droplets size={40} className="text-cyan-400 mx-auto mb-4" />}
						title="Maxium Purity"
						desc="Delivers crystal-clear water by eliminating 99% of contaminants while retaining essential minerals."
					/>
					<FeatureCard
						icon={<Flame size={40} className="text-cyan-400 mx-auto mb-4" />}
						title="Cholorine Free"
						desc="Our advanced treatment process ensures your water is completely free from chlorine and harsh chemicals."
					/>
					<FeatureCard
						icon={
							<RefreshCw size={40} className="text-cyan-400 mx-auto mb-4" />
						}
						title="5 Steps Filtration"
						desc="Multi-layered filtration system removes impurities, odors, and bacteria to guarantee pure, safe water."
					/>
					<FeatureCard
						icon={
							<GlassWater size={40} className="text-cyan-400 mx-auto mb-4" />
						}
						title="Healthy Water"
						desc="Hydrate confidently with water that supports wellness, freshness, and a healthy lifestyle."
					/>
				</div>
			</section>
			<section className="relative bg-blue-800 text-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
					{/* Left Text Content */}
					<div className="md:w-1/2">
						<h2 className="text-3xl md:text-4xl font-bold mb-8">
							Protect Your Family with <br />
							One of The Best Water <br />
							Filtering System.
						</h2>

						<div className="space-y-6">
							<div className="flex items-start">
								<CheckCircle className="text-cyan-400 w-6 h-6 mt-1 mr-3" />
								<div>
									<h4 className="font-semibold text-lg">Content Marketing</h4>
									<p className="text-sm text-white/80">
										Educate and inform customers with valuable, water-quality
										content tailored to their needs.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<CheckCircle className="text-cyan-400 w-6 h-6 mt-1 mr-3" />
								<div>
									<h4 className="font-semibold text-lg">Marketing Strategy</h4>
									<p className="text-sm text-white/80">
										Build trust and loyalty through transparent, effective water
										safety marketing strategies.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="md:w-1/2 relative mb-12 md:mb-0 flex justify-center">
						<div className="relative z-10 shadow-xl rounded-md overflow-hidden">
							<Image
								src="/about_page_pics/bottle.jpeg"
								alt="Water Bottle"
								width={350}
								height={350}
								className="object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Wave bottom */}
				<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="w-full h-20"
					>
						<path
							d="M0,0V46.29c47.8,22.79,103.78,29,158,17,70.5-16.22,136.43-52.38,207-63.12,87.12-13.66,174.63,12.83,261,35.2,60.15,15.65,120.15,30.55,180,24.1,36.31-3.88,70.83-17.45,104-29.4V0Z"
							opacity=".25"
							className="fill-white"
						></path>
						<path
							d="M0,0V15.81C47.75,43.69,103.66,64.8,158,60.21c70.52-6.29,136.48-50.4,207-59.19,86.95-11.17,174.48,19.79,261,39.85C686.14,58.33,746.1,69.78,806,64c36.22-3.52,70.72-17.9,104-29.55V0Z"
							opacity=".5"
							className="fill-white"
						></path>
						<path
							d="M0,0V5.63C47.68,42.27,103.62,82,158,82c70.55,0,136.55-44.53,207-57.38C451.38,6.12,538.88,25.67,625,41.92c60.15,11.39,120.15,22.51,180,15.17,36.31-4.18,70.83-14.59,104-24.4V0Z"
							className="fill-white"
						></path>
					</svg>
				</div>
			</section>

			{/* Section 4: Testimonials Carousel */}
			<section className="bg-blue-50 py-8 text-center">
				<h2 className="text-2xl font-bold text-blue-900 mb-6">
					What Our Clients are Saying About Suraksha
				</h2>

				<Carousel
					autoPlay
					infiniteLoop
					interval={2000}
					transitionTime={500}
					showThumbs={false}
					showStatus={false}
					stopOnHover={false}
				>
					{[
						{
							name: "Person1",
							role: "Designer",
							img: "/about_page_pics/profile_man.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
						{
							name: "Person2",
							role: "Manager",
							img: "/about_page_pics/profile_man.jpg",
							message:
								"Trusted quality and excellent service from Suraksha. Highly recommended!",
						},
						{
							name: "Person3",
							role: "Designer",
							img: "/about_page_pics/profile_man.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
						{
							name: "Person4",
							role: "Designer",
							img: "/about_page_pics/profile_man.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
						{
							name: "Person5",
							role: "Designer",
							img: "/about_page_pics/profile_man.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
					].map((review, idx) => (
						<div key={idx} className="flex justify-center">
							<div className="bg-white rounded-lg p-4 max-w-lg w-full text-left shadow">
								<div className="flex-col items-center gap-3 mb-2">
									<Image
										src={review.img}
										alt={review.name}
										width={200}
										height={200}
										className="rounded-full w-5 h-80"
									/>
									<p className="font-semibold text-blue-900 text-xl">
										{review.name}
									</p>
								</div>
								<p className="text-gray-700 leading-snug text-2xl">
									{review.message}
								</p>
							</div>
						</div>
					))}
				</Carousel>
			</section>
		</>
	);
}

function FeatureCard({ icon, title, desc }) {
	return (
		<div className="flex flex-col items-center px-4 group transition duration-300 ease-in-out">
			<div className="p-4 rounded-full border border-cyan-200 group-hover:shadow-lg group-hover:scale-110 transform transition duration-300">
				<div className="text-cyan-400 group-hover:text-cyan-500 transition duration-300">
					{icon}
				</div>
			</div>
			<h3 className="text-lg font-semibold text-gray-900 mt-4 group-hover:text-cyan-600 transition">
				{title}
			</h3>
			<p className="text-sm text-gray-500 mt-2">{desc}</p>
		</div>
	);
}
