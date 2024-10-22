const { User } = require("../model/index");
const dotenv = require("dotenv/config");

async function login(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if(!user){
        return res.status(404).json({ msg: "User Not Found" })
    } 
    try {
        if(password !== user.password){
            return res.status(400).json({ msg: "Password doesn't match" })
        }
        res.status(200).json({ userType: user.userType, msg: "Logged in successfully." })
    } 
    catch (error) {
        res.status(500).json({ msg: "Error Occured while Login." })
    }
}

module.exports = login;