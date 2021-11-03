import { Destination } from "../models/destinations.js"
import { Flight } from "../models/flights.js"


function index(req, res) {
  Flight.find({}, function(err, flight){
    res.render("flights/index", {
      flight,
      title: "Available Flights"
    })
  })
}

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
  console.log(req.body)
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save(function(err){
    if (err) {
      console.log(err)
      return res.redirect("/flights/new")
    }
    res.redirect(`/flights/${flight._id}`)
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('destinations')
  .exec(function(err, flight) {
    Destination.find({_id: {$nin: flight.destination}}, function(err, destinations) {
      console.log(flight)
      res.render('flights/show', {
        flight,
        title: 'Flight Info',
        destinations
      })
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight){
    req.body.price = 500,
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`) 
    })
  })
}

function addDestination(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body.destinationId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  createTicket,
  addDestination
}

