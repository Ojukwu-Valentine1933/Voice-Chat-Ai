const User = require("../model/userModel")
const verifyToken = require("../helpers/authHelpers")
const googleAuth = async (req, res) => {
    const {token}= req.body
    if(!token){
        return res.status(400).json({message:"Google Auth failed"})
    } else {
        
        
        const payload = await verifyToken(token)


        console.log(payload)



        if(!payload){
            return res.status(400).json({message:"Google Auth failed"})
        } 
        const {email, picture, given_name, family_name} = payload;

        const user = await User.findOne({email})
        if(!user){
            const newUser = new User({
                firstName: given_name,
                lastName: family_name,
                profilePicture: picture,
                emailAddress: email
            })
       
          await newUser.save()
            return res.status(200).json({message: "success", newUser, token})
        } else {
            return res.status(200).json({message: "success", user, token})
        }
    }

}
module.exports = googleAuth