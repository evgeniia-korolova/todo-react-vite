import { Link } from 'react-router-dom';
import classes from './NotFound.module.scss'

export const NotFound = () => {
	return (
		<div className={classes.container}>
			<h1>Not Found</h1>
      <Link to="/">Back Home</Link>
		</div>
	);
};
