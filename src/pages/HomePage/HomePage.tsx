import { ListItem } from '../../components/ListItem/ListItem';
import type { ToDo } from '../../models/todo-item.interface';
import classes from './HomePage.module.scss';

interface ComponentProps {
	todos: ToDo[];
}

export const HomePage = ({ todos }: ComponentProps) => {
	return (
		<div className={classes.container}>
			{todos.map((item: ToDo) => {
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
