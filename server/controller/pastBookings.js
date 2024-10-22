const { PastBooking } = require("../model/index");

const pastBookings = async function(req, res) {
    try {
        const data = await PastBooking.find({});
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json("Error Occured while fetching data.");
    }
}

module.exports = pastBookings;