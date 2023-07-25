import './App.css'
import gsap, { Linear } from 'gsap'
import { useEffect, useRef } from 'react'
import OperationManual from './components/OperationManual'
import YamaguchiImage from './components/YamaguchiImage'
import AppInterface from './components/AppInterface'
import ContactingAssistant from './components/ContactingAssistant'

function App() {

  const blackHole = useRef();
  const yamaguchi = useRef();

  useEffect(() => {
    
    gsap.fromTo(yamaguchi.current, {
      translateY: 756,
    }, {
      translateY: 0,
      duration: 3
    });

    gsap.fromTo(blackHole.current, {
      scale: 0.2
    },{
      scale: 1,
      duration: 1
    })
    
  })

  return (
    <>
      <main className='main-container'>
        <OperationManual/>
        <YamaguchiImage blackHole={blackHole} yamaguchi={yamaguchi}/>
        <AppInterface/> 
        <ContactingAssistant/>       
      </main>
    </>
  )
}

export default App
