"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLoading } from "./LoadingScreen";

function NavigationEventsInner() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { setIsLoading } = useLoading();

	useEffect(() => {
		const url = `${pathname}${searchParams ? `?${searchParams}` : ""}`;

		// Set loading to false when route change completes
		setIsLoading(false);
	}, [pathname, searchParams, setIsLoading]);

	return null;
}

export function NavigationEvents() {
	return (
		<Suspense fallback={null}>
			<NavigationEventsInner />
		</Suspense>
	);
}
