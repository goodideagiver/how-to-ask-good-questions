import { render, screen } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { PercentageComment } from './PercentageComment';

const COMPLETION_COMMENT = 'You have completed the form';
const OVERCOMPLETION_COMMENT = 'You have overcompleted the form';

vi.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => {
			if (key === 'completionComment') {
				return COMPLETION_COMMENT;
			}
			if (key === 'overcompletionComment') {
				return OVERCOMPLETION_COMMENT;
			}
		},
	}),
}));

describe('PercentageComment component', () => {
	it('renders completion comment', () => {
		render(<PercentageComment percentage={100} maxPercentage={100} />);

		expect(screen.getByText(COMPLETION_COMMENT)).toBeInTheDocument();
	});

	it('renders overcompletion comment', () => {
		render(<PercentageComment percentage={120} maxPercentage={100} />);

		expect(screen.getByText(OVERCOMPLETION_COMMENT)).toBeInTheDocument();
	});
});
