import { useState } from 'react';
import './App.css'
import GamePLay from './Components/GamePLay';
import StartGame from './Components/StartGame'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted(prevState => !prevState) // both statements right
    // setIsGameStarted((prevState) => !prevState)
  }

  return (
    <>
      {
        isGameStarted ? <GamePLay /> : <StartGame toggleGameplay={toggleGameplay} />
      }
    </>
  )
}

export default App
