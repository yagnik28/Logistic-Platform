const { ActiveBooking, ActiveJob } = require("../model/index");

const storeData = async function(data) {
    try {
        const activeBooking = new ActiveBooking(data);
        await activeBooking.save();
        const activeJob = new ActiveJob(data);
        await activeJob.save();
        return { status: 200, msg: "Booking Data Stored Successfully." };
    } 
    catch (error) {
        return { status: 500, msg: "Error Occured while storing data." };
    }
}

module.exports = storeData;