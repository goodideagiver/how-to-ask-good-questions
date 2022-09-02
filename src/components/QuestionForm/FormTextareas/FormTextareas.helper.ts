import { TextAreaState } from './FormTextareas';

export const emptyInputHandler = (
	key: string,
	onEmptyInput: (val: string) => void,
	keys: TextAreaState[]
) => {
	onEmptyInput(key);
	resetAllInputsAfterRemovedKey(keys, onEmptyInput, key);
};

const resetAllInputsAfterRemovedKey = (
	keys: TextAreaState[],
	onEmptyInput: (val: string) => void,
	key: string
) => {
	//removes next inputs values if user removes earlier input
	const emptiedIndex = keys.findIndex((item) => item.name === key);
	if (emptiedIndex !== -1) {
		keys.forEach((item, index) => {
			if (index > emptiedIndex) {
				onEmptyInput(item.name);
			}
		});
	}
};
