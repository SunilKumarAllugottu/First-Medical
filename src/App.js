import './App.css';
import {createTheme,ThemeProvider} from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
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
 {/* <div className="App">
   <div>
     <Typography variant="h2" >
       Welcome to React
     </Typography>
   </div>
 </div> */}
</ThemeProvider>
    </>
  );
}

export default App;
