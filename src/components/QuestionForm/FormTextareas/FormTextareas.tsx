import { useTranslation } from 'react-i18next';
import { FormTextarea } from '../FormTextarea/FormTextarea';
import { FormInput, SetInputValue } from '../QuestionForm.hook';

type Props = {
	questionInputsState: FormInput;
	onChange: SetInputValue;
};
export const FormTextareas = ({
	onChange: setInputValue,
	questionInputsState,
}: Props) => {
	const textareasKeys = ['topic', 'expected', 'whatTried', 'sources'];

	const { t } = useTranslation();

	const textareas = textareasKeys.map((key) => (
		<FormTextarea
			key={key}
			label={t(`inputs.${key}.label`)}
			placeholder={t(`inputs.${key}.placeholder`)}
			value={questionInputsState?.[key]?.value || ''}
			onChange={setInputValue}
			objectKey={key}
		/>
	));

	return <>{textareas}</>;
};
