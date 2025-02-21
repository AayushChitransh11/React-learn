import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  //we will create state here, manage state,
  // change state and get it sync to all the children here

  const [name, setName] = useState('');

  return (
    <div>
      <Card title="card1" name={name} setName={setName}/>
      {/* <p>Inside parent componenet: name-{name}</p> */}
      <Card title="card2" name={name} setName={setName}/>
    </div>
  )
}

export default App
