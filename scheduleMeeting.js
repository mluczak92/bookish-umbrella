"use strict";

const dayStart = "07:30";
const dayEnd = "17:45";

function stringToMins(string) {
    const hoursMins = string.split(":").map(x => +x)
    return hoursMins[0] * 60 + hoursMins[1];
}

const dayStartMins = stringToMins(dayStart);
const dayEndMins = stringToMins(dayEnd);

function scheduleMeeting(startTime, durationMinutes) {
    const startMins = stringToMins(startTime);
    if (startMins < dayStartMins)
        return false;

    const endTimeMin = startMins + durationMinutes
    if (endTimeMin > dayEndMins)
        return false;

    return true;
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false