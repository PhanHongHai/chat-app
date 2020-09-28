import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Login() {
	return (
		<div>
			<Container>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
						<Form>
							<FormGroup>
								<Label for="username">Tên tài khoản</Label>
								<Input type="text" name="username" id="username" placeholder="Nhập tên tài khoản" />
							</FormGroup>
							<FormGroup>
								<Label for="password">Mật khẩu</Label>
								<Input type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
							</FormGroup>
							<Button>Đăng nhập</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
