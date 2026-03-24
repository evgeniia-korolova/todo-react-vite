import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ToDoListPage />
		<ToastContainer position='bottom-right' />
	</StrictMode>,
);
