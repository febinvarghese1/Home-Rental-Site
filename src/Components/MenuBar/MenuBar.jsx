import React from 'react'

const MenuBar = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-6'>
        <div className="">
            <p>India's Top House Rental Site</p>
        </div>
        <div className="mt-4">
            <input placeholder='Search' type='text' className='border-slate-700 border-2 px-3'/>
        </div>
    </div>
  )
}

export default MenuBar