import React from 'react';
import { ThemeProvider } from 'styled-components';
import ToDoList from './ToDoList';
import GlobalStyle from './utils/globalStyle';
import { darkTheme } from './utils/theme';
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <ToDoList/>
   </ThemeProvider>
  );
}

export default App;
