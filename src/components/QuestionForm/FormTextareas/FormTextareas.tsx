import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextarea } from '../FormTextarea/FormTextarea';
import { FormInput, SetInputValue } from '../QuestionForm.hook';

type Props = {
	questionInputsState: FormInput;
	onChange: SetInputValue;
};

type TextAreaState = {
	name: string;
	visible: boolean;
};

const textareasKeys: TextAreaState[] = [
	{ name: 'topic', visible: true },
	{ name: 'expected', visible: false },
	{ name: 'whatTried', visible: false },
	{ name: 'sources', visible: false },
];

export const FormTextareas = ({
	onChange: setInputValue,
	questionInputsState,
}: Props) => {
	const { t } = useTranslation();

	const textareas = textareasKeys.map((key, index) => {
		const nameOfKey = key.name;

		return (
			<FormTextarea
				key={nameOfKey}
				label={t(`inputs.${nameOfKey}.label`)}
				placeholder={t(`inputs.${nameOfKey}.placeholder`)}
				value={questionInputsState?.[nameOfKey]?.value || ''}
				onChange={setInputValue}
				objectKey={nameOfKey}
				visible={
					index < 1 ||
					!!questionInputsState?.[textareasKeys[index - 1].name]?.value.length
				}
				animate={index > 0}
			/>
		);
	});

	return <>{textareas}</>;
};
