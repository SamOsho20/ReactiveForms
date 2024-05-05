
import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
function App() {
const [peopleRegistred, setpeopleRegistred] = useState([])
  return (
    <>
    <RegistrationForm setpeopleRegistred = {setpeopleRegistred}/>
    </>
  )
}

export default App
