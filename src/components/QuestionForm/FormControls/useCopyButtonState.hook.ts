import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cssBool, cssClass } from '../../../helpers/cssClass.helper';
import { CopyState } from './FormControls';

import classes from './FormControls.module.scss';

enum Text {
	Default = 'mainButtons.copy',
	Success = 'mainButtons.copyStates.success',
	Error = 'mainButtons.copyStates.error',
}

const BUTTON_TIMEOUT = 1000;

export const useCopyButtonState = (
	buttonState: CopyState,
	clearState: () => void
) => {
	const { t } = useTranslation();

	let buttonText = t(Text.Default);
	let buttonClassNames = cssClass(
		classes.button,
		cssBool(buttonState === CopyState.Success, classes.success),
		cssBool(buttonState === CopyState.Error, classes.error)
	);

	if (buttonState === CopyState.Success) {
		buttonText = t(Text.Success);
	}
	if (buttonState === CopyState.Error) {
		buttonText = t(Text.Error);
	}

	useEffect(() => {
		let timeout: null | number = null;

		const resetStateHandler = () => {
			buttonText = t(Text.Default);
			buttonClassNames = cssClass(classes.button);
			clearState();
			if (timeout !== null) {
				clearTimeout(timeout);
			}
		};

		if (buttonState === CopyState.Success) {
			buttonText = t(Text.Success);
			timeout = setTimeout(() => {
				resetStateHandler();
			}, BUTTON_TIMEOUT);
		}
		if (buttonState === CopyState.Error) {
			buttonText = t(Text.Error);
			timeout = setTimeout(() => {
				resetStateHandler();
			}, BUTTON_TIMEOUT);
		}

		return () => {
			if (timeout !== null) {
				resetStateHandler();
			}
		};
	}, [buttonState]);

	return {
		buttonClassNames,
		buttonText,
	};
};
