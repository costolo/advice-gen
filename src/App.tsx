import React, { useState } from 'react'
import AdviceCard from './components/AdviceCard/AdviceCard'
import './App.css'

interface Slip {
  slip: {
    id: number
    advice: string
  }
}

function App() {
  const [slip, setSlip] = useState<Slip>({
    slip: { id: 1, advice: 'Loading advice' }
  })
  const [slipLoaded, setSlipLoaded] = useState(false)
  const fetchAdvice = async (): Promise<Slip> => {
    const url = 'https://api.adviceslip.com/advice'
    return await (await fetch(url)).json()
  }

  if (!slipLoaded) {
    setSlipLoaded(true)
    fetchAdvice().then((slip) => {
      setSlip(slip)
    })
  }

  return (
    <div className="App">
      <AdviceCard slip={slip.slip} setSlipLoaded={setSlipLoaded} />
    </div>
  )
}

export default App
