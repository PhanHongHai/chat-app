import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { LoginContainerStyle } from './styled';

export default function Login() {
	const history = useHistory();
	const validate = values => {
		const errors = {};
		if (!values.username) {
			errors.username = 'Tên tài khoản không được để trống';
		} else if (values.username.length < 5) {
			errors.username = 'Tên tài khoản tối thiểu 5 ký tự';
		}
		return errors;
	};
	const formik = useFormik({
		initialValues: {
			username: '',
		},
		validate,
		onSubmit: values => {
			if (values) {
				localStorage.setItem('isLogin', true);
				history.push('/dashboard');
			}
		},
	});
	return (
		<LoginContainerStyle>
			<Form id="form-login" onSubmit={formik.handleSubmit}>
				<h2>
					<FontAwesomeIcon icon={faComments} />
					&ensp;
					<strong>Chat App</strong>
				</h2>
				<FormGroup row>
					<Label sm={4} for="username">
						Tên tài khoản
					</Label>
					<Col sm={8}>
						<Input
							onChange={formik.handleChange}
							value={formik.values.username}
							type="text"
							name="username"
							id="username"
							placeholder="Nhập tên tài khoản"
							invalid={formik.errors.username ? true : false}
						/>
						{formik.errors.username ? <FormFeedback>{formik.errors.username}</FormFeedback> : null}
					</Col>
				</FormGroup>
				{/* <FormGroup>
						<Label for="password">Mật khẩu</Label>
						<Input
							onChange={formik.handleChange}
							value={formik.values.password}
							type="password"
							name="password"
							id="password"
							placeholder="Nhập mật khẩu"
							invalid={formik.errors.password ? true : false}
						/>
						{formik.errors.password ? <FormFeedback>{formik.errors.password}</FormFeedback> : null}
					</FormGroup> */}
				<Button type="submit">Bắt đầu</Button>
			</Form>
		</LoginContainerStyle>
	);
}
