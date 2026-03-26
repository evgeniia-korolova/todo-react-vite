
import { useSelector } from 'react-redux';
import { ListItem } from '../../components/ListItem/ListItem';
import type { ToDo } from '../../models/todo-item.interface';
import classes from './ViewList.module.scss';
import type { RootState } from '../../store';



export const ViewList = () => {
	const todoList = useSelector((state: RootState) => state.todoList.todos)
	return (
		<div className={classes.container}>
			{todoList.map((item: ToDo) => {
				return (
					<ListItem
						key={item.id}
						todo={item}
					/>
				);
			})}

		</div>
	);
};
