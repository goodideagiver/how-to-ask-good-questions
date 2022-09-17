import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { PercentageComment } from './PercentageComment';

describe('PercentageComment component', () => {
	test('renders completion comment', () => {
		render(<PercentageComment percentage={100} maxPercentage={100} />);

		expect(screen.getByText(/([A-Z])\w+/)).toBeInTheDocument();
	});

	test('renders completion comment', () => {
		render(<PercentageComment percentage={120} maxPercentage={100} />);

		expect(screen.getByText(/([A-Z])\w+/)).toBeInTheDocument();
	});
});
