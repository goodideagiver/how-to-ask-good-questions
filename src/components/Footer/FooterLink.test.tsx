import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { FooterLink } from './FooterLink';

describe('FooterLink', () => {
	it('should render link with given text content', () => {
		render(<FooterLink link='test' name='test' />);

		expect(screen.getByRole('link')).toHaveTextContent('test');
	});
});
