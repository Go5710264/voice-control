import './App.css'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import OperationManual from './components/OperationManual'
import YamaguchiImage from './components/YamaguchiImage'
import AppInterface from './components/AppInterface'
import ContactingAssistant from './components/ContactingAssistant'

function App() {

  const [yamaguchiVisible, setYamaguchiVisible] = useState(false);

  const blackHole = useRef();
  const yamaguchi = useRef();

  useEffect(() => {
    
    gsap.fromTo(yamaguchi.current, {
      translateY: 756,
    }, {
      delay: 0.6,
      translateY: 0,
      duration: 3,
    });

    gsap.fromTo(blackHole.current, {
      scale: 0.1
    },{
      scaleX: 1,
      scaleY: 0.65,
      duration: 1
    })

    setTimeout(() => {
      gsap.to(blackHole.current, {
        scaleX: 0.6,
        duration: 3
      })

      setYamaguchiVisible(true);
    }, 1300)

  }, [])

  useEffect(() => {

    if(yamaguchiVisible){

      setTimeout(() => {
        gsap.to(yamaguchi.current,{
          translateY: 5,
          duration: 1,
          repeat: -1,
          yoyo: true
        });
      },2500)

    }

  }, [yamaguchiVisible])

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
