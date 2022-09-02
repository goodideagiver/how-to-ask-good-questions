import { useTranslation } from 'react-i18next';
import './App.scss';
import { QuestionForm } from './components/QuestionForm/QuestionForm';
import '/src/config';

function App() {
	const { t } = useTranslation();

	return (
		<>
			<h1>{t('mainTitle')}</h1>
			<QuestionForm />
		</>
	);
}

export default App;
