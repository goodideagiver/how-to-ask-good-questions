import { useTranslation } from 'react-i18next';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { QuestionForm } from './components/QuestionForm/QuestionForm';
import '/src/config';

function App() {
	const { t } = useTranslation();

	return (
		<>
			<h1 className='title'>{t('mainTitle')}</h1>
			<QuestionForm />
			<Footer />
		</>
	);
}

export default App;
