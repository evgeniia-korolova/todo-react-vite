import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

import { NotFound } from './pages/NotFound/NotFound';
import { ItemDetails } from './pages/ItemDetails/ItemDetails';
import { MainLayout } from './layouts/MainLayout';

const todos = [
	{
		id: 1,
		text: 'First',
		isDone: false,
	},
	{
		id: 2,
		text: 'Second',
		isDone: true,
	},
	{
		id: 3,
		text: 'Third',
		isDone: false,
	},
	{
		id: 4,
		text: 'Fourth',
		isDone: true,
	},
];

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <HomePage todos={todos} />,
			},
			{
				path: '/todos',
				element: <ToDoListPage />,
			},
			{
				path: '/list/:id',
				element: <ItemDetails todos={todos} />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound/>
	}
],
{
	basename: import.meta.env.DEV ? "/" : "/todo-react-vite",
}
// {basename: '/todo-react-vite/'}
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
		<ToastContainer position='bottom-right' />
	</StrictMode>,
);
