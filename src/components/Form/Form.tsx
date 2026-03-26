import React, { useState } from 'react';
import './Form.scss';
import type { FormProps } from '../../models/form-props.type';

export const Form = (props: FormProps) => {
	const [task, setTask] = useState<string>('');

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		if (task) {
			props.createNewToDo(task);
			setTask('');
		}
	};

	// const changeText = (event: ChangeEvent<HTMLInputElement>) => {
	// 	setTask(event.target.value);
	// };

	return (
		<div className='form-wrapper'>
			<form
				action='#'
				onSubmit={formSubmit}>
				<label>
					<input
						type='text'
						onChange={(event) => setTask(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === 'Enter') {
								formSubmit(event);
							}
						}}
						value={task}
					/>
					<button></button>
				</label>
			</form>
		</div>
	);
};
