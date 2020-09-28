import styled from 'styled-components';

export const LoginContainerStyle = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #545b62;
	#form-login {
		width: 500px;
		height: auto;
		margin: auto;
		background-color: #fff;
		padding: 1em;
		border-radius: 5px;
		box-shadow: 1px 1px 8px 4px silver;
		h2 {
			text-align: center;
			margin-bottom: 1em;
		}
		button {
			width: 100%;
			background-color: #5f3bb7;
			border-color: #5f3bb7;
			&:hover {
				filter: brightness(120%);
			}
		}
	}
`;
