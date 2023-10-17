import '../../styles/EventModal.css';
import {addMinutesToTime} from '../../utils/calendarUtils';


const EventModal=({event, closeModal}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Event Details</h3>
                <p>Name: {event.name}</p>
                {event.time!=='all_day'? (
                    <span>
                        <p>Start Time: {event.time.substr(11, 5)}</p>
                        <p>End Time: {addMinutesToTime(event.time, event.duration_minutes).substr(11, 5)}</p>
                        <p>Duration: {event.duration_minutes} minutes</p>
                    </span>
                ):(
                    <p>Time: All Day</p>
                )}
                <p>Accepted: {event.accepted? 'Yes':'No'}</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default EventModal;

