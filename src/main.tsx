import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<RouterProvider router={router} />
				<ToastContainer position='bottom-right' />
			</HelmetProvider>
		</Provider>
	</StrictMode>,
);
