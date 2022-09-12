import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { QuestionForm } from './QuestionForm';

describe('QuestionForm', () => {
	test('inputs should initially be empty', () => {
		render(<QuestionForm />);

		const textarea = screen.getByRole('textbox');

		expect(textarea).toBeInTheDocument();
		expect(textarea).toBeInstanceOf(HTMLTextAreaElement);
		expect(textarea).toHaveValue('');
	});

	test('only one input should be visible', () => {
		render(<QuestionForm />);

		const textareas = screen.getAllByRole('textbox');

		expect(textareas).toHaveLength(1);
	});

	it('should have 2 buttons', () => {
		render(<QuestionForm />);

		const expectedButtonsAmount = 2;

		const buttons = screen.getAllByRole('button');

		expect(buttons).toHaveLength(expectedButtonsAmount);
	});
});
