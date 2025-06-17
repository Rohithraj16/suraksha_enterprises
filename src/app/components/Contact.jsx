"use client";
import Image from "next/image";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
	const [state, handleSubmit] = useForm("mpwrdbkr");

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
								<div className="w-full flex justify-center">
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

						{/* Contact Form */}
						<div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto">
							<h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
								Leave a Comment
							</h2>

							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Email */}
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email Address
									</label>
									<input
										id="email"
										type="email"
										name="email"
										required
										className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
									/>
									<ValidationError
										prefix="Email"
										field="email"
										errors={state.errors}
									/>
								</div>

								{/* Phone */}
								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Phone Number
									</label>
									<input
										id="phone"
										type="text"
										name="phone"
										placeholder="+91 XXXXX XXXXX"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
									/>
									<ValidationError
										prefix="Phone"
										field="phone"
										errors={state.errors}
									/>
								</div>

								{/* Subject */}
								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Subject
									</label>
									<input
										id="subject"
										type="text"
										name="subject"
										placeholder="Subject of your message"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
									/>
									<ValidationError
										prefix="Subject"
										field="subject"
										errors={state.errors}
									/>
								</div>

								{/* Message */}
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows="5"
										required
										className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
									/>
									<ValidationError
										prefix="Message"
										field="message"
										errors={state.errors}
									/>
								</div>

								<div className="text-center">
									<button
										type="submit"
										disabled={state.submitting}
										className="w-full sm:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition duration-200 disabled:opacity-50"
									>
										{state.submitting ? "Submitting..." : "Submit"}
									</button>
								</div>
							</form>
							{state.succeeded && (
								<div className="text-green-600 font-semibold mb-4 text-center">
									✅ Thank you! Your message has been sent.
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}

			<section className="w-full bg-white px-6 py-6">
				<div className="w-full h-64 md:h-96 rounded-lg shadow overflow-hidden">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3882.2825021457425!2d77.12018967508278!3d13.332694987016875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDE5JzU3LjciTiA3N8KwMDcnMjIuMCJF!5e0!3m2!1sen!2sin!4v1750168065424!5m2!1sen!2sin"
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
