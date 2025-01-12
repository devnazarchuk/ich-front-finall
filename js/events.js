const eventsStore = [
	{
		title: "INFJ Personality Type - Coffee Shop Meet & Greet",
		description: "Being an INFJ",
		date: new Date(2024, 2, 23, 15),
		image:
			"https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
		type: "offline",
		attendees: 99,
		category: "Hobbies and Passions",
		distance: 50,
	},
	{
		title:
			"NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
		description: "New York AI Users",
		date: new Date(2024, 2, 23, 11, 30),
		image:
			"https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		type: "offline",
		attendees: 43,
		category: "Technology",
		distance: 25,
	},
	{
		title: "Book 40+ Appointments Per Month Using AI and Automation",
		description: "New Jersey Business Network",
		date: new Date(2024, 2, 16, 14),
		image:
			"https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		type: "online",
		category: "Technology",
		distance: 10,
	},
	{
		title: "Dump writing group weekly meetup",
		description: "Dump writing group",
		date: new Date(2024, 2, 13, 11),
		image:
			"https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		type: "online",
		attendees: 77,
		category: "Business",
		distance: 100,
	},
	{
		title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
		description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
		date: new Date(2024, 2, 14, 11),
		image:
			"https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		type: "online",
		attendees: 140,
		category: "Social Activities",
		distance: 74,
	},
	{
		title: "All Nations - Manhattan Missions Church Bible Study",
		description: "Manhattan Bible Study Meetup Group",
		date: new Date(2024, 2, 14, 11),
		image:
			"https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		type: "offline",
		category: "Health and Wellbeing",
		distance: 15,
	},
];

const filterTypes = document.querySelector(".filters select:nth-child(1)");
const filterDistances = document.querySelector(".filters select:nth-child(2)");
const filterCategories = document.querySelector(".filters select:nth-child(3)");

const eventsList = document.querySelector(".events");

const locationInput = document.querySelector(".location-input input");
const searchInput = document.querySelector(".search-input input");

function renderEvents(filteredEvents) {
	eventsList.innerHTML = "";
	filteredEvents.forEach((event) => {
		const eventElement = document.createElement("article");
		eventElement.classList.add("event-card");

		const formattedDate = formatEventDate(event.date);
		if (event.attendees) {
			eventElement.innerHTML = `
      <img src="${event.image}" alt="${event.title}" />
      <div class="event-info">
	  	<p>${formattedDate}</p>
        <h2>${event.title}</h2>
        <p>${event.category} (${event.distance} km)</p>
        <p>${event.attendees} attendees</p>
      </div>
    `;
		}
		else{eventElement.innerHTML = `
      <img src="${event.image}" alt="${event.title}" />
      <div class="event-info">
	  	<p>${formattedDate}</p>
        <h2>${event.title}</h2>
        <p>${event.category} (${event.distance} km)</p>
        <p></p>
      </div>
    `;}
		eventsList.appendChild(eventElement);
	});
}

function filterEvents() {
	const type = filterTypes.value;
	const distance = parseInt(filterDistances.value);
	const category = filterCategories.value;
	const location = locationInput.value.toLowerCase();
	const titleSearch = searchInput.value.toLowerCase();

	const filteredEvents = eventsStore.filter((event) => {
		const matchesType = type === "Any" || event.type === type;

		const matchesDistance = distance === 0 || event.distance <= distance;

		const matchesCategory = category === "Any" || event.category === category;

		const matchesLocation =
			location === "" || event.title.toLowerCase().includes(location);

		const matchesTitleSearch =
			titleSearch === "" || event.title.toLowerCase().includes(titleSearch);

		return (
			matchesType &&
			matchesDistance &&
			matchesCategory &&
			matchesLocation &&
			matchesTitleSearch
		);
	});

	renderEvents(filteredEvents);
}

filterTypes.addEventListener("change", filterEvents);
filterDistances.addEventListener("change", filterEvents);
filterCategories.addEventListener("change", filterEvents);
locationInput.addEventListener("input", filterEvents);
searchInput.addEventListener("input", filterEvents);

function formatEventDate(date) {
	const options = {
		weekday: "short", 
		month: "short", 
		day: "numeric", 
		hour: "numeric", 
		minute: "numeric", 
		timeZoneName: "short", 
	};
	return new Intl.DateTimeFormat("en-US", options).format(date);
}

renderEvents(eventsStore);
