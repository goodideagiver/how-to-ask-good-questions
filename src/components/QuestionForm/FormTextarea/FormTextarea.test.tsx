import { getByText, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormTextarea } from './FormTextarea';

describe('FormTextarea', () => {
	it('should have initial value', () => {
		const { container } = render(
			<FormTextarea
				label='asd'
				objectKey='asd'
				onChange={() => void 0}
				placeholder='siem'
				value='test value'
			/>
		);
		expect(getByText(container, 'test value')).toBeInTheDocument();
	});

	it('should have label with test content', () => {
		const { getByText } = render(
			<FormTextarea
				label='test label'
				objectKey='asd'
				onChange={() => void 0}
				placeholder='siem'
				value='qwe'
			/>
		);
		const textareaLabel = getByText('test label');

		expect(textareaLabel).toBeInTheDocument();
		expect(textareaLabel).toBeInstanceOf(HTMLLabelElement);
	});

	it('should have textarea with test content', () => {
		const { getByText } = render(
			<FormTextarea
				label='test label'
				objectKey='asd'
				onChange={() => void 0}
				placeholder='test placeholder'
				value='test value'
			/>
		);
		const textarea = getByText('test value');

		expect(textarea).toBeInTheDocument();
		expect(textarea).toBeInstanceOf(HTMLTextAreaElement);
	});
});
