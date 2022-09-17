import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { FormProgress } from './FormProgress';

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
});
