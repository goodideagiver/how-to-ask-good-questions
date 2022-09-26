import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { QuestionForm } from './QuestionForm';

beforeEach(() => {
	render(<QuestionForm />);
});

describe('QuestionForm', () => {
	test('inputs should initially be empty', () => {
		const textarea = screen.getByRole('textbox');

		expect(textarea).toBeInTheDocument();
		expect(textarea).toBeInstanceOf(HTMLTextAreaElement);
		expect(textarea).toHaveValue('');
	});

	test('only one input should be visible', () => {
		const textareas = screen.getAllByRole('textbox');

		expect(textareas).toHaveLength(1);
	});

	it('should have 2 buttons', () => {
		const expectedButtonsAmount = 2;

		const buttons = screen.getAllByRole('button');

		expect(buttons).toHaveLength(expectedButtonsAmount);
	});

	test('should have 2 textareas if first textarea has text', () => {
		const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

		fireEvent.change(textarea, { target: { value: 'test' } });

		const expectedTextareasCount = 2;

		const textareas = screen.getAllByRole('textbox');

		expect(textareas).toHaveLength(expectedTextareasCount);
	});
});
