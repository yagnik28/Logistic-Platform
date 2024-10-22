const { ActiveJob, PastJob, ActiveBooking, PastBooking } = require("../model/index");

const removeJob = async function(req, res) {
    try {
        const { pickupLoc, dropoffLoc, vehicle, price, status, date } = req.body;
        var job = { pickupLoc, dropoffLoc, vehicle, price, status: 'completed', date };
        const pastJob = new PastJob(job);
        await pastJob.save();
        const pastBooking = new PastBooking(job);
        await pastBooking.save();
        job.status = status;
        await ActiveJob.deleteOne(job);
        await ActiveBooking.deleteOne(job);
        return res.status(200).json({msg: "Active Job removed successfully."});
    } catch (error) {
        res.status(500).json({msg: "Error Occured while removing job."});
    }
}

module.exports = removeJob;