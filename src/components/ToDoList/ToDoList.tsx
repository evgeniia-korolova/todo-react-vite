import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import type { ToDo } from '../../models/todo-item.interface';
import {
	CompletedList,
	PendingList,
	ToDoListContainer,
} from './ToDoList.styled';

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
		<ToDoListContainer>
			<PendingList>{checkedList()}</PendingList>
			<CompletedList>{unCheckedList()}</CompletedList>
		</ToDoListContainer>
	);
};
