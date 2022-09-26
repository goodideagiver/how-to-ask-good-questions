import { vi } from 'vitest';
import { useFormClasses } from './useFormProgressClasses.hook';

const MAX_VALUE = 100;

vi.mock('./FormProgress.module.scss', () => ({
	default: {
		root: 'root',
		complete: 'complete',
		overcomplete: 'overcomplete',
		empty: 'empty',
	},
}));

describe('useFormClasses', () => {
	it('should return empty class', () => {
		const { classNames } = useFormClasses(MAX_VALUE, 0);
		expect(classNames).toEqual('root empty');
	});

	it('should return complete class', () => {
		const { classNames } = useFormClasses(MAX_VALUE, MAX_VALUE);
		expect(classNames).toEqual('root complete');
	});

	it('should return overcomplete class', () => {
		const { classNames } = useFormClasses(MAX_VALUE, MAX_VALUE + 1);
		expect(classNames).toEqual('root overcomplete');
	});
});
``;
