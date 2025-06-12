"use client";
import Image from "next/image";

export default function Contact() {
	return (
		<>
			<div className="relative w-full h-[450px] mt-20 bg-white">
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
						Contact Us
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

			{/* Contact Info + Form Section */}
			<section className="bg-white w-full py-18">
				<div className="w-full">
					<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
						{/* Contact Info */}
						<div className="bg-white p-8 rounded-lg shadow">
							<h2 className="text-3xl font-semibold mb-6 text-black">
								Contact Information
							</h2>
							<div className="space-y-4 text-black">
								<div>
									<p className="font-bold">Office Location</p>
									<p>Ashok nagar batwadi tumkur-572102</p>
								</div>
								<div>
									<p className="font-bold">Email</p>
									<p>Surakshaenterprises@gmail.com</p>
								</div>
								<div>
									<p className="font-bold">Phone</p>
									<p>+91 9449666606</p>
								</div>
								<div>
									<div className="relative">
										<Image
											src="/logo_suraksha.jpg"
											alt="Suraksha Logo"
											width={250}
											height={250}
											className="rounded-lg"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* */}

						{/* Contact Form */}
						<div className="bg-white p-8 rounded-lg shadow">
							<h2 className="text-3xl font-semibold mb-6 text-black">
								Leave a Comment
							</h2>
							<form className="space-y-4">
								<input
									type="text"
									placeholder="Your Name"
									className="w-full p-3 rounded bg-gray-100 text-black border border-gray-300"
									required
								/>
								<input
									type="email"
									placeholder="Email Address"
									className="w-full p-3 rounded bg-gray-100 text-black border border-gray-300"
									required
								/>
								<input
									type="text"
									placeholder="Phone Number"
									className="w-full p-3 rounded bg-gray-100 text-black border border-gray-300"
								/>
								<input
									type="text"
									placeholder="Subject"
									className="w-full p-3 rounded bg-gray-100 text-black border border-gray-300"
								/>
								<textarea
									rows="5"
									placeholder="Leave a Comment"
									className="w-full p-3 rounded bg-gray-100 text-black border border-gray-300"
								/>
								<button
									type="submit"
									className="px-6 py-3 bg-black hover:bg-gray-800 rounded text-white font-medium"
								>
									Submit Now
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}

			<section className="w-full bg-white px-6 py-6">
				<div className="w-full h-64 md:h-96 rounded-lg shadow overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.09279893499!2d77.6656752415063!3d12.987094239076027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116dbf7e22e5%3A0xfd3df3299cd59775!2sMahadevapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1749576457633!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="w-full h-full"
					></iframe>
				</div>
			</section>
		</>
	);
}
