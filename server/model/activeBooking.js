const mongoose = require("mongoose");

const activeBookingSchema = new mongoose.Schema({
    pickupLoc: {
        type: String,
        required: true
    },
    dropoffLoc: {  
        type: String,
        required: true
    },
    vehicle: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const ActiveBooking = mongoose.model("activeBooking", activeBookingSchema);

module.exports = ActiveBooking;