import { useState } from 'react'
import './App.css'
import CalendarView from './components/CalendarView'
import CreateMeeting from './components/CreateMeeting'
import TimeSlots from './components/TimeSlots'

function App() {
  const [currentStep, setCurrentStep] = useState('calendar')
  
  const handleStepChange = (step) => {
    setCurrentStep(step)
  }

  return (
    <div className="app-container">
      {currentStep === 'calendar' && <CalendarView onNext={handleStepChange} />}
      {currentStep === 'create' && <CreateMeeting onNext={handleStepChange} />}
      {currentStep === 'availability' && <TimeSlots onNext={handleStepChange} />}
    </div>
  )
}

export default App