import { useTranslation } from 'react-i18next';
import { FormTextarea } from '../FormTextarea/FormTextarea';
import { FormInput, SetInputValue } from '../QuestionForm.hook';

type Props = {
	questionInputsState: FormInput;
	onChange: SetInputValue;
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
}: Props) => {
	const { t } = useTranslation();

	const Textareas = textareasKeys.map((key, index) => {
		const nameOfKey: string = key.name;

		const animateOnMount: boolean = index > FIRST_EL_INDEX;

		const prevInputIndex = index - 1;
		const isPrevInputTouched: boolean =
			index < 1 ||
			!!questionInputsState?.[textareasKeys[prevInputIndex].name]?.touched;

		const translationLocation = `inputs.${nameOfKey}`;

		return (
			<FormTextarea
				key={nameOfKey}
				label={t(`${translationLocation}.label`)}
				placeholder={t(`${translationLocation}.placeholder`)}
				value={questionInputsState?.[nameOfKey]?.value || ''}
				onChange={setInputValue}
				objectKey={nameOfKey}
				visible={isPrevInputTouched}
				animate={animateOnMount}
			/>
		);
	});

	return <>{Textareas}</>;
};
