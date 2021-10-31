import { Destination } from "../models/destinations.js"

function newDestination(req, res) {
  Destination.find({}, function(err, destinations) {
    res.render("destinations/new", {
      title: "Destinations",
      destinations
    })
  })
}

function create(req, res) {
  Destination.create(req.body, function(err, destination) {
    res.redirect("/destinations/new")
  })
}

// function show(req, res) {
//   Destination.findById(req.params.id, function(error, flight){
//     res.redirect("/destinations/new")
//   })   
// }

export {
  newDestination as new,
  create,
  // show
}

