import { Flight } from "../models/flights.js"

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

function index(req, res) {
  Flight.find({}, function(err, flights){
    res.render("flights/index", {
      flights,
      title: "Available Flights"
    })
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

export {
  newFlight as new,
  create,
  index,
  show
}

