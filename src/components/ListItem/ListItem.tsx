import { Link } from 'react-router-dom';
import type { ToDo } from '../../models/todo-item.interface';
import classes from './ListItem.module.scss';

export const ListItem = ({ todo }: { todo: ToDo }) => {
	// (props: {todo: ToDo}) = ({todo}: {todo: ToDo})
	return (
		<Link
			to={`/list/${todo.id}`}
			className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}>
			{todo.text}{' '}
		</Link>
	);
};
