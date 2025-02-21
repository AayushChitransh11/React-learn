import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)
  const handleClick=()=>{
    setCount(count+1);
  }
  return (
    
    <Button handleClick={handleClick} text="Click me">
      <h1>{count}</h1>
    </Button>
      /* <div>
        <Card name="aayush">
          <h1>AayushChitransh</h1>
          <p>learning react props</p>
        </Card>
      </div> */
      
    
  )
}

export default App
