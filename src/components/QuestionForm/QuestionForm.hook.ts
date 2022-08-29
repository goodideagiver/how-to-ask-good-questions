import { useReducer } from 'react';

type FormInput = {
	[key: string]: {
		value: string;
		name: string;
	};
};

export enum FormActionTypes {
	SET_INPUT_VALUE = 'SET_INPUT_VALUE',
	REMOVE_INPUT_VALUE = 'REMOVE_INPUT_VALUE',
	RESET_FORM = 'RESET_FORM',
}

export interface FormAction {
	type: FormActionTypes;
	payload: {
		objectKey: string;
		name: string;
		value: string;
	};
}

const initalState: FormInput = {};

const messageReducer = (state: FormInput, action: FormAction) => {
	if (action.type === FormActionTypes.SET_INPUT_VALUE) {
		return {
			...state,
			[action.payload.objectKey]: {
				name: action.payload.name,
				value: action.payload.value,
			},
		};
	}

	if (action.type === FormActionTypes.RESET_FORM) {
		return {};
	}

	if (action.type === FormActionTypes.REMOVE_INPUT_VALUE) {
		if (!state.hasOwnProperty(action.payload.objectKey)) return state;

		const stateCopy = { ...state };
		delete stateCopy[action.payload.objectKey];
		return stateCopy;
	}

	return state;
};

export const useQuestionForm = () => {
	const [state, dispatch] = useReducer(messageReducer, initalState);

	const setInputValue = (name: string, value: string, key: string) => {
		dispatch({
			type: FormActionTypes.SET_INPUT_VALUE,
			payload: {
				name,
				value,
				objectKey: key,
			},
		});
	};

	const removeInput = (key: string) => {
		dispatch({
			type: FormActionTypes.REMOVE_INPUT_VALUE,
			payload: {
				objectKey: key,
				name: '',
				value: '',
			},
		});
	};

	const resetFormHandler = () => {
		dispatch({
			type: FormActionTypes.RESET_FORM,
			payload: {
				name: '',
				value: '',
				objectKey: '',
			},
		});
	};

	const messageGenerator = () => {
		let formattedMessage = '';

		Object.keys(state).forEach((key) => {
			const title = state[key].name;
			const value = state[key].value;
			const row = `**${title}**\n${value}\n\n`;
			formattedMessage += row;
		});
		return formattedMessage;
	};

	const message = messageGenerator();

	return {
		questionInputsState: state,
		setInputValue,
		resetFormHandler,
		message,
		removeInput,
	};
};
