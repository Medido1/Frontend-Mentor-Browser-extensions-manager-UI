import { useState } from 'react';
import logo from "./assets/images/logo.svg";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }


  return (
    <main className="min-h-screen w-full bg-light-gradient flex flex-col items-center p-4">
      <div className='flex w-full justify-between bg-neutral-50 p-2 rounded-md shadow-md'>
        <img src={logo} alt="logo" />
        <button onClick={toggleDarkMode}>
          <img 
            src={darkMode ? iconSun : iconMoon} 
            alt={darkMode ? "Set light mode" : "set dark mode"} 
            className={`${darkMode ? `bg-neutral-600` : `bg-neutral-200`} 
              p-2 rounded-md cursor-pointer`}
            />
        </button>
      </div>
    </main>
  )
}

export default App
