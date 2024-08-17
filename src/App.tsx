import './App.css';
import Toolbar from '@mui/material/Toolbar';
import LanguidAppBar from './LanguidAppBar';
import TranslationContent from './TranslationContent';

function App() {
  return (
    <>
      <LanguidAppBar></LanguidAppBar>
      <Toolbar></Toolbar>
      <TranslationContent></TranslationContent>
    </>
  );
}

export default App;
