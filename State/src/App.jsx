import { useState } from 'react'

import { CompA } from "./components/CompA"
import { CompB } from "./components/CompB"
import './App.css'

const App = () => {
  const [state, setState] = useState({
    title: "Equalizer 3",
    ratings: 7, 
  });

  const handleClick = () => setState({...state, ratings: 8})

  return (
    <main id="center">
      <h1>Title: {state.title}</h1>
      <p>Ratings: {state.Rating}</p>
      <CompA />
      <CompB />
    </main>
  )
}

export default App
