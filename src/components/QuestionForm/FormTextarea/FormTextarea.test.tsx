import { getByText, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { FormTextarea } from './FormTextarea';

vi.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => {
			return 'hello' + key;
		},
	}),
}));

describe('FormTextarea', () => {
	it('should have initial value', () => {
		const exampleValue = 'test value';

		const { container } = render(
			<FormTextarea
				label='asd'
				objectKey='asd'
				onChange={() => void 0}
				placeholder='siem'
				value={exampleValue}
			/>
		);
		expect(getByText(container, exampleValue)).toBeInTheDocument();
	});

	it('should have label with test content', () => {
		const exampleLabel = 'test label';

		const { getByText } = render(
			<FormTextarea
				label={exampleLabel}
				objectKey='asd'
				onChange={() => void 0}
				placeholder='siem'
				value='qwe'
			/>
		);
		const textareaLabel = getByText(exampleLabel);

		expect(textareaLabel).toBeInTheDocument();
		expect(textareaLabel).toBeInstanceOf(HTMLLabelElement);
	});
});
