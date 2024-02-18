const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    reuired: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});

//Create Person Model

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
