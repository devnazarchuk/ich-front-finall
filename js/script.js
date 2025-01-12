const offlineEvents = [
	{
		title: "Day Trading Idea and Strategy",
		description: "Business (5 km)",
		date: new Date(2024, 2, 18, 19),
		image: "assets/images/1event.png",
		location: "San Francisco, CA",
		attendees: 1,
		free: true,
		category: "Technology", 
	},
	{
		title: "Let’s Talk Networking: JPMorgan Chase in Palo Alto",
		description: "Business (25 km)",
		date: new Date(2024, 2, 19, 17),
		image: "assets/images/2event.png",
		location: "Chicago, CA",
		attendees: 41,
		free: true,
		category: "Technology", 
	},
	{
		title: "Tech Talks /& Quiz: Next-Gen Database Solutions",
		description: "Technology",
		date: new Date(2024, 2, 13, 18),
		image: "assets/images/3event.png",
		location: "New York, NY",
		attendees: 40,
		free: true,
		category: "Technology", 
	},
	{
		title: "INFORMS San Francisco Chapter In-Person Event",
		description: "Health and Wellbeing (50 km)",
		date: new Date(2024, 2, 28, 17),
		image: "assets/images/4event.png",
		location: "Chicago, IL",
		attendees: 41,
		free: true,
		category: "Health and Wellbeing", 
	},
	{
		title: "AI Wednesdays - Meet and Greet!",
		description: "Technology (5 km)",
		date: new Date(2024, 2, 13, 18, 30),
		image: "assets/images/5event.png",
		location: "Miami, FL",
		attendees: 29,
		free: true,
		category: "Technology", 
	},
	{
		title: "ROS By-The-Bay March 2024",
		description: "Social Activities",
		date: new Date(2024, 2, 21, 18),
		image: "assets/images/6event.png",
		location: "Nashville, TN",
		attendees: 51,
		free: true,
		category: "Social Activities", 
	},
	{
		title: "Free Christian Singles' Dinner",
		description: "Hobbies and Passions (10 km)",
		date: new Date(2024, 2, 29, 18),
		image: "assets/images/7event.png",
		location: "San Francisco, CA",
		attendees: 11,
		free: true,
		category: "Hobbies and Passions", 
	},
	{
		title: "In-person: Deep Dive into RAG Architectures (Food served)",
		description: "Hobbies and Passions (50 km)",
		date: new Date(2024, 2, 14, 17),
		image: "assets/images/8event.png",
		location: "San Francisco, CA",
		attendees: 16,
		free: true,
		category: "Hobbies and Passions", 
	},
];

const onlineEvents = [
	{
		title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
		description: "Business",
		date: new Date(2024, 2, 14, 18),
		image: "assets/images/1online.png",
		type: "online",
		attendees: 3,
		category: "Business",
		distance: null,
		location: "Online",
	},
	{
		title: "Vision Pro Developers Online Meetup",
		description: "Technology",
		date: new Date(2024, 2, 13, 19),
		image: "assets/images/2online.png",
		type: "online",
		attendees: 51,
		category: "Technology",
		distance: null,
		location: "Online",
	},
	{
		title: "Significant Musical Moments",
		description: "Hobbies and Passions",
		date: new Date(2024, 2, 13, 18),
		image: "assets/images/3online.png",
		type: "online",
		attendees: 16,
		category: "Hobbies and Passions",
		distance: null,
		location: "Online",
	},
	{
		title: "FREE Webinar: Introduction to Power BI",
		description: "Technology",
		date: new Date(2024, 2, 14, 17, 30),
		image: "assets/images/4online.png",
		type: "online",
		attendees: 33,
		category: "Technology",
		distance: null,
		location: "Online",
	},
];

function updateCitySelection(cityName) {
	const highlightSpan = document.querySelector(".highlight");
	highlightSpan.textContent = cityName;

	filterEventsByCity(cityName);
}

function filterEventsByCity(cityName) {
	const searchQuery = document
		.getElementById("searchEvent")
		.value.toLowerCase();
	const locationQuery = document
		.getElementById("searchLocation")
		.value.toLowerCase();

	document.getElementById("offlineEventsGrid").innerHTML = "";
	document.getElementById("onlineEventsGrid").innerHTML = "";

	let filteredOfflineEvents = offlineEvents;
	let filteredOnlineEvents = onlineEvents;

	filteredOfflineEvents = filteredOfflineEvents.filter(
		(event) =>
			event.title.toLowerCase().includes(searchQuery) &&
			event.location.toLowerCase().includes(cityName.toLowerCase())
	);

	filteredOnlineEvents = filteredOnlineEvents.filter(
		(event) =>
			event.title.toLowerCase().includes(searchQuery) &&
			event.location.toLowerCase().includes(cityName.toLowerCase())
	);

	if (filteredOfflineEvents.length === 0) {
		displayNoEventsMessage("offlineEventsGrid");
	}
	if (filteredOnlineEvents.length === 0) {
		displayNoEventsMessage("onlineEventsGrid");
	}

	filteredOfflineEvents.forEach((event) =>
		createEventCard(event, "offlineEventsGrid")
	);
	filteredOnlineEvents.forEach((event) =>
		createEventCard(event, "onlineEventsGrid")
	);
}

