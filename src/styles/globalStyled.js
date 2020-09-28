import { createGlobalStyle } from 'styled-components';
import _utilityClasses from './utilityClasses';

const GlobalStyle = createGlobalStyle`
html {
	scroll-behavior: smooth;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif !important;
}


${_utilityClasses}
`;
export default GlobalStyle;