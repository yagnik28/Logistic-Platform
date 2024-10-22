const mongoose = require("mongoose");

const Connection = function(MONGODB_URI) {
    mongoose.connect(MONGODB_URI);
    const conn = mongoose.connection;
    conn.once("open", () => {
        console.log("DATABASE Connected.");
    });
};

module.exports = { Connection };

