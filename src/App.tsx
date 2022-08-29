import { useTranslation } from 'react-i18next';
import './App.scss';
import { QuestionForm } from './components/QuestionForm/QuestionForm';
import '/public/config';

function App() {
	const { t } = useTranslation();

	return (
		<div>
			<h1>{t('mainTitle')}</h1>
			<QuestionForm />
		</div>
	);
}

export default App;
