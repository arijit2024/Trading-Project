const mongoose = require("mongoose");
const bcript = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    admin:{
        type:Boolean,
        default:false
    }
})

// SECURE THE PASSWORD WITH THE BCRIPT

userSchema.pre("save", async function(next){
  
    if(!this.isModified("password")){
        next();
    }

    try {

        const saltRounds = await bcript.genSalt(10);
        const bcriptPassword = await bcript.hash(this.password, saltRounds); 
        this.password = bcriptPassword;

    } catch (error) {
       
        next(error)
    
    }

})

// JSON WEB TOKEN
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            idAdmin : this.admin,
        },
        process.env.JWT_KEY,
        {
            expiresIn : "30d",
        }
        )
    } catch (error) {
        console.error(error)
    }
}

// DEFINE THE MODEL OR THE COLLECTION NAME

const User = new mongoose.model("user",userSchema);

module.exports = User;