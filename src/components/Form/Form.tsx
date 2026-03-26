import React  from 'react';
import './Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { createAction } from '../../feature/todoList';
import { clearValue, setValue } from '../../feature/formSlice';


export const Form = () => {

	const dispatch = useDispatch();
	const task = useSelector((state: RootState) => state.form.value);



	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		if (task) {
			dispatch(createAction(task)); 
      dispatch(clearValue());
		}
	};

	return (
		<div className='form-wrapper'>
			<form
				action='#'
				onSubmit={formSubmit}>
				<label>
					<input
						type='text'
						onChange={(event) => dispatch(setValue(event.target.value))}
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
