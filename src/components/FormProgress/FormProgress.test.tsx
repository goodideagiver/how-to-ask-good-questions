import { render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';
import { OVERLAY_ROOT_DOM_ID } from '../../HOC/Portal/Portal';
import { FormProgress } from './FormProgress';

beforeAll(() => {
	document.body.innerHTML =
		'<div id="root"></div><div id="overlay-root"></div>';
});

vi.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => {
			return 'hello' + key;
		},
	}),
}));

describe('FormProgress', () => {
	it('should have 0% width style', () => {
		render(<FormProgress percentage={0} />);

		const progressBar = screen.getByLabelText('progress bar');

		expect(progressBar).toHaveStyle('width: 0%');
	});

	it('should have 100% width style', () => {
		render(<FormProgress percentage={100} />);

		const progressBar = screen.getByLabelText('progress bar');

		expect(progressBar).toHaveStyle('width: 100%');
	});

	it('should render with portal when is mobile', () => {
		render(<FormProgress percentage={100} />);

		vi.mock('./useIsMobile.hook.ts', () => ({
			useIsMobile: () => true,
		}));

		const portal = document.getElementById(OVERLAY_ROOT_DOM_ID);
		const progressBar = screen.getByLabelText('progress bar');

		expect(progressBar).toBeInTheDocument();
		expect(portal !== null).toBe(true);
	});
});
