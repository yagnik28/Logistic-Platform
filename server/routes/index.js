const express = require("express");
const { signup, login, bookVehicle, activeBookings, pastBookings, currentJobs, activeJobs, pastJobs, removeJob } = require("../controller/index.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/book-vehicle", bookVehicle);
router.get("/active-booking", activeBookings);
router.post("/past-booking", pastBookings);
router.get("/past-booking", pastBookings);
router.get("/current-jobs", currentJobs);
router.get("/active-jobs", activeJobs);
router.get("/past-jobs", pastJobs);
router.delete("/remove-job", removeJob);

module.exports = router;