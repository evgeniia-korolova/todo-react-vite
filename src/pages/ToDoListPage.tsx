import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { ToDoList } from '../components/ToDoList/ToDoList';
import type { ToDo } from '../models/todo-item.interface';
import { toast } from 'react-toastify';

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ToDo[]>([]);

	const createNewToDo = (text: string) => {
		const newToDo: ToDo = {
			id: Number(Date.now()),
			text: text,
			isDone: false,
		};
		setTodos([...todos, newToDo]);
		toast.success(`New task added: "${text}"`, { autoClose: 500 });
	};

	const updateToDo = (toDoItem: ToDo): void => {
		const newTodos = todos.map((item) => {
			if (item.id === toDoItem.id) {
				item.isDone = !item.isDone;
			}
			return item;
		});
		setTodos(newTodos);
		toast.info(`Task updated: "${toDoItem.text}"`, { autoClose: 500 });
	};
	const deleteToDo = (toDoItem: ToDo): void => {
		const newTodos = todos.filter((item) => item.id !== toDoItem.id);
		setTodos(newTodos);
		toast.error(`Task deleted: "${toDoItem.text}"`, { autoClose: 500 });
	};

	return (
		<>
			<Header />
			<Form createNewToDo={createNewToDo} />
			<ToDoList
				todos={todos}
				updateToDo={updateToDo}
				deleteToDo={deleteToDo}
			/>
		</>
	);
};
