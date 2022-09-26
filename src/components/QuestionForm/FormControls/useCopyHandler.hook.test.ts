import { renderHook, waitFor } from '@testing-library/react';
import { expect } from 'vitest';
import { CopyState } from './FormControls';
import { useCopyHandler } from './useCopyHandler.hook';

Object.assign(navigator, {
	clipboard: {
		writeText: () => void 0,
	},
});

describe('useCopyHandler hook', () => {
	it('should return default state', () => {
		const { result } = renderHook(() => useCopyHandler(false, ''));
		expect(result.current.copyState).toBe(CopyState.Default);
	});

	test('copyMessageHanlder', async () => {
		const { result } = renderHook(() => useCopyHandler(true, 'test'));
		result.current.copyMessageHanlder();
		await waitFor(() =>
			expect(result.current.copyState).toBe(CopyState.Success)
		);
	});
});
