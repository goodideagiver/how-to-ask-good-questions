import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import { PercentageComment } from './PercentageComment';

describe('PercentageComment component', () => {
	test('renders completion comment', () => {
		render(<PercentageComment percentage={100} maxPercentage={100} />);

		expect(screen.getByText('completionComment')).toBeTruthy();
	});

	it('renders component', () => {
		render(<PercentageComment percentage={100} maxPercentage={100} />);
	});
});