let selectedCategory = null;
let selectedCity = null;

function filterEvents() {
	const searchQuery = document
		.getElementById("searchEvent")
		.value.toLowerCase();
	const locationQuery = document
		.getElementById("searchLocation")
		.value.toLowerCase();

	document.getElementById("offlineEventsGrid").innerHTML = "";
	document.getElementById("onlineEventsGrid").innerHTML = "";

	let filteredOfflineEvents = offlineEvents;
	let filteredOnlineEvents = onlineEvents;

	if (selectedCategory) {
		filteredOfflineEvents = filteredOfflineEvents.filter((event) =>
			event.description.toLowerCase().includes(selectedCategory.toLowerCase())
		);
		filteredOnlineEvents = filteredOnlineEvents.filter((event) =>
			event.category.toLowerCase().includes(selectedCategory.toLowerCase())
		);
	}

	if (selectedCity) {
		filteredOfflineEvents = filteredOfflineEvents.filter((event) =>
			event.location.toLowerCase().includes(selectedCity.toLowerCase())
		);
		filteredOnlineEvents = filteredOnlineEvents.filter((event) =>
			event.location.toLowerCase().includes(selectedCity.toLowerCase())
		);
	}

	filteredOfflineEvents = filteredOfflineEvents.filter(
		(event) =>
			event.title.toLowerCase().includes(searchQuery) &&
			event.location.toLowerCase().includes(locationQuery)
	);

	filteredOnlineEvents = filteredOnlineEvents.filter(
		(event) =>
			event.title.toLowerCase().includes(searchQuery) &&
			event.location.toLowerCase().includes(locationQuery)
	);

	if (filteredOfflineEvents.length === 0) {
		displayNoEventsMessage("offlineEventsGrid");
	}
	if (filteredOnlineEvents.length === 0) {
		displayNoEventsMessage("onlineEventsGrid");
	}

	filteredOfflineEvents.forEach((event) =>
		createEventCard(event, "offlineEventsGrid")
	);
	filteredOnlineEvents.forEach((event) =>
		createEventCard(event, "onlineEventsGrid")
	);
}

function updateCitySelection(cityName) {
	const highlightSpan = document.querySelector(".highlight");
	highlightSpan.textContent = cityName;
	selectedCity = cityName; 

	filterEvents();
}

document.querySelectorAll(".category").forEach((categoryElement) => {
	categoryElement.addEventListener("click", function () {
		selectedCategory =
			selectedCategory === categoryElement.dataset.category
				? null
				: categoryElement.dataset.category;
		window.scrollTo({
			top: 740,
			behavior: "smooth",
		});
		document
			.querySelectorAll(".category")
			.forEach((el) => el.classList.remove("active"));
		if (selectedCategory) {
			categoryElement.classList.add("active");
		}

		filterEvents();
	});
});

document.getElementById("searchEvent").addEventListener("input", filterEvents);
document
	.getElementById("searchLocation")
	.addEventListener("input", filterEvents);

document.addEventListener("DOMContentLoaded", () => {
	const cities = document.querySelectorAll(".city");

	cities.forEach((cityElement) => {
		cityElement.addEventListener("click", () => {
			const selectedCity = cityElement.dataset.city;

			updateCitySelection(selectedCity);

			window.scrollTo({
				top: 740,
				behavior: "smooth",
			});
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	offlineEvents.forEach((event) => createEventCard(event, "offlineEventsGrid"));
	onlineEvents.forEach((event) => createEventCard(event, "onlineEventsGrid"));
});

function displayNoEventsMessage(containerId) {
	const container = document.getElementById(containerId);
	const noEventsMessage = document.createElement("p");
	noEventsMessage.classList.add("no-events-message");
	noEventsMessage.textContent =
		"No events available in this location or category.";
	container.appendChild(noEventsMessage);
}

function createEventCard(event, containerId) {
	const container = document.getElementById(containerId);
	const card = document.createElement("div");
	card.classList.add("event-card");

	const eventImage = document.createElement("img");
	eventImage.src = event.image;
	eventImage.alt = event.title;

	const cardContent = document.createElement("div");
	cardContent.classList.add("event-card-content");

	const eventTitle = document.createElement("h3");
	eventTitle.textContent = event.title;

	const eventDescription = document.createElement("p");
	eventDescription.textContent = `${event.description}`;

	const eventInfo = document.createElement("div");
	eventInfo.classList.add("event-info");

	const eventDate = document.createElement("span");
	eventDate.classList.add("event-date");
	eventDate.textContent = `${event.date.toLocaleString()}`;

	const eventAttendees = document.createElement("span");
	eventAttendees.classList.add("event-attendees");
	eventAttendees.textContent = `${event.attendees} going`;

	const eventFree = document.createElement("span");
	eventFree.classList.add("event-free");
	eventFree.textContent = "Free";

	eventInfo.appendChild(eventDate);
	eventInfo.appendChild(eventAttendees);
	eventInfo.appendChild(eventFree);

	cardContent.appendChild(eventTitle);
	cardContent.appendChild(eventDescription);
	cardContent.appendChild(eventInfo);

	card.appendChild(eventImage);
	card.appendChild(cardContent);

	container.appendChild(card);
}
