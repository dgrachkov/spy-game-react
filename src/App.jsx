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
    ],
  });

  const randomSpy = parameters.players[Math.floor(Math.random()*parameters.players.length)];
  randomSpy.spy = true;

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/правила' element={<Rules/>}/>
        <Route 
          path='/настройки' 
          element={
            <Settings 
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
