import { render } from '@testing-library/react';
import { describe } from 'vitest';
import { QuestionMark } from './QuestionMark';

describe('QuestionMark', () => {
	it('renders with passed className', () => {
		const expectedCss = 'testCss';

		render(<QuestionMark className={expectedCss} />);

		const questionMark = document.querySelector(`.${expectedCss}`);

		expect(questionMark).toBeTruthy();
	});

	it('renders properly without passed className', () => {
		render(<QuestionMark />);

		const questionMark = document.querySelector('img');

		expect(questionMark).toBeTruthy();
	});
});
