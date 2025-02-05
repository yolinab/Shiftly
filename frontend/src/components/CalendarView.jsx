import { useState } from 'react'

const CalendarView = ({ onNext }) => {
  const [selectedDates, setSelectedDates] = useState([])

  const handleNext = () => {
    onNext('create')
  }

  return (
    <div className="calendar-container">
      <h1>Select Meeting Dates</h1>
      <div className="calendar">
        {/* Calendar component will go here */}
      </div>
      <button onClick={handleNext}>Let's Meet</button>
    </div>
  )
}

export default CalendarView