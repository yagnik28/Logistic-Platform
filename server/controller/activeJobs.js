const { ActiveJob } = require("../model/index");

const activeJobs = async function(req, res) {
    try {
        const data = await ActiveJob.find({});
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json("Error Occured while fetching data.");
    }
}

module.exports = activeJobs;