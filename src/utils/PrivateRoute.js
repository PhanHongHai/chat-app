import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
	const isAuthed = localStorage.getItem('isLogin');
	console.log(isAuthed);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				!isAuthed ? (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				) : (
					children
				)
			}
		/>
	);
}

export default PrivateRoute;
