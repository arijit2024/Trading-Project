/////////////////////////////
// HOME PAGE
/////////////////////////////

const home = async (req,res) => {
    try {
        res.status(200).send("Wellcome")
    } catch (error) {
        console.log(error)
    }
}

/////////////////////////////
// REGISTER
/////////////////////////////

const register = async (req, res) => {
    try {
        res.status(200).json({message : req.body})
    } catch (error) {
        res.status(400).json("Internal error")
    }
}

module.exports = {home, register}