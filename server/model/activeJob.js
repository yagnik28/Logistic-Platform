const mongoose = require("mongoose");

const activeJobSchema = new mongoose.Schema({
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

const ActiveJob = mongoose.model("activeJob", activeJobSchema);

module.exports = ActiveJob;