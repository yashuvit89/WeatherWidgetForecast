export default function getDate(UTCtimestamp) {
	const days = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'};
    const day = new Date(UTCtimestamp * 1000).getDay();

    return days[day] ? days[day].substring(0,3) : "";
}