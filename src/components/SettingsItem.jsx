import React from 'react'

const SettingsItem = ({text, value, img, setActive, selectParameters}) => {
  function editSettings(parameter) {
    setActive(true)
    selectParameters(parameter)
  }

  return (
    <li className='bg-zinc-800 rounded-lg flex items-center cursor-pointer
      justify-between py-2 mt-3 px-4 duration-300 hover:bg-zinc-700'
      onClick={() => editSettings(img)}
    >
      <div className='flex items-center'>
        <img src={`/icons/${img}.svg`} alt='Игроки' className='w-10 h-10'/>
        <h4 className='text-slate-100 font-light text-[17px] sm:text-lg ml-2'>
          {text}
        </h4>
      </div>
      <div className='flex items-center'>
        <div className='flex text-slate-100 font-light text-[17px] sm:text-lg mr-3'>
          {value}
          {img === 'time' && <span className='ml-[5px]'>мин.</span>}
        </div>
        <img src='/icons/right-arrow.svg' className='w-5 h-5'/>
      </div>
    </li>
  )
}

export default SettingsItem