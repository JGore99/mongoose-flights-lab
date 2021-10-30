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
  Flight.findById(req.params.id, function(error, flight){
    res.render("flights/show", {
      flight,
      title: "Flight Info",
    })
  })   
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight){
    flight.ticket.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`, {
      }) 
    })
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  createTicket
}

