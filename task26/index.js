// -------------------Task 26-------------------
// Airline Reservation System

let flights = {
    flight1: {id: 1, from: "New York", to: "London", seats: 200, bookedSeats: 150 },
    flight2: {id: 2, from: "Paris", to: "Tokyo", seats: 180, bookedSeats: 180 },
    flight3: {id: 3, from: "Sydney", to: "Dubai", seats: 220, bookedSeats: 100 },
    flight4: {id: 4, from: "Pakistan", to: "USA", seats: 160, bookedSeats: 80 },
};

let passengers = {
  p1: { id: 111, name: "Hassan", bookings: [] }
};

function bookTicket(flightid, PassengerId){
    if(flights[flightid].seats > flights[flightid].bookedSeats){
        flights[flightid].bookedSeats += 1;
        passengers[PassengerId].bookings.push(flightid);
        console.log(`Tickets booked successfully for ${passengers[PassengerId].name} on flight from ${flights[flightid].from} to ${flights[flightid].to} .`);

    }
    else{
        console.log(`Sorry, no seats available on flight from ${flights[flightid].from} to ${flights[flightid].to} .`);
    }
}

function cancelTicket(flightid, passengerId){
    flights[flightid].bookedSeats -=1;
    let index = passengers[passengerId].bookings.indexOf(flightid);
    if(index >=0){
        passengers[passengerId].bookings.splice(index, 1);
        console.log(`Ticket cancelled successfully for ${passengers[passengerId].name} on flight from ${flights[flightid].from} to ${flights[flightid].to} .`);
    }
    
    else{   
        console.log(`No booking found for ${passengers[passengerId].name} on flight from ${flights[flightid].from} to ${flights[flightid].to} .`);
    }
}
function flightReoport(flightid){
    console.log(`Flight from ${flights[flightid].from} to ${flights[flightid].to} : has ${flights[flightid].seats - flights[flightid].bookedSeats} available seats out of ${flights[flightid].seats} total seats.`);
    console.log()
    }

function popularFlights(){
    let popular = null;
    let maxSeats = -1;
    for(let flight in flights){
        if(flights[flight].bookedSeats > maxSeats){
            maxSeats = flights[flight].bookedSeats;
            popular = flights[flight]
        }
    }
    console.log(`Most popular flight is from ${popular.from} to ${popular.to} with ${popular.bookedSeats} booked seats.`);
    
}

bookTicket("flight1", "p1");
bookTicket("flight2", "p1");
cancelTicket("flight1", "p1");
flightReoport("flight1");
flightReoport("flight2");
flightReoport("flight3");
flightReoport("flight4");
popularFlights();