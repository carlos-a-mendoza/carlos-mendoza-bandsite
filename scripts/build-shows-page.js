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
    // showEventsContainer.appendChild(showEventsHeading);
    // showEventsContainer.appendChild(showEventsEl);
}

//Shows section will contain these details

function createShowListingElement(concerts){

    //Create a section element that will contain all of these elements for showEvent Element
    //Include heading titles as well within these elements but display them as none until it reaches a certain width
        //Heading titles for showEventEl will need to be hidden in response to the same media query as mentioned above

    const showEventsEl = document.createElement("article"); 
    showEventsEl.classList.add("band-event");

    //add headings as a child to the concert element

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

    //This will be the order of how it is displayed in the box by default
    showEventsEl.appendChild(dateTitleEl);
    showEventsEl.appendChild(dateEl);
    showEventsEl.appendChild(venueTitleEl);
    showEventsEl.appendChild(venueEl);
    showEventsEl.appendChild(locationTitleEl);
    showEventsEl.appendChild(locationEl);
    showEventsEl.appendChild(buttonEl);

    return showEventsEl;

    // return showEventsContainer;
}

const showEventsHeading = document.createElement("h2");
showEventsHeading.classList.add("section__heading");
showEventsHeading.innerText = "Shows";

showsEl.prepend(showEventsHeading);
