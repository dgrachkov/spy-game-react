import React from 'react'

const ViewLocation = ({source, visibility, location}) => {
  return visibility && (
    <div className='mt-5 flex justify-center'>
      <div className='w-full rounded-lg sm:w-[560px] text-slate-100'>
        <h1 className='font-medium text-[17px] sm:text-[18px]'>Локация: 
          <span className='ml-2 font-light'>{location.title}</span>
        </h1>
        <div className='mt-3 h-64 sm:h-72 rounded-lg w-full background'
          style={{ backgroundImage: `url(/location/${source}/${location.img}.jpg)` }}>
        </div>
      </div>
    </div>
  )
}

export default ViewLocation