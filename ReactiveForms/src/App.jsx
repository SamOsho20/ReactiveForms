
import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import DisplayForm from './components/DisplayForm'


function App() {
const [peopleRegistered, setPeopleRegistered] = useState([])
  return (
    <>
    <RegistrationForm setPeopleRegistered = {setPeopleRegistered}/>
    <DisplayForm peopleRegistered = {peopleRegistered}/>
    </>
  )
}

export default App
