import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`


* {
	box-sizing: border-box;
}

body {
	transition: all 0.2s;
	background-color: ${({theme}) => theme.colors.backgroundSecondary};
	padding: 50px 0 0 0;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	line-height: 1.429;
	color: black;
}

.block-center {
	padding-top: 1.5rem;
	margin: 0 auto;
}

h1 {
	text-align: center;
}
`;
