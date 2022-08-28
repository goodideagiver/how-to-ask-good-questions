import { Reducer, useReducer } from 'react';

type FormInput =
	| {
			[key: string]: {
				value: string;
				name: string;
			};
	  }
	| {};

export enum FormActionTypes {
	SET_INPUT_VALUE = 'SET_INPUT_VALUE',
	RMOVE_INPUT_VALUE = 'RMOVE_INPUT_VALUE',
}

const initalState: FormInput = {};

const messageReducer = (state: FormInput, action: FormActionTypes) => {};

const useQuestionForm = () => {
	const [state, dispatch] = useReducer<R extends Reducer<any,any>>(messageReducer:R, initalState);
};
