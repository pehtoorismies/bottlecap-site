import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Eczar:600|Roboto+Mono&display=swap');
  
  body {
 
  }
`;

export default GlobalStyle;