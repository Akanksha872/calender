import '../../styles/CalendarDay.css';

const CalendarDay = ({ dayNumber, dayEvents, eventColors, handleEventClick }) => (
    <div className="day">
      {dayNumber}
      <div>
        {dayEvents[0] &&
          dayEvents[0].events.map((event, index) => (
            <div
              key={index}
              className="event"
              style={{ backgroundColor: eventColors[event.name] }}
              onClick={() => handleEventClick(event)}
            > <p>{eventColors[event]}</p>
              {event.time !== 'all_day' ? (
                <p className="event-time">{`${event.time.substr(11, 5)}`}</p>
              ) : (
                ''
              )}
              <p>{event.name}</p>
            </div>
          ))}
      </div>
    </div>
  );

export default CalendarDay;
