import './App.css'
import OperationManual from './components/OperationManual'
import YamaguchiImage from './components/YamaguchiImage'
import AppInterface from './components/AppInterface'
import ContactingAssistant from './components/ContactingAssistant'
function App() {

  return (
    <>
      <main className='main-container'>
        <OperationManual/>
        <YamaguchiImage/>
        <AppInterface/> 
        <ContactingAssistant/>       
      </main>
    </>
  )
}

export default App
