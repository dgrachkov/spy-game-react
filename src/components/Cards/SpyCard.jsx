import React, { useState } from 'react'
import MysteriousCard from './MysteriousCard';

const PlayerCard = ({nextPlayer}) => {
  const [playerCard, setPlayerCard] = useState(false);

  return playerCard ? (
    <div 
      className='p-4 bg-zinc-800 rounded-lg cursor-pointer border border-red-700'
      onClick={() => nextPlayer(setPlayerCard(false))}
    >
      <div className='flex justify-center items-center h-60 sm:h-80'>
        <h1 className='text-red-700 font-semibold text-5xl'>
          Шпион
        </h1>
      </div>
      <div className='h-[1px] w-full bg-zinc-700'></div>
      <p className='text-center text-slate-100 font-light text-[15px] pt-3'> 
        Ваша задача узнать, о какой локации говорят местные, 
        чтобы выиграть в раунде. Либо продержитесь до окончания времени.
      </p>
    </div>
  ) : (
    <MysteriousCard setPlayerCard={setPlayerCard}/>
  )
}

export default PlayerCard