import React, { useState } from 'react'
import MysteriousCard from './MysteriousCard';

const PlayerCard = ({name, title, img, nextPlayer}) => {
  const [playerCard, setPlayerCard] = useState(false);

  return playerCard ? (
    <div 
      className='p-4 bg-zinc-800 rounded-lg cursor-pointer' 
      onClick={() => nextPlayer(setPlayerCard(false))}
    >
      <div className='text-center'>
        <div className='h-60 sm:h-72 w-full card_background'
          style={{ backgroundImage: `url(/location/places/${img}.jpg)` }}>
        </div>
        <h3 className='text-slate-100 font-medium text-base py-3'>
          {title}
        </h3>
      </div>
      <div className='h-[1px] w-full bg-zinc-700'></div>
      <p className='text-center text-slate-100 font-light text-[15px] pt-3'>
        Вы - местный. Все, кроме шпиона, знают локацию. 
        Ваша задача задавать вопросы другим игрокам, чтобы вычислить, кто из них шпион.
      </p>
    </div>
  ) : (
    <MysteriousCard setPlayerCard={setPlayerCard}/>
  )
}

export default PlayerCard