// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  // extract and store basic information from the ride Object
  let firstName = ride.passengerDetails.first
  let lastName = ride.passengerDetails.last
  let phoneNumber = ride.passengerDetails.phoneNumber
  let pickupLocation = ride.pickupLocation
  let dropoffLocation = ride.dropoffLocation
  
  // Display rider + trip information on Console
console.log (`Passenger's name & Phone number : ${firstName}, ${lastName} - ${phoneNumber}`)
console.log (`Trip itinerary : from : ${pickupLocation.address}, ${pickupLocation.city}, ${pickupLocation.state}, ${pickupLocation.zip} to : ${dropoffLocation.address}, ${dropoffLocation.city}, ${dropoffLocation.state}, ${dropoffLocation.zip}  `)

// Display level of service on console
if (ride.purpleRequested == true) {console.log (`level of service : Noober Purple`)} else if (ride.numberOfPassengers > 3 && ride.purpleRequested == false) {console.log(`level of service : Noober XL`)} else {console.log (`level of service : Noober X`)}

  // 🔥 YOUR CODE ENDS HERE 🔥
})
