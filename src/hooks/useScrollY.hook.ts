import { useEffect, useState } from 'react';

export const useScrollY = (container: HTMLElement | null) => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		if (container) {
			setScrollY(container.scrollTop);
		}
	};

	useEffect(() => {
		if (container) {
			container.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (container) {
				container.removeEventListener('scroll', handleScroll);
			}
		};
	}, [container]);

	return scrollY;
};
