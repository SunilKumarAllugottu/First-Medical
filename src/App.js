import './App.css';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import Main from './Main';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },});
  
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main/>
      </ThemeProvider>
    </>
  );
}

export default App;
