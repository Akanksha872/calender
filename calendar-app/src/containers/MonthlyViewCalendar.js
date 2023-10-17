import React, { useState } from 'react';
import '../styles/MonthlyViewCalendar.css';
import { ALL_EVENTS } from '../service/events';
import EventModal from '../components/Modal/EventModal';
import CalendarGrid from '../components/Calendar/CalendarGrid';
import { getDaysInMonth, generateEventColors, getEventsForMonth } from '../utils/calendarUtils';

const MonthViewCalendar = () => {
  const [events] = useState(ALL_EVENTS);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventColors] = useState(generateEventColors(events));

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const filteredEvents = getEventsForMonth(
    events,
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  return (
    <div className="month-view-calendar">
      <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <div className="navigation">
        <button className="navigation-button" onClick={goToPreviousMonth}>
          &lt;
        </button>
        <button className="navigation-button" onClick={goToNextMonth}>
          &gt;
        </button>
      </div>
      <div className="week-row">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="week-day">
            {day}
          </div>
        ))}
      </div>

      {Array.from({ length: Math.ceil((startingDayOfWeek + daysInMonth) / 7) }).map((_, rowIndex) => (
        <CalendarGrid
          key={rowIndex}
          rowIndex={rowIndex}
          daysInMonth={daysInMonth}
          startingDayOfWeek={startingDayOfWeek}
          currentDate={currentDate}
          filteredEvents={filteredEvents}
          eventColors={eventColors}
          handleEventClick={handleEventClick}
        />
      ))}

      {showModal && (
        <EventModal event={selectedEvent} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};


export default MonthViewCalendar;
