import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#B4F1D3",
    100: "#A3EDC9",
    200: "#81E7B5",
    300: "#5EE0A1",
    400: "#3CDA8D",
    500: "#26C779",
    600: "#1D985C",
    700: "#146940",
    800: "#0B3A23",
    900: "#020B06"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
