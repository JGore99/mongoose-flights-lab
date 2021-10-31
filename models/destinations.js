import mongoose from "mongoose"

const Schema = mongoose.Schema

const destinationSchema = new Schema({
  place: {type: String}
})

const Destination = mongoose.model("Destination", destinationSchema)

export {
  Destination
}