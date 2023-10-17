export function getDaysInMonth(year, month) {
    const firstDay=new Date(year, month, 1);
    const daysInMonth=new Date(year, month+1, 0).getDate();
    const startingDayOfWeek=firstDay.getDay();
    return {
        daysInMonth,
        startingDayOfWeek,
    };
}

export function generateEventColors(events) {
    const eventColors={};
    events.forEach((dayEvents) => {
        dayEvents.events.forEach((event) => {
            if (!eventColors[event.name]) {
                eventColors[event.name]=getRandomColor();
            }
        });
    });
    return eventColors;
}

export function getEventsForMonth(events, year, month) {
    return events.filter((event) => {
        const eventDate=new Date(event.date);
        return eventDate.getFullYear()===year&&eventDate.getMonth()===month;
    });
}

export function getRandomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}


export function addMinutesToTime(startTime, durationMinutes) {
    const startTimeDate=new Date(startTime);
    const endTimeDate=new Date(startTimeDate.getTime()+durationMinutes*60000); // 1 minute = 60000 milliseconds
    const timeZoneOffset=startTimeDate.getTimezoneOffset();
    endTimeDate.setMinutes(endTimeDate.getMinutes()-timeZoneOffset);
    const endTimeString=endTimeDate.toISOString();
    return endTimeString;
}