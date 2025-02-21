import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard name="Aayush" desc="desc1"/ >
      <UserCard name="Aayush2" desc="desc2"/ >
      <UserCard name="Aayush3" desc="desc3"/ >
    </>
  )
}

export default App
