import { useEffect, useState } from 'react';

export const useScrollY = (container: HTMLElement) => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		setScrollY(container.scrollTop);
	};

	useEffect(() => {
		container.addEventListener('scroll', handleScroll);

		return () => {
			container.removeEventListener('scroll', handleScroll);
		};
	}, [container]);

	return scrollY;
};
