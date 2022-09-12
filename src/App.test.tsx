import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import App from './App';

describe('App component', () => {
	test('renders heading element', () => {
		render(<App />);
		const headingElement = screen.getByRole('heading');

		expect(headingElement).toBeInTheDocument();
		expect(headingElement).toBeInstanceOf(HTMLHeadingElement);
	});
});
