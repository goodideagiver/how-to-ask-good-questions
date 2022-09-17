import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { QuestionMark } from './QuestionMark';

describe('QuestionMark', () => {
	it('renders with passed className', () => {
		render(<QuestionMark className='testCss' />);

		const questionMark = document.querySelector('.testCss');

		expect(questionMark).toBeTruthy();
	});

	it('renders properly without passed className', () => {
		render(<QuestionMark />);

		const questionMark = document.querySelector('img');

		expect(questionMark).toBeTruthy();
	});
});
