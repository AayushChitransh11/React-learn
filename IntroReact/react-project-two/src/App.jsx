import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import tony_code from "./assets/tony_code.png"
import monkey from "./assets/monkey.jpeg"
import tony_new from "./assets/tony_new.webp"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <UserCard name='Aayush' desc="desc1" image={tony_code} style={{"border-radius":"10px",}}/>
        <UserCard name='Tony'desc="desc2" image={tony_new} style={{"border-radius":"10px",}}/>
        <UserCard name="Pepper" desc="desc3" image={monkey} style={{"border-radius":"10px",}}/>
      </div>
      
    </>
  )
}

export default App
 