const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });


}

const destinations = [

    {
        name: "Victoria Falls",
        category: "tourism",
        description: "Experience one of Zimbabwe's most spectacular natural attractions.",
        image: "images/victoria-falls.webp"
    },

    {
        name: "Lake Kariba",
        category: "tourism",
        description:"Enjoy beautiful sunsets and memorable experiences around Lake Kariba.",
        image: "images/lake-kariba.webp"
    },

    {
        name: "Hwange National Park",
        category: "wildlife",
        description:"Discover one of Zimbabwe's outstanding wildlife destinations.",
        image: "images/hwange.webp"
    },

    {
        name: "Chiredzi",
        category: "business",
        description:"A destination suitable for travellers with business and other travel needs.",
        image: "images/chiredzi.webp"
    }

];

function displayDestinations(destinationList) {

    const container = document.querySelector("#destinationContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    destinationList.forEach((destination) => {

        const card = document.createElement("article");

        card.classList.add("destination-card");

        card.innerHTML = `
            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy">

            <div class="destination-card-content">

                <h3>${destination.name}</h3>

                <p>${destination.description}</p>

                <a
                    href="booking.html"
                    class="button">
                    Book a Flight
                </a>

            </div>
        `;

        container.appendChild(card);

    });

}

if (document.querySelector("#destinationContainer")) {

    displayDestinations(destinations);

}


const filterButtons =
    document.querySelectorAll(".filter-button");

if (filterButtons.length > 0) {

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const category =
                button.dataset.category;

            filterButtons.forEach((button) => {

                button.classList.remove("active");

            });

            button.classList.add("active");


            if (category === "all") {

                displayDestinations(destinations);

            } else {

                const filteredDestinations =
                    destinations.filter(
                        (destination) =>
                            destination.category === category
                    );

                displayDestinations(filteredDestinations);

            }

        });

    });

}

const aircraft = [

    {
        name: "Cessna Aircraft",
        description: "A charter aircraft option designed for convenient travel between selected destinations.",
        image: "images/cessna.webp"
    },

    {
        name: "Cessna Caravan",
        description: "An aircraft option suited to charter travel and tourism journeys.",
        image: "images/cessna-caravan.webp"
    }

];


function displayFleet() {

    const container = document.querySelector("#fleetContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    aircraft.forEach((plane) => {

        const card = document.createElement("article");

        card.classList.add("fleet-card");

        card.innerHTML = `
            <img
                src="${plane.image}"
                alt="${plane.name}"
                loading="lazy">

            <div class="fleet-card-content">

                <h3>${plane.name}</h3>

                <p>${plane.description}</p>

                <a
                    href="booking.html"
                    class="button">
                    Request This Aircraft
                </a>

            </div>
        `;

        container.appendChild(card);

    });

}


if (document.querySelector("#fleetContainer")) {

    displayFleet();

}

const bookingForm =
    document.querySelector("#bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", handleBooking);

}

function handleBooking(event) {

    event.preventDefault();

    const name =
        document.querySelector("#fullName").value;

    const email =
        document.querySelector("#email").value;

    const destination =
        document.querySelector("#destination").value;

    const travelDate =
        document.querySelector("#travelDate").value;

    const passengers =
        Number(
            document.querySelector("#passengers").value
        );

    const travelType =
        document.querySelector(
            'input[name="travelType"]:checked'
        );

    if (!travelType) {

        showMessage(
            "Please select a travel type."
        );

        return;

    }


    if (passengers < 1) {

        showMessage(
            "Please enter at least one passenger."
        );

        return;

    }


    const booking = {

        name: name,
        email: email,
        destination: destination,
        travelDate: travelDate,
        passengers: passengers,
        travelType: travelType.value

    };

    localStorage.setItem(
        "charterBooking",
        JSON.stringify(booking)
    );


    showMessage(`
        Thank you, ${name}!

        Your charter request for ${destination}
        has been received.

        Travel date: ${travelDate}
        Passengers: ${passengers}
        Travel type: ${travelType.value}
    `);

}


function showMessage(message) {

    const messageBox =
        document.querySelector("#formMessage");

    if (messageBox) {

        messageBox.textContent = message;

    }

}
document.querySelector("#lastModified").textContent =
       `Last Modification: ${document.lastModified}`;