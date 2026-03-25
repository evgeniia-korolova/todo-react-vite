import { useEffect, useEffectEvent, useState } from 'react';
import type { ToDo } from '../../models/todo-item.interface';
import { useNavigate, useParams } from 'react-router-dom';

interface ComponentProps {
	todos: ToDo[];
}

export const ItemDetails = ({ todos }: ComponentProps) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [todo, setTodo] = useState<ToDo>();

	const checkTodo = useEffectEvent(() => {
		const targetTodo = todos.find((item) => String(item.id) === id);
		if (targetTodo) {
			setTodo(targetTodo);
		} else {
			navigate('/not-found');
		}
	});

	useEffect(() => {
		checkTodo();
	}, []);

	return (
		<div className='block-center'>
			<h1>{todo?.text} </h1>
		</div>
	);
};
