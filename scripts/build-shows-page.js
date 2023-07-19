const concerts = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency ",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
]

//Add all concerts to the shows element

const showsEl = document.getElementById("shows");
for (let i=0; i < concerts.length; i++){
    const showEventsEl = createShowListingElement(concerts[i]);
    showsEl.appendChild(showEventsEl);
}

//Shows section will contain these details

function createShowListingElement(concerts){

    const showEventsEl = document.createElement("article"); 
    showEventsEl.classList.add("band-event");

    const dateTitleEl = document.createElement("h3");
    dateTitleEl.classList.add("band-event__heading");
    dateTitleEl.innerText = "DATE";

    const venueTitleEl = document.createElement("h3");
    venueTitleEl.classList.add("band-event__heading");
    venueTitleEl.innerText = "VENUE";

    const locationTitleEl = document.createElement("h3");
    locationTitleEl.classList.add("band-event__heading");
    locationTitleEl.innerText = "LOCATION";

    const dateEl = document.createElement("p");
    dateEl.classList.add("band-event__date");
    dateEl.innerText = concerts.date;

    const venueEl = document.createElement("p");
    venueEl.classList.add("band-event__venue");
    venueEl.innerText = concerts.venue;

    const locationEl = document.createElement("p");
    locationEl.classList.add("band-event__location");
    locationEl.innerText = concerts.location;

    const buttonEl = document.createElement("button");
    buttonEl.classList.add("button");
    buttonEl.classList.add("button--shows");
    buttonEl.innerText = "BUY TICKETS";

    showEventsEl.appendChild(dateTitleEl);
    showEventsEl.appendChild(dateEl);
    showEventsEl.appendChild(venueTitleEl);
    showEventsEl.appendChild(venueEl);
    showEventsEl.appendChild(locationTitleEl);
    showEventsEl.appendChild(locationEl);
    showEventsEl.appendChild(buttonEl);

    return showEventsEl;

}

const showEventsHeading = document.createElement("h2");
showEventsHeading.classList.add("section__heading");
showEventsHeading.classList.add("section__heading--shows")
showEventsHeading.innerText = "Shows";

const showEventsTableHeadingDate = document.createElement("h3");
showEventsTableHeadingDate.classList.add("band-event__heading--table");
showEventsTableHeadingDate.innerText = "DATE";

const showEventsTableHeadingVenue = document.createElement("h3");
showEventsTableHeadingVenue.classList.add("band-event__heading--table");
showEventsTableHeadingVenue.innerText = "VENUE";

const showEventsTableHeadingLocation = document.createElement("h3");
showEventsTableHeadingLocation.classList.add("band-event__heading--table");
showEventsTableHeadingLocation.innerText = "LOCATION";

const showEventsTableHeadingContainer = document.createElement("article");
showEventsTableHeadingContainer.classList.add("shows-heading__container");

//Add Table Headings for Tablet, Desktop, DesktopXL view
showEventsTableHeadingContainer.prepend(showEventsTableHeadingLocation);
showEventsTableHeadingContainer.prepend(showEventsTableHeadingVenue);
showEventsTableHeadingContainer.prepend(showEventsTableHeadingDate);

//Add to Shows section
showsEl.prepend(showEventsTableHeadingContainer);
showsEl.prepend(showEventsHeading);


//When Event is selected Highlight Event and Give class

const allConcertEvents = document.querySelectorAll(".band-event");
for (let i = 0; i < allConcertEvents.length; i++) {
    const concertEvent = allConcertEvents[i];

    concertEvent.addEventListener("click", function(event) {
        const activeConcert = document.querySelector(".band-event--active");
        if (activeConcert && concertEvent !== activeConcert){
            activeConcert.classList.remove("band-event--active");
        }
        concertEvent.classList.toggle("band-event--active");
    });
}


