import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { FooterLink } from './FooterLink';

describe('FooterLink', () => {
	const expectedName = 'test';

	it('should render link with given text content', () => {
		render(<FooterLink link='test' name={expectedName} />);

		expect(screen.getByRole('link')).toHaveTextContent(expectedName);
	});
});
