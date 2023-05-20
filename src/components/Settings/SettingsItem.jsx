import React, { useState } from 'react'
import SettingsLocationItem from './SettingsLocationItem';

const SettingsItem = ({title, value, img, changeParameters, changeLocation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [settingParameters, setSettingParameters] = useState(false);
  const [counter, setCounter] = useState(value);

  function increaseCounter() { 
    setCounter(counter + 1);
  }

  function reduceCounter() {
    setCounter(counter - 1);
  }

  function confirmParameters(img, counter) {
    changeParameters(img, counter)
    setSettingParameters(false);
  }

  return (
    <li 
      onClick={() => setSettingParameters(!settingParameters)}
      className='bg-zinc-800 rounded-lg cursor-pointer py-3 mt-3 px-4'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <img src={`/icons/${img}.svg`} className='w-10 h-10'/>
          <h4 className='text-slate-100 font-light text-[17px] sm:text-lg ml-2'>
            {title}
          </h4>
        </div>
        <div className='flex items-center'>
          <div className='flex text-slate-100 font-light text-[17px] sm:text-lg mr-[6px]'>
            {value}
            {img === 'time' && <span className='ml-[5px]'>мин.</span>}
          </div>
          {settingParameters 
            ? <img src='/icons/up-arrow.svg' className='w-5 h-5'/>
            : <img src='/icons/down-arrow.svg' className='w-5 h-5'/>
          }
        </div>
      </div>
      {settingParameters &&
        <>
          {img === 'location'
            ? <SettingsLocationItem 
                setCurrentIndex={setCurrentIndex} 
                currentIndex={currentIndex} 
                changeLocation={changeLocation}
              />
            : <div className='mt-2 pt-4 pb-2 w-full border-t border-zinc-600'>
                <div className='flex items-center' onClick={e => e.stopPropagation()}>
                  <img 
                    src='/icons/left-arrow.svg'
                    className='w-6 h-6'
                    onClick={reduceCounter}
                  />
                  <h3 className='mx-3 text-slate-100 text-[17px] sm:text-lg font-medium'>
                    {counter}
                  </h3>
                  <img 
                    src='/icons/right-arrow.svg'
                    className='w-6 h-6'
                    onClick={increaseCounter}
                  />
                </div>
                <button 
                  onClick={() => confirmParameters(img, counter)}
                  className='mt-4 bg-zinc-600 text-slate-100 py-2 px-4 rounded-lg'>
                  Принять
                </button>
              </div>
          }
        </>
      }
    </li>
  )
}

export default SettingsItem