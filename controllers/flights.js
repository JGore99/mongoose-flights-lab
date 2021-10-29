import { Flight } from "../models/flights.js"

function index(req, res) {
  Flights.find({}, function(err, flights){
    res.render("flights/index", {
      flights,
      title: "Available Flights"
    })
  })
}

export {
  index
}