import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { ToDoList } from '../components/ToDoList/ToDoList';
import type { ToDo } from '../models/todo-item.interface';

export const ToDoListPage = () => {
	const [todos, setTodos] = useState<ToDo[]>([]);

	const createNewToDo = (text: string) => {
		const newToDo: ToDo = {
			id: Number(Date.now()),
			text: text,
			isDone: false,
		};
		setTodos([...todos, newToDo]);
	};

	const updateToDo = (toDoItem: ToDo): void => {
		const newTodos = todos.map((item) => {
			if (item.id === toDoItem.id) {
				item.isDone = !item.isDone;
			}
			return item;
		});
		setTodos(newTodos);
	};
	const deleteToDo = (toDoItem: ToDo): void => {
		const newTodos = todos.filter(item => item.id !== toDoItem.id)
		setTodos(newTodos);
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
