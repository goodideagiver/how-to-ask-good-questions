import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormTextarea } from './FormTextarea';

describe('FormTextarea', () => {
	it('should render', () => {
		const { container } = render(
			<FormTextarea
				label='asd'
				objectKey='asd'
				onChange={() => void 0}
				placeholder='siem'
				value='qwe'
			/>
		);
		expect(container).toBeInTheDocument();
	});
});
