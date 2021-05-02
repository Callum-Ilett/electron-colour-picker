import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

* {
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  -webkit-app-region: drag;
  margin: 0;
  font-family: "Roboto", sans-serif;
	background: #2D2D2D;
	color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
}

.Toastify__toast--default{
	background: #264161;
	color: white;
}

.Toastify__close-button {
	color: white;
}

`;

export default GlobalStyles;
