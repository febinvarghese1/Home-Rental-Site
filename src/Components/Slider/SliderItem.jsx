import React from 'react'

const SliderItem = ({image}) => {
  return (
    <div className='absolute'>
        <img className=' w-screen object-cover  md:h-96 lg:h-500  ' src={image} alt=''/>
    </div>
  )
}

export default SliderItem