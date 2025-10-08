// -----------------Task 29--------------------
const riders = [
    {id:1, name:"hassan", location:"clifton"},
    {id:2, name:"haider", location:"Phase4"}
]

const drivers = [
    {id:1, name:"Ali", car:"Toyota yaris", status: "available"},
    {id:2, name:"Adnan", car:"Suzuki Alto", status: "busy"}
]

const rides = [
    {
        id:1,
        riderId: 1,
        driverId: 1,
        distance: 10.5,
        fare: 400,
        status: "completed"
    },
    {
        id:2,
        riderId: 1,
        driverId: 1,
        distance: 15.5,
        fare: 600,
        status: "completed"
    },
    {
        id: 3,
        riderId: 2, 
        driverId: 2,
        distance: 5,
        fare: 320,
        status: "ongoing"
    }
];

let highestEarning = 0;
let topDriver = "";

for (let i = 0; i < drivers.length; i++) {
  let totalEarning = 0;
  let rideCount = 0;

  for (let j = 0; j < rides.length; j++) {
    if (drivers[i].id === rides[j].driverId) {
      totalEarning += rides[j].fare;
      rideCount++;
    }
  }
  console.log(`Driver ${drivers[i].name}: ${rideCount} rides – Total Earnings: ${totalEarning}RS`);
  if(totalEarning > highestEarning){
    highestEarning = totalEarning
    topDriver = drivers[i].name
  }
}

let totalDistance = 0

for(let i=0; i< rides.length; i++){
    totalDistance += rides[i].distance;
}
let avgDistance = totalDistance/rides.length

console.log(`Highest-Earning Driver: ${topDriver} – Total Earnings: ${highestEarning}`);

let mostRides = 0
let topRider = ""

for(let i=0; i< riders.length; i++){
    let rideCount = 0
    for(let j=0; j< rides.length; j++){
        if(riders[i].id === rides[j].riderId){
            rideCount ++
        }
    }
    if(rideCount > mostRides){
        mostRides = rideCount
        topRider = riders[i].name
    }
}
console.log(`Most Active Rider: ${topRider} – Total Rides: ${mostRides}`);

console.log(`Average Ride Distance: ${avgDistance.toFixed(2)}Km`)

function completeRide(rideId) {
  // Find the ride
  const ride = rides.find(r => r.id === rideId);
  if (!ride) return console.log("Ride not found!");

  // Mark it completed
  ride.status = "completed";

  // Find the driver and make them available again
  const driver = drivers.find(d => d.id === ride.driverId);
  if (driver) driver.status = "available";

  console.log(`Ride ${rideId} completed by ${driver.name}`);
}

function cancelRide(rideId) {
  const ride = rides.find(r => r.id === rideId);
  if (!ride) return console.log("Ride not found!");

  ride.status = "cancelled";

  const driver = drivers.find(d => d.id === ride.driverId);
  if (driver) driver.status = "available";

  console.log(`Ride ${rideId} cancelled`);
}

for(let i=0; i< rides.length; i++){
    let distance = rides[i].distance
    if(distance > 20){
        rides[i].fare = rides[i].fare * 1.2
        console.log(`The updated fare is ${rides[i].fare}`)
    }
}

completeRide(1)
cancelRide(1)

// Time complexity
// Time Complexity = O(n²) (due to nested loops)