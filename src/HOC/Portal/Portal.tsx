import { createPortal } from 'react-dom';

type Props = {
	children: React.ReactNode;
};

const OVERLAY_ROOT_DOM_ID = 'overlay-root';

export const Portal = ({ children }: Props) => {
	const portalContainer = document.getElementById(OVERLAY_ROOT_DOM_ID);

	if (portalContainer) {
		return createPortal(children, portalContainer);
	}

	throw new Error(`Portal container with id ${OVERLAY_ROOT_DOM_ID} not found`);
};
