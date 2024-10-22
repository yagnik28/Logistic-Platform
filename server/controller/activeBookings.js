const { ActiveBooking } = require("../model/index");

const activeBookings = async function(req, res) {
    try {
        const data = await ActiveBooking.find({});
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json("Error Occured while fetching data.");
    }
}

module.exports = activeBookings;