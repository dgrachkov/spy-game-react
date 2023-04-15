import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getPadTime } from './getPadTime';

const Timer = ({time, isCounting, setIsCounting}) => {
  const [timeLeft, setTimeLeft] = useState(time * 60);
  const [spyWon, setSpyWon] = useState(false); 

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      if (timeLeft === 0) {
        setSpyWon(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [timeLeft, isCounting]);

  function startTimer() {
    setIsCounting(true);
  }

  function stopTimer() {
    setIsCounting(false);
  }

  return spyWon === false ? (
    <div className='text-center mt-40 sm:mt-52'>
      <h1 className='text-slate-100 text-7xl sm:text-8xl font-semibold'>
        {minutes}:{seconds}
      </h1>
      <div className='mt-5'>
        {isCounting 
          ? <div className='flex justify-center'>
              <button
                onClick={stopTimer}
                className='block bg-emerald-500 py-3 px-4 rounded-lg'
              >
                <img src='/icons/pause.svg' className='w-8 h-8'/>
              </button>
            </div>
          : <div className='flex justify-center'>
              <button
                onClick={startTimer}
                className='block bg-emerald-500 py-3 px-4 rounded-lg'
              >
                <img src='/icons/play.svg' className='w-8 h-8'/>
              </button>
            </div>
        }
        <div className='text-center mt-5'>
          <a href='/' className='text-zinc-100 text-base font-light'>
            На главное меню
          </a>
        </div>
      </div>
    </div>
  ) 
  : <div className='text-center mt-40 sm:mt-52'>
      <h1 className='text-red-700 font-semibold text-5xl'>
        Победил шпион...
      </h1>
      <div className='text-center mt-5'>
        <a href='/' className='text-zinc-100 text-base font-light'>
          На главное меню
        </a>
      </div>
    </div>
}

export default Timer