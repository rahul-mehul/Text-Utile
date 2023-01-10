import About from './About';
import './App.css';
import { Navbar } from './Navbar';
import { TextForm } from './TextForm';
import { ThemeToggle } from './themeToggle';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <TextForm heading="Enter the text to analyse" />
        {/* <About /> */}
      </div>
      <hr></hr>
      <ThemeToggle />
    </>
  );
}

export default App;
