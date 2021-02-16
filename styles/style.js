import styled from "styled-components";

export const Body = styled.div`
	font-family: "Roboto", sans-serif;
	height: 100vh;
	min-width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const Header = styled.header`
	height: 10vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	border-bottom: solid 2px #29d394;
	color: #29d394;

	h1 {
		margin-left: 2vw;
	}

	img {
		margin-left: 2vw;
		height: 40px;
		width: auto;
	}

	nav {
		margin-right: 2vw;
	}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	h1 {
		font-size: 2em;
	}
	p {
		margin-left: 2vw;
	}
`;

export const Main = styled.main`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	section {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 55vh;
		width: 90vw;
	}

	aside {
		height: 25vh;
	}
`;

export const Category = styled.figure`
	display: flex;
	flex-direction: row;
	align-items: start;
	justify-content: flex-start;
	height: 25vh;
	overflow: hidden;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15vw;
	height: 100%;
	overflow: hidden;
	margin: 0 2vw;
	border: 1px solid #eee;
	background-image: ${({ coverImage }) => `url(${coverImage})`};

	img {
		width: 100%;
		height: auto;
	}
`;

export const Form = styled.div`
	width: 25vw;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #eee;
	border-radius: 5px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
	padding: 1em;

	h3 {
		margin-top: 3vh;
		color: #29d394;
	}

	form {
		margin: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;

		button {
			background: #f13d53;
			color: #fff;
			border-style: none;
			border-radius: 5px;
			padding: 5px 10px 5px 10px;
			margin-top: 0.75em;
		}

		label {
			font-size: 0.75em;
			outline: none;
		}

		input {
			height: 2em;
			box-sizing: border-box;
			border: none;
			border: 1px solid #eee;
			border-radius: 3px;
		}
	}
`;

export const Rules = styled.div`
	width: 25vw;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #eee;
	border-radius: 5px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
	padding: 1em;

	p {
		margin-top: 1vh;
		text-align: justify;
	}

	button {
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-style: none;
		border-radius: 3px;
		width: 15px;
		height: 15px;
		background-color: #29d394;
		color: #fff;
		font-size: 0.6em;
	}
`;

export const Footer = styled.footer`
	height: 5vh;
	width: 100%;
	background-color: #29d394;
	border-top: 1px solid #eaeaea;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;

	p {
		font-size: 0.75em;
	}
`;
