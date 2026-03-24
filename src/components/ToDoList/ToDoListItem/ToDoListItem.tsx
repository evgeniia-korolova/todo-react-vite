import type { ToDo } from '../../../models/todo-item.interface';
import './ToDoListItem.scss';

export const ToDoListItem = (props: {
	toDoItem: ToDo;
	updateToDo: (toDoItem: ToDo) => void;
	deleteToDo: (toDoItem: ToDo) => void;
}) => {
	return (
		<li className='todo-list-item__wrapper'>
			<span>{props.toDoItem.text}</span>
			<div className='todo-list-item__buttons'>
				<button className='btn-trash' onClick={() => props.deleteToDo(props.toDoItem)} ></button>
				<button onClick={() => props.updateToDo(props.toDoItem)}
					className={
						props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'
					}></button>
			</div>
		</li>
	);
};
