"use client";

import { useState, createContext, useContext, useCallback } from "react";
import Image from "next/image";
import { NavigationEvents } from "./NavigationEvents";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

// Create a context to expose the loading state and functions
export const LoadingContext = createContext({
	isLoading: false,
	setIsLoading: () => {},
	showLoading: () => {},
	hideLoading: () => {},
});

// Custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext);

export default function LoadingScreen({ children }) {
	const [isLoading, setIsLoading] = useState(false);

	// Functions to show/hide loading with optional duration
	const showLoading = useCallback(() => {
		setIsLoading(true);
	}, []);

	const hideLoading = useCallback(() => {
		setIsLoading(false);
	}, []);

	return (
		<LoadingContext.Provider
			value={{ isLoading, setIsLoading, showLoading, hideLoading }}
		>
			<NavigationEvents />

			{isLoading && (
				<div className="fixed inset-0 flex flex-col items-center justify-center z-100">
					{/* Blurred background */}
					<div className="absolute inset-0 backdrop-blur-md"></div>

					{/* Glassy container */}
					<div className="relative z-10 p-10 flex flex-col items-center justify-center">
						<div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
							<Image
								src="/logo_suraksha.jpg"
								alt="Suraksha Enterprises"
								width={150}
								height={150}
								className="rounded-md"
								priority
							/>
						</div>
						<div className="mt-2 ">
							{/* // Default values shown */}
							<LineSpinner size="40" stroke="4" speed="1" color="#001A62" />
						</div>
						{/* Light reflections for enhanced glass effect */}
						<div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b  to-transparent rounded-t-3xl"></div>
						<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr  to-transparent rounded-bl-3xl"></div>
					</div>

					{/* Animated bubbles in background */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						{[...Array(10)].map((_, i) => (
							<div
								key={i}
								className="absolute rounded-full bg-[#001A62]/20 animate-float"
								style={{
									width: `${Math.random() * 20 + 20}px`,
									height: `${Math.random() * 20 + 20}px`,
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDuration: `${Math.random() * 8 + 4}s`,
									animationDelay: `${Math.random() * 2}s`,
								}}
							></div>
						))}
					</div>
				</div>
			)}

			{children}
		</LoadingContext.Provider>
	);
}

// Add the following CSS to your global CSS file
/*

*/
