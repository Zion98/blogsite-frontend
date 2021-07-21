import styled, { css } from 'styled-components';

export const TotalWrapper = styled.div`
	display: grid;
	grid-template-areas:
		'header header header'
		'content content side'
		'content content side'
		'footer footer footer';
	grid-template-columns: 2fr 2fr 1fr;
	/* grid-template-rows: auto auto; */
	grid-gap: 0px 10px;
	background-color: 	#242582;
`;

const CenterPosition = css`
	margin: 0 auto;
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #f9faff;
	padding: 50px 50px;
	min-width: 32%;
`;

export const Form = styled.div`
	${CenterPosition}
	z-index: 999;
	p {
		margin: 0;
	}
	.logo {
		text-align: center;
		width: 71px;
		height: 71px;
		margin: 10px auto;
		border: 1px solid #ffffff;
		background: #4c60eb;
		font-size: 15px;
		color: #fff;
		border-radius: 50px;
		line-height: 71px;
	}

	a {
		text-decoration: none;
	}

	.sign-in-title {
		font-weight: 300;
		font-size: 34px;
		text-align: left;
		margin-bottom: 5px;
		color: #405169;
	}
	.proceed {
		font-size: 15px;
		color: rgba(64, 81, 105, 0.5);
	}

	form {
		padding: 10px 5px;
		font-size: 12px;
	}

	.mail,
	.password-title {
		margin: 10px 0;
	}

	.mail {
		margin-top: 40px;
	}

	.address,
	.password {
		font-weight: 500;
		font-size: 12px;
		letter-spacing: 1.125px;
		text-transform: uppercase;
		color: #405169;
	}

	.password-title {
		display: flex;
		justify-content: space-between;
	}

	.forgot {
		font-size: 15px;
		color: hsla(215.1219512195122, 24.2603550295858%, 33.13725490196078%, 0.5);
	}

	input,
	button {
		width: 100%;
		height: 45px;
		outline: none;
		background: rgba(76, 141, 235, 0.10077);
		border: 1px solid rgba(76, 141, 235, 0.10077);
		border-radius: 5px;
		margin-bottom: 10px;
	}

	button {
		margin-top: 20px;
		font-size: 15px;
		color: #fff;
		background: #4c60eb;
	}

	.have-account {
		text-align: center;
		font-size: 15px;
		color: #b0bac9;
	}

	.have-account span {
		color: #4c60eb;
	}

`;

export const VideoWrapper= styled.div`
position: fixed;
		z-index: -1;
@media (min-aspect-ratio: 16/9) {
		#videoBG {
			width: 100%;
			height: auto;
		}
	}

	@media (max-aspect-ratio: 16/9) {
		#videoBG {
			height: 100%;
			width: auto;
		}
	}

	@media only screen and (max-width: 768px) {
		width: 90%;

		#videoBG {
			display:none;
			background-color: red;
		}
	} 
`
