const { User } = require("../model/index");

async function signup(req, res) {
    try {
        const email = req.body.email;
        const findUser = await User.findOne({ email: email });
        if(findUser) {
            return res.status(400).json({msg: "User with same email id already exist."});
        }
        const user = new User(req.body);
        await user.save();
        return res.status(200).json({msg: "Signed Up Successfully"});
    } catch (error) {
        return res.status(500).json({msg: "Error Occured while Signing Up"});
    }
}

module.exports = signup;