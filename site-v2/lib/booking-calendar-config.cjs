const BOOKING_URL = "https://hallbookingonline.com/flaxbourton/";
const BOOKING_CALENDAR_URL = "https://hallbookingonline.com/flaxbourton/calendar.php";
const BOOKING_NEW_EVENT_URL = "https://hallbookingonline.com/flaxbourton/manage_event.php?type=vh";
const BOOKING_EMBED_URL = "https://hallbookingonline.com/embed/?v=rkFKvN6JHMEx";
const GOOGLE_MAPS_URL =
	"https://www.google.com/maps/search/?api=1&query=51.4218886,-2.6952196";

const BOOKING_ROOMS = [
	{
		code: "",
		label: "All spaces",
		embedUrl: BOOKING_EMBED_URL
	},
	{
		code: "hall",
		label: "Main Hall",
		embedUrl: `${BOOKING_EMBED_URL}&filter=hall`
	},
	{
		code: "uk39jw2I",
		label: "Meeting Room 2",
		embedUrl: `${BOOKING_EMBED_URL}&filter=uk39jw2I`
	},
	{
		code: "vnuUekLK",
		label: "Sports Pitch",
		embedUrl: `${BOOKING_EMBED_URL}&filter=vnuUekLK`
	}
];

module.exports = {
	BOOKING_CALENDAR_URL,
	BOOKING_EMBED_URL,
	BOOKING_NEW_EVENT_URL,
	BOOKING_ROOMS,
	BOOKING_URL,
	GOOGLE_MAPS_URL
};
