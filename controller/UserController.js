import {User} from '../model/UserModel.js'
 export const registerUser = async(req, res) => {

    try {
        let payload = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        }
        
        let newUser = await User.create({
            ...payload
        });
        res.status(200).json({
            status: true,
            data: newUser,
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

export const loginUser = async(req, res) =>{
   try {
    let user = await User.findOne( {email:req.body.email , password : req.body.password})
    if(user){
        res.status(200).json({
            status: true,
            data: user,
        })
        
    }
    else{
        res.status(500).json({
            error: err,
            status: false,
        })
    }
   }
   catch(err){
    res.status(500).json({
        error: err,
        status: false,
    })
}
}
