import { useWindowSize } from '../../hooks/useWindowSize.hook';

export const useIsMobile = (maxWidth: number) => {
	const { width } = useWindowSize();

	if (width === undefined) return false;

	return width <= maxWidth;
};
