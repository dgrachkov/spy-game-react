import { Routes, Route } from 'react-router-dom'
import { useState } from "react"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Settings from './pages/Settings'
import Game from './pages/Game'
import { films } from './store/films'
import { places } from './store/places'

const App = () => {
  const [locationName, setLocationName] = useState(places.source);
  const [randomLocation, setRandomLocation] = useState(places.list[Math.floor(Math.random()*places.list.length)]);
  const [parameters, setParameters] = useState({
    name: `${locationName}`,
    time: 5,
    spy: 2,
    players: [
      {
        id: 1, 
        location: randomLocation,
        spy: false,
      },
      {
        id: 2, 
        location: randomLocation,
        spy: false,
      },
      {
        id: 3, 
        location: randomLocation,
        spy: false,
      },
      {
        id: 4, 
        location: randomLocation,
        spy: false,
      },
    ],
  });

  const changeSpy = () => {
    const currentSpy = Math.floor(Math.random() * parameters.players.length);
  
    setParameters({
      ...parameters,
      players: parameters.players.map((player, idx) => ({
        ...player,
        spy: idx === currentSpy,
      })),
    });
  };

  const changeParameters = (img, counter) => {
    if (img === 'players') {
      const newPlayers = [];

      for (let i = 1; i <= counter; i++) {
        newPlayers.push({
          id: i, 
          location: randomLocation,
          spy: false,
        });
      }

      const newParameters = {
        ...parameters,
        players: newPlayers
      };
      setParameters(newParameters);
    }

    if (img === 'spy') {
      const newParameters = {
        ...parameters,
        spy: counter
      };
      setParameters(newParameters);
    }

    if (img === 'time') {
      const newParameters = {
        ...parameters,
        time: counter
      };
      setParameters(newParameters);
    }
  }

  return (
    <div className="App h-full">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home changeSpy={changeSpy}/>}/>
        <Route path='/правила' element={<Rules/>}/>
        <Route 
          path='/настройки' 
          element={
            <Settings
              changeParameters={changeParameters}
              parameters={parameters} 
              setParameters={setParameters}
            />
          }
        />
        <Route 
          path='/игра' 
          element={
            <Game
              randomLocation={randomLocation}
              parameters={parameters}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
