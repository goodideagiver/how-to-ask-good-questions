import { useTranslation } from 'react-i18next';
import { FormTextarea } from '../FormTextarea/FormTextarea';
import { FormInput, SetInputValue } from '../QuestionForm.hook';
import { emptyInputHandler } from './FormTextareas.helper';

type Props = {
	questionInputsState: FormInput;
	onChange: SetInputValue;
	onEmptyInput: (key: string) => void;
};

const FIRST_EL_INDEX = 0;

export type TextAreaState = {
	name: string;
};

const textareasKeys: TextAreaState[] = [
	{ name: 'topic' },
	{ name: 'expected' },
	{ name: 'whatTried' },
	{ name: 'sources' },
];

export const textareasCount = textareasKeys.length;

export const FormTextareas = ({
	onChange: setInputValue,
	questionInputsState,
	onEmptyInput,
}: Props) => {
	const { t } = useTranslation();

	const textareas = textareasKeys.map((key, index) => {
		const nameOfKey: string = key.name;

		const animateOnMount: boolean = index > FIRST_EL_INDEX;

		const prevInputIndex = index - 1;
		const isPrevInputFilled: boolean =
			index < 1 ||
			!!questionInputsState?.[textareasKeys[prevInputIndex].name]?.value.length;

		const translationLocation = `inputs.${nameOfKey}`;

		return (
			<FormTextarea
				onEmptyInput={() =>
					emptyInputHandler(nameOfKey, onEmptyInput, textareasKeys)
				}
				key={nameOfKey}
				label={t(`${translationLocation}.label`)}
				placeholder={t(`${translationLocation}.placeholder`)}
				value={questionInputsState?.[nameOfKey]?.value || ''}
				onChange={setInputValue}
				objectKey={nameOfKey}
				visible={isPrevInputFilled}
				animate={animateOnMount}
			/>
		);
	});

	return <>{textareas}</>;
};
