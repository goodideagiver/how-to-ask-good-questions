import { cssBool, cssClass } from './cssClass.helper';

import { describe, expect, test } from 'vitest';

describe('cssClass', () => {
	test('Returns string with given classes with space in between', () => {
		const result = cssClass('a', 'b', 'c');
		expect(result).toBe('a b c');
	});

	test('Returns empty string if no classes are given', () => {
		const result = cssClass();
		expect(result).toBe('');
	});
});

describe('cssBool', () => {
	test('Returns empty string if condition is false', () => {
		const result = cssBool(false, 'a');
		expect(result).toBe('');
	});

	test('Returns class if condition is true', () => {
		const result = cssBool(true, 'a');
		expect(result).toBe('a');
	});
});

describe('cssClass and cssBool', () => {
	test('Returns string with given classes with space in between', () => {
		const result = cssClass('a', cssBool(true, 'b'), cssBool(false, 'c'));
		expect(result).toBe('a b');
	});

	test('Returns empty string if no classes are given', () => {
		const result = cssClass();
		expect(result).toBe('');
	});
});
