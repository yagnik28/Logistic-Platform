const login = require("./login");
const signup = require("./signup");
const activeBookings = require("./activeBookings");
const pastBookings = require("./pastBookings");
const currentJobs = require("./currentJobs");
const activeJobs = require("./activeJobs");
const pastJobs = require("./pastJobs");
const bookVehicle = require("./bookVehicle");  
const removeJob = require("./removeJob.js");

module.exports = {
    signup: signup,
    login: login,
    bookVehicle: bookVehicle, 
    activeBookings: activeBookings,
    pastBookings: pastBookings,
    currentJobs: currentJobs,
    activeJobs: activeJobs,
    pastJobs: pastJobs,
    removeJob: removeJob
};