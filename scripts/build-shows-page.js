const baseURL = "https://project-1-api.herokuapp.com";
const apiKey = "?api_key=46aad9a0-7a68-4a02-ac6e-086c8ab3ad37"
const showsListElement = document.getElementById("shows")

axios
    .get(baseURL +"/showdates" + apiKey)
    .then(res => {
        const allShows = res.data
        console.log(allShows);
        displayFutureShows(showsListElement, allShows);

        //Below is code that will indicate to users their selected show through addition/removal of class
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
    })

    .catch(error => {
        console.error ("Error: " + "Error retrieving user data", error);
    })

//Shows section will contain these details

function displayFutureShows(listOfShows, shows){
    
    //Each Show will contain these elements
    shows.forEach((showEvent) =>{

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
    const date = new Date(showEvent.date);
    const desiredDateDisplay = date.toLocaleDateString(undefined,{weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    //Note: Leaving the function above as undefined, the date will be based on the user's local settings/region
    dateEl.innerText = desiredDateDisplay;

    const venueEl = document.createElement("p");
    venueEl.classList.add("band-event__venue");
    venueEl.innerText = showEvent.place;

    const locationEl = document.createElement("p");
    locationEl.classList.add("band-event__location");
    locationEl.innerText = showEvent.location;

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

    listOfShows.appendChild(showEventsEl);
    })
}

//Table Headings for Tablet, Desktop, DesktopXL view
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

showEventsTableHeadingContainer.prepend(showEventsTableHeadingLocation);
showEventsTableHeadingContainer.prepend(showEventsTableHeadingVenue);
showEventsTableHeadingContainer.prepend(showEventsTableHeadingDate);

showsListElement.prepend(showEventsTableHeadingContainer);
showsListElement.prepend(showEventsHeading);

