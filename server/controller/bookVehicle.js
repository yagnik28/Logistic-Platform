const { storeData } = require("../service/index");

const bookVehicle = async function(req, res) {
    try {
        const data = {
            pickupLoc: req.body.pickupLoc, 
            dropoffLoc: req.body.dropoffLoc, 
            vehicle: req.body.vehicle, 
            price: req.body.price,
            status: "pending",
            date: new Date()
        };
        const result = await storeData(data);
        return res.status(result.status).json({msg: result.msg});
    } 
    catch (error) {
        res.status(500).json({ msg: "Error Occured while storing data." });
    }
}

module.exports = bookVehicle;