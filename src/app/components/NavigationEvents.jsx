'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from './LoadingScreen';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const url = `${pathname}${searchParams ? `?${searchParams}` : ''}`;
    
    // Set loading to false when route change completes
    setIsLoading(false);
  }, [pathname, searchParams, setIsLoading]);

  return null;
}