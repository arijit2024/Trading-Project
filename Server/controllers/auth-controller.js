const User = require("../models/user-model");

/////////////////////////////
// HOME PAGE
/////////////////////////////

const home = async (req,res) => {
    try {
        res.status(200).send("Wellcome Home")
    } catch (error) {
        console.log(error)
    }
}

/////////////////////////////
// REGISTER
/////////////////////////////

const register = async (req, res) => {
    try {
        const {username, email, phone, password, admin} = req.body;

        // CHECK EMAIL EXISTENCE

        const emailCheckExistence = await User.findOne({email:email});

        if(emailCheckExistence){
            return res.status(400).json({message : "Email already exists"})
        }

////////////////////////////////////////////////BCRIPT USED EASY WAY/////////////////////////////////////////////////////

        // const saltRounds = 10;

        // const bcriptPassword = await bcript.hash(password, saltRounds);     

        // await User.create({username, email, phone, password:bcriptPassword, admin});

/////////////////////////////////////////////////////////////////////////////////////////////////////        
        await User.create({username, email, phone, password, admin});

        res.status(200).json({message : "Successfilly Registation", token: await register.generateToken(), userId : register._id > toString()})
    } catch (error) {
        res.status(400).json("Internal error")
    }
}

module.exports = {home, register}