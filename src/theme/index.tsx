import { createGlobalStyle } from "styled-components";

interface ThemeInterface {
  colors: {
    primary: string;
  };
  fonts: {
    ui: string;
  };
}

interface Theme {
  theme: ThemeInterface;
}

export const theme = {
  colors: {
    primary: "red"
  },
  fonts: {
    ui:
      'SF Pro Text, -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'
  }
};

export const GlobalStyle = createGlobalStyle<Theme>`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    text-rendering: optimizelegibility;
    -webkit-appearance: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 0px;
    outline: 0px;
    padding: 0px;
    text-decoration: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.ui};
    color: #000;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;
