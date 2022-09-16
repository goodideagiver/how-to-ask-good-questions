import { fireEvent, render, screen } from '@testing-library/react';
import { FormControls } from './FormControls';

describe('Form controls', () => {
	it('should render reset button', () => {
		const { getByText } = render(
			<FormControls
				resetFormHandler={() => void 0}
				hasMessage={false}
				message=''
			/>
		);
		expect(getByText('Reset', { exact: false })).toBeInTheDocument();
	});

	it('should render copy button', () => {
		const { getByText } = render(
			<FormControls
				resetFormHandler={() => void 0}
				hasMessage={false}
				message=''
			/>
		);
		expect(getByText('Copy', { exact: false })).toBeInTheDocument();
	});

	it('should render language select', () => {
		const { getByText } = render(
			<FormControls
				resetFormHandler={() => void 0}
				hasMessage={false}
				message=''
			/>
		);
		expect(getByText('Language', { exact: false })).toBeInTheDocument();
	});

	it('should render copy button with default text', () => {
		const { getByText } = render(
			<FormControls
				resetFormHandler={() => void 0}
				hasMessage={false}
				message=''
			/>
		);
		expect(getByText('Copy', { exact: false })).toBeInTheDocument();
	});

	it('should render copy button with error text', () => {
		render(
			<FormControls
				resetFormHandler={() => void 0}
				hasMessage={false}
				message=''
			/>
		);
		const copyButton = screen.getByText('copy', { exact: false });

		fireEvent.click(copyButton);

		expect(copyButton).toHaveTextContent('error');
	});
});
