import { render } from '@testing-library/react';
import { Portal } from './Portal';

describe('Portal HOC', () => {
	it('should throw an error', () => {
		expect(() => {
			render(
				<Portal>
					<div>test</div>
				</Portal>
			);
		}).toThrowError();
	});

	it('should render children', () => {
		const portalContainer = document.createElement('div');
		portalContainer.id = 'overlay-root';
		document.body.appendChild(portalContainer);

		render(
			<Portal>
				<div>test</div>
			</Portal>
		);

		const portal = document.getElementById('overlay-root');

		expect(portal?.innerHTML).toBe('<div>test</div>');
	});
});
