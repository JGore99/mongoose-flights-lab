import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number},
})

const flightSchema = new Schema({
  airline: {type: String, enum: ["American", "Southwest", "United"]},
  airport: {type: String, enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]},
  flightNo: {type: Number, min: 10, max: 9999},
  departs: {type: Date, default: new Date().setFullYear(new Date().getFullYear() + 1)},
  tickets: [ticketSchema],
  destinations: [{type: Schema.Types.ObjectId, ref: "Destination"}] 
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}