import { fireEvent, render, screen } from '@testing-library/react';
import { OptionalInput } from './OptionalInput';

describe('OptionalInput Component', () => {
	it('should render label with text', () => {
		render(
			<OptionalInput label='test' onHide={() => void 0}>
				<p>hello</p>
			</OptionalInput>
		);

		expect(screen.getByText('test')).toBeInTheDocument();
	});

	it('should not render children initially', () => {
		render(
			<OptionalInput label='test' onHide={() => void 0}>
				<p>Siema z rana</p>
			</OptionalInput>
		);

		expect(screen.queryByText('Siema z rana')).toBeNull();
	});

	it('should render children', () => {
		render(
			<OptionalInput label='test' onHide={() => void 0}>
				<p>hello</p>
			</OptionalInput>
		);

		fireEvent.click(screen.getByRole('checkbox'));

		expect(screen.getByText('hello')).toBeInTheDocument();
	});
});
