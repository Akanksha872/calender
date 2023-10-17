import CalendarDay from './CalendarDay';
import '../../styles/CalendarGrid.css';

const CalendarGrid = ({
    rowIndex,
    daysInMonth,
    startingDayOfWeek,
    currentDate,
    filteredEvents,
    eventColors,
    handleEventClick,
  }) => (
    <div className="days-grid">
      {Array.from({ length: 7 }).map((_, dayIndex) => {
        const dayNumber = dayIndex + 1 + rowIndex * 7 - startingDayOfWeek;
        const dayDate = new Date(currentDate);
        dayDate.setDate(dayNumber);
        const dayEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate.getDate() === dayNumber;
        });
  
        return dayNumber > 0 && dayNumber <= daysInMonth ? (
          <CalendarDay
            key={dayNumber}
            dayNumber={dayNumber}
            dayEvents={dayEvents}
            eventColors={eventColors}
            handleEventClick={handleEventClick}
          />
        ) : (
          <div key={dayNumber} className="day"></div>
        );
      })}
    </div>
  );

  
  export default CalendarGrid;
