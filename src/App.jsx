import { useEffect, useState } from 'react';
import logo from "./assets/images/logo.svg";
import logoDark from "./assets/images/logo-dark.svg";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./App.css";
import ExtentionCard from './components/ExtentionCard';
import {cards} from "../data";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [cardsData, setCardsData] = useState(cards);
  const [extentionStatus, setExtentionStatus] = useState("all");

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  const toggleExtention = (id) => {
    setCardsData(prev => 
      prev.map(card => 
        card.id === id ? {...card, isActive: !card.isActive} :card
      )
    )
  }

  const removeExtention = (id) => {
    setCardsData(prev => prev.filter(card => card.id !== id))
  }

  const btnClass = (name) => {
    const baseClasses = "rounded-full px-4 py-2 text-xl transition-colors duration-200"
    
    if (selectedBtn === name) {
      // Selected button styles
      return `${baseClasses} bg-red-400 shadow-none ${
        darkMode ? "text-black" : "text-white"
      }`
    } else {
      // Unselected button styles
      return `${baseClasses} shadow-md ${
        darkMode ? "text-white  bg-gray-600" : "text-gray-800 "
      }`
    }
  }

  const toggleExtentionDisplay = (name) => {
    setSelectedBtn(name)
    setExtentionStatus(name)
  }

  return (
    <main className={`min-h-screen w-full  flex flex-col items-center p-4
      ${darkMode ? "bg-dark-gradient" : "bg-light-gradient"}`}>
      <div className={`flex w-full justify-between p-2 rounded-md shadow-md mb-8
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
      <div className='flex flex-col items-center'>
        <h1 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" :""}`}>
          Extensions List
        </h1>
        <div className='flex gap-4'>
          <button 
            className={btnClass("all")} onClick={() => toggleExtentionDisplay("all")}>All
          </button>
          <button 
            className={btnClass("active")} onClick={() => toggleExtentionDisplay("active")}>Active
          </button>
          <button 
            className={btnClass("inActive")} onClick={() => toggleExtentionDisplay("inActive")}>Inactive
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-8'>
        {extentionStatus === "all" && cardsData.map(card => {
          return <ExtentionCard 
            key={card.id}
            id = {card.id}
            card = {card}
            toggleExtention = {toggleExtention}
            removeExtention = {removeExtention}
            darkMode={darkMode}
          />
        })}
        {extentionStatus === "active" && 
          cardsData
          .filter(card => card.isActive)
          .map(card => 
            <ExtentionCard 
              key={card.id}
              id = {card.id}
              card = {card}
              toggleExtention = {toggleExtention}
              removeExtention = {removeExtention}
              darkMode={darkMode}
            />
        )}
        {extentionStatus === "inActive" &&
          cardsData
            .filter(card => !card.isActive)
            .map(card => 
              <ExtentionCard 
                key={card.id}
                id = {card.id}
                card = {card}
                toggleExtention = {toggleExtention}
                removeExtention = {removeExtention}
                darkMode={darkMode}
              />
            )

        }
      </div>
    </main>
  )
}

export default App
