import { useState } from 'react';
import logo from "./assets/images/logo.svg";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("all");

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const btnClass = (name) => {
    return `rounded-full px-4 py-2 text-xl
    ${selectedBtn === name ? "bg-red-400 text-white shadow-none" : "bg-neutral-50 shadow-md"}`
  }


  return (
    <main className="min-h-screen w-full bg-light-gradient flex flex-col items-center p-4">
      <div className='flex w-full justify-between bg-neutral-50 p-2 rounded-md shadow-md mb-8'>
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
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-4'>Extensions List</h1>
        <div className='flex gap-4'>
          <button 
            className={btnClass("all")} onClick={() => setSelectedBtn("all")}>All
          </button>
          <button 
            className={btnClass("active")} onClick={() => setSelectedBtn("active")}>Active
          </button>
          <button 
            className={btnClass("inActive")} onClick={() => setSelectedBtn("inActive")}>Inactive
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
