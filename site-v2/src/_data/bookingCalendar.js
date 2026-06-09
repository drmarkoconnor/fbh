const {
	BOOKING_CALENDAR_URL,
	BOOKING_EMBED_URL,
	BOOKING_NEW_EVENT_URL,
	BOOKING_ROOMS,
	BOOKING_URL,
	GOOGLE_MAPS_URL
} = require("../../lib/booking-calendar-config.cjs");

module.exports = function() {
	return {
		bookingUrl: BOOKING_URL,
		calendarUrl: BOOKING_CALENDAR_URL,
		embedUrl: BOOKING_EMBED_URL,
		mapsUrl: GOOGLE_MAPS_URL,
		newEventUrl: BOOKING_NEW_EVENT_URL,
		rooms: BOOKING_ROOMS.map((room) => ({
			...room,
			pageUrl: room.code
				? `/hire/availability/?room=${encodeURIComponent(room.code)}`
				: "/hire/availability/"
		})),
		clientConfigJson: JSON.stringify({
			bookingUrl: BOOKING_URL,
			calendarUrl: BOOKING_CALENDAR_URL,
			embedUrl: BOOKING_EMBED_URL,
			mapsUrl: GOOGLE_MAPS_URL,
			newEventUrl: BOOKING_NEW_EVENT_URL,
			rooms: BOOKING_ROOMS
		})
	};
};
