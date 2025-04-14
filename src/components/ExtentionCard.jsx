import testicon from "../assets/images/logo-console-plus.svg";

function ExtentionCard () {
  return (
    <div>
      <div className='bg-neutral-50 p-4 h-42 rounded-2xl shadow-md'> {/* card */}
          <div className='flex gap-2'>
            <img src={testicon} className='max-h-14' />
            <div>
              <p className='font-bold mb-2'>DevLens</p>
              <p className='text-sm font-light leading-6'>Quickly inspect page layouts and visualize element boundaries.</p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-6'>
            <button 
            className='rounded-full border-neutral-300 px-2 py-1 border-2 text-sm cursor-pointer'>
              Remove
            </button>
            <button className='rounded-full pt-1 pr-1 pb-1 pl-6 bg-red-400'>
              <div className='rounded-full w-3 h-3  bg-white'></div> {/* toggle circle */}
            </button>
          </div>
        </div>
    </div>
  )
}

export default ExtentionCard;