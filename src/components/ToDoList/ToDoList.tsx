import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import './ToDoList.scss';
import type { ToDo } from '../../models/todo-item.interface';

export const ToDoList = (props: {
	todos: ToDo[];
	updateToDo: (toDoItem: ToDo) => void;
	deleteToDo: (toDoItem: ToDo) => void;
}) => {
	const checkedList = () => {
		return props.todos
			.filter((item) => !item.isDone)
			.map((item) => {
				return (
					<ToDoListItem
						updateToDo={props.updateToDo}
						deleteToDo={props.deleteToDo}
						toDoItem={item}
						key={item.id}
					/>
				);
			});
	};
	const unCheckedList = () => {
		return props.todos
			.filter((item) => item.isDone)
			.map((item) => {
				return (
					<ToDoListItem
						updateToDo={props.updateToDo}
						deleteToDo={props.deleteToDo}
						toDoItem={item}
						key={item.id}
					/>
				);
			});
	};

	return (
		<div className='todo-container'>
			<ul className='todo-list failed'>{checkedList()}</ul>
			<ul className='todo-list completed'>{unCheckedList()}</ul>
		</div>
	);
};
