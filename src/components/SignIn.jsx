import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { Form } from './styled/index';
import { VideoWrapper } from './styled/index';
const Signin = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	// console.log('ancient', process.env.REACT_APP_BACKEND_URL);
	// console.log('casper', process.env.REACT_APP_NOT_SECRET_CODE);
	const { dispatch } = useContext(Context);

	// const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({ type: 'SIGN_IN' });
		// const baseURL = 'http://localhost:3000';
		fetch(process.env.REACT_APP_BACKEND_URL + '/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Authentication: 'Bearer ' + token,
			},
			body: JSON.stringify({
				email: userRef.current.value,
				password: passwordRef.current.value,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data, 'vbn');
				dispatch({ type: 'SIGNIN_SUCCESS', payload: data.data });
				console.log("data", data.data)
			})
			.catch((err) => {
				dispatch({ type: 'SIGNIN_FAILURE' });
				console.log(err);
			});
	};

	return (
		<>
			<Form>
				<p className="logo">The Info</p>
				<h2 className="sign-in-title">Sign in</h2>
				<p className="proceed">Please enter your credentials to proceed</p>
				<form onSubmit={handleSubmit} className="forms">
					<label className="address mail">EMAIL ADDRESS</label>
					<input type="email" name="email" autoComplete={true} ref={userRef} />

					<div className="password-title">
						<label className="password">PASSWORD</label>
						<p className="forgot">Forgot password?</p>
					</div>
					<input type="password" name="password" ref={passwordRef} />

					<button type="submit">Sign in</button>

					<p className="have-account">
						Don't have an account?{' '}
						<Link to="/register">
							<span>Sign up</span>
						</Link>
					</p>
				</form>
			</Form>
			<VideoWrapper>
				<video id="videoBG" muted autoPlay loop>
					<source src="/videos/sea.mp4" type="video/mp4" />
				</video>
			</VideoWrapper>
		</>
	);
};

export default Signin;
