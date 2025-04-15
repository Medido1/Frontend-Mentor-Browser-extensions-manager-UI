function ExtentionCard ({id, card, toggleExtention, removeExtention, darkMode}) {
  return (
    <div>
      <div className={`p-4 h-42 rounded-2xl shadow-md
        ${darkMode ? "bg-gray-800" : "bg-neutral-50"}`}> 
          <div className={`flex gap-2 ${darkMode ? "text-white" : ""}`}>
            <img src={card.logo} className='max-h-14' />
            <div>
              <p className='font-bold mb-2'>{card.name}</p>
              <p className='text-sm font-light leading-6'>{card.description}</p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-6'>
            <button 
              onClick={() => removeExtention(id)}
              className={`rounded-full  px-2 py-1 border-2 text-sm cursor-pointer
              ${darkMode ? "text-white border-neutral-400": "border-neutral-300"}`}>
              Remove
            </button>
            <button 
              onClick={() =>toggleExtention(id)}
              className={`rounded-full  py-1 transition-all duration-200
              ${card.isActive ? "pr-1 pl-5 bg-red-400" : "pr-5 pl-1 bg-neutral-400"}`}>
              <div className='rounded-full w-3 h-3  bg-white'></div> {/* toggle circle */}
            </button>
          </div>
        </div>
    </div>
  )
}

/*  */

export default ExtentionCard;