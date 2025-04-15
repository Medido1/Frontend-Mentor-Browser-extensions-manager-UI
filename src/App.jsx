import {useState } from 'react';
import logo from "./assets/images/logo.svg";
import logoDark from "./assets/images/logo-dark.svg";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./App.css";
import ExtensionCard from './components/ExtensionCard';
import {cards} from "../data";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [cardsData, setCardsData] = useState(cards);
  const [extensionStatus, setExtensionStatus] = useState("all");

  const filterdCards = 
    extensionStatus === "all" 
    ? cardsData
    : extensionStatus === "active"
    ? cardsData.filter(card => card.isActive)
    : cardsData.filter(card => !card.isActive)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const toggleExtension = (id) => {
    setCardsData(prev => 
      prev.map(card => 
        card.id === id ? {...card, isActive: !card.isActive} :card
      )
    )
  }

  const removeExtension = (id) => {
    setCardsData(prev => prev.filter(card => card.id !== id))
  }

  const btnClass = (name) => {
    const baseClasses = `rounded-full px-4 py-2 text-xl 
    transition-colors duration-200 cursor-pointer`
    
    if (selectedBtn === name) {
      // Selected button styles
      return `${baseClasses} bg-red-400 shadow-none  hover:bg-red-600 ${
        darkMode ? "text-black" : "text-white"
      }`
    } else {
      // Unselected button styles
      return `${baseClasses} shadow-md ${
        darkMode ? "text-white  bg-gray-600 hover:bg-gray-800" : "text-gray-800 hover:bg-gray-200 "
      }`
    }
  }

  const toggleExtensionDisplay = (name) => {
    setSelectedBtn(name)
    setExtensionStatus(name)
  }

  return (
    <main className={`min-h-screen w-full  flex flex-col items-center p-4
      ${darkMode ? "bg-dark-gradient" : "bg-light-gradient"}`}>
      <div className={`flex w-full justify-between p-2 rounded-md shadow-md mb-8 md:w-3/4
        ${darkMode ? "bg-gray-800" : "bg-neutral-50"}`
      }>
        <img src={darkMode ? logoDark : logo} alt="logo" />
        <button onClick={toggleDarkMode}>
          <img 
            src={darkMode ? iconSun : iconMoon} 
            alt={darkMode ? "Set light mode" : "set dark mode"} 
            className={`${darkMode ? `bg-gray-600` : `bg-neutral-200`} 
              p-2 rounded-md cursor-pointer`}
            />
        </button>
      </div>
      <div className='flex flex-col items-center md:flex-row 
        md:justify-between  md:w-3/4'>
        <h1 className={`text-3xl font-bold mb-4 md:mb-0 ${darkMode ? "text-white" :""}`}>
          Extensions List
        </h1>
        <div className='flex gap-4'>
          <button 
            className={btnClass("all")} onClick={() => toggleExtensionDisplay("all")}>All
          </button>
          <button 
            className={btnClass("active")} onClick={() => toggleExtensionDisplay("active")}>Active
          </button>
          <button 
            className={btnClass("inActive")} onClick={() => toggleExtensionDisplay("inActive")}>Inactive
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-3/4'>
        {filterdCards.map(card => (
          <ExtensionCard 
          key={card.id}
          id = {card.id}
          card = {card}
          toggleExtension = {toggleExtension}
          removeExtension = {removeExtension}
          darkMode={darkMode}
        />
        ))}
      </div>
    </main>
  )
}

export default App
