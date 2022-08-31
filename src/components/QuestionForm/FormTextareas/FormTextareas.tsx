import { useTranslation } from 'react-i18next';
import { FormTextarea } from '../FormTextarea/FormTextarea';
import { FormInput, SetInputValue } from '../QuestionForm.hook';

type Props = {
	questionInputsState: FormInput;
	onChange: SetInputValue;
	onEmptyInput: (key: string) => void;
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

export const textareasCount = textareasKeys.length;

export const FormTextareas = ({
	onChange: setInputValue,
	questionInputsState,
	onEmptyInput,
}: Props) => {
	const { t } = useTranslation();

	const textareas = textareasKeys.map((key, index) => {
		const nameOfKey = key.name;

		const emptyInputHandler = () => {
			onEmptyInput(nameOfKey);
			//removes next inputs values if user removes earlier input
			const emptiedIndex = textareasKeys.findIndex(
				(item) => item.name === nameOfKey
			);
			if (emptiedIndex !== -1) {
				textareasKeys.forEach((item, index) => {
					if (index > emptiedIndex) {
						onEmptyInput(item.name);
					}
				});
			}
		};

		return (
			<FormTextarea
				onEmptyInput={() => emptyInputHandler()}
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
