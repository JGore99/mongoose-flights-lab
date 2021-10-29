import { Flight } from "../models/flights.js"

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render("flights/index", {
      flights,
      title: "Available Flights"
    })
  })
}

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

export {
  index,
  newFlight as new
}

