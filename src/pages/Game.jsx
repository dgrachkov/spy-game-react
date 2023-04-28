import { useState } from 'react'
import Timer from '../components/Timer/Timer'
import PlayerCard from '../components/Cards/PlayerCard'
import SpyCard from '../components/Cards/SpyCard'

const Game = ({randomLocation, parameters}) => {
  const [step, setStep] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [game, setGame] = useState(true);
  const player = parameters.players[step];

  function nextPlayer() {
    if ((step + 1) === parameters.players.length) {
      setGame(false);
      setIsCounting(true);
    } else {
      setStep(step + 1);
    }
  }

  return (
    <div className='bg-[#18181b]'>
      <div className='max-w-2xl mx-auto px-3 py-6'>
        {game
          ? <div>
              <h1 className='text-center py-4 text-slate-100 font-medium text-base sm:text-[17px]'>
                Игрок {step + 1}/{parameters.players.length}
              </h1>
              {player.spy === false
                ? <PlayerCard
                    name={parameters.name}
                    title={randomLocation.title} 
                    img={randomLocation.img} 
                    nextPlayer={nextPlayer}
                  />
                : <SpyCard nextPlayer={nextPlayer}/>
              }
            </div>
          : <Timer
              time={parameters.time}
              isCounting={isCounting}
              setIsCounting={setIsCounting}
            />
        }
      </div>
    </div>
  )
}

export default Game