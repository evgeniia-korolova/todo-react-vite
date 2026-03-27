import type { ToDo } from '../../../models/todo-item.interface';
import {
	ToDoItem,
	ToDoItemControl,
	ToDoItemControls,
	ToDoItemText,
} from './ToDoListItem.styled';

import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';

export const ToDoListItem = (props: {
	toDoItem: ToDo;
	updateToDo: (toDoItem: ToDo) => void;
	deleteToDo: (toDoItem: ToDo) => void;
}) => {
	return (
		<ToDoItem>
			<ToDoItemText>{props.toDoItem.text}</ToDoItemText>
			<ToDoItemControls>
				<ToDoItemControl
					$icon={trashIcon}
					onClick={() =>
						props.deleteToDo(props.toDoItem)
					}></ToDoItemControl>
				<ToDoItemControl
					onClick={() => props.updateToDo(props.toDoItem)}
					$icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
					></ToDoItemControl>
			</ToDoItemControls>
		</ToDoItem>
	);
};
