import './App.css';
import Hero from './components/Hero'
import Container from './components/Container'
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const handleMode = () => {
        setDarkMode(prevState => !prevState)
    }

  return (
    <div className={darkMode ? 'App darkmode' : 'App'}>
      <Hero handleMode={handleMode} darkMode={darkMode} />
      <Container />
    </div>
  );
}

export default App;
