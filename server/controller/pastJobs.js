const { PastJob } = require("../model/index");

const pastJobs = async function(req, res) {
    try {
        const data = await PastJob.find({});
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json("Error Occured while fetching data.");
    }
}

module.exports = pastJobs;