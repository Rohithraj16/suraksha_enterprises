"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const pathname = usePathname();

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		setActiveDropdown(null);
	};

	const handleDropdownToggle = (dropdownName) => {
		setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
	};

	// Check if current path matches link
	const isActive = (path) => pathname === path;

	const navItems = [
		{ href: "/", label: "Home", hasDropdown: false },
		{ href: "/about", label: "About", hasDropdown: false },
		{ href: "/services", label: "Services", hasDropdown: false },

		{ href: "/contact", label: "Contact Us", hasDropdown: false },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white/98 backdrop-blur-lg shadow-lg" : "bg-white "
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex-shrink-0 flex items-center">
						<Link
							href="/"
							className="flex items-center space-x-3 transition-transform duration-200 hover:scale-105"
						>
							<div className="relative">
								<Image
									src="/logo_suraksha.jpg"
									alt="Suraksha Logo"
									width={80}
									height={80}
									className="rounded-lg"
								/>
							</div>
							<span className="text-3xl font-bold text-gray-800">Suraksha</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center space-x-2">
						{navItems.map((item) => (
							<div key={item.href} className="relative group">
								{item.hasDropdown ? (
									<div>
										<button
											onClick={() => handleDropdownToggle(item.label)}
											className={`flex items-center px-4 py-2 text-base font-semibold transition-all duration-200 rounded-md group ${
												isActive(item.href) || activeDropdown === item.label
													? "text-cyan-500"
													: "text-gray-700 hover:text-cyan-500"
											}`}
										>
											{item.label}
											<svg
												className={`ml-1 w-4 h-4 transition-transform duration-200 ${
													activeDropdown === item.label ? "rotate-180" : ""
												}`}
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</button>

										{/* Dropdown Menu */}
										<div
											className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
												activeDropdown === item.label
													? "opacity-100 visible transform translate-y-0"
													: "opacity-0 invisible transform -translate-y-2"
											}`}
										>
											<div className="py-2">
												{item.dropdownItems.map((dropItem) => (
													<Link
														key={dropItem.href}
														href={dropItem.href}
														className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-500 hover:bg-gray-50 transition-colors duration-150"
														onClick={() => setActiveDropdown(null)}
													>
														{dropItem.label}
													</Link>
												))}
											</div>
										</div>
									</div>
								) : (
									<Link
										href={item.href}
										className={`px-4 py-2 text-base font-semibold transition-all duration-200 rounded-md ${
											isActive(item.href)
												? "text-cyan-500"
												: "text-gray-700 hover:text-cyan-500"
										}`}
									>
										{item.label}
									</Link>
								)}
							</div>
						))}

						{/* Brochure CTA Button */}
						<div className="ml-4 pl-4 border-l border-gray-200">
							<a
								href="/brochure_suraksha.pdf"
								download
								className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 group"
							>
								<span className="flex items-center space-x-2">
									<span>Brochure</span>
									<svg
										className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</span>
							</a>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-200"
							aria-expanded={isMenuOpen}
							aria-label="Toggle navigation menu"
						>
							<div className="relative w-6 h-6">
								<span
									className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
										isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
									}`}
								/>
								<span
									className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
										isMenuOpen ? "opacity-0" : "opacity-100"
									}`}
								/>
								<span
									className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
										isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-300 ${
					isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="bg-white border-t border-gray-200">
					<div className="px-4 py-4 space-y-2">
						{navItems.map((item) => (
							<div key={item.href}>
								{item.hasDropdown ? (
									<div>
										<button
											onClick={() => handleDropdownToggle(item.label)}
											className={`flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
												isActive(item.href) || activeDropdown === item.label
													? "text-cyan-500 bg-cyan-50"
													: "text-gray-700 hover:text-cyan-500 hover:bg-gray-50"
											}`}
										>
											{item.label}
											<svg
												className={`w-4 h-4 transition-transform duration-200 ${
													activeDropdown === item.label ? "rotate-180" : ""
												}`}
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</button>

										{/* Mobile Dropdown */}
										<div
											className={`overflow-hidden transition-all duration-200 ${
												activeDropdown === item.label
													? "max-h-96 opacity-100"
													: "max-h-0 opacity-0"
											}`}
										>
											<div className="pl-6 py-2 space-y-1">
												{item.dropdownItems.map((dropItem) => (
													<Link
														key={dropItem.href}
														href={dropItem.href}
														className="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-500 hover:bg-gray-50 rounded transition-colors duration-150"
														onClick={closeMenu}
													>
														{dropItem.label}
													</Link>
												))}
											</div>
										</div>
									</div>
								) : (
									<Link
										href={item.href}
										className={`block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
											isActive(item.href)
												? "text-cyan-500 bg-cyan-50"
												: "text-gray-700 hover:text-cyan-500 hover:bg-gray-50"
										}`}
										onClick={closeMenu}
									>
										{item.label}
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
