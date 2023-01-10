import { User } from './model/UserModel.js'
import nodemailer  from 'nodemailer'

export const nodemailerNotification = async (req,res) => {
    let mailTransporter = nodemailer.createTransport({
       service:'gmail',
       auth: {
           user: "shahmovid@gmail.com",
           pass:"vtbrglmccxrvzrln"
       }
   })

   let details = {
       from: "shahmovid@gmail.com",
       to:`${req.params.email}`,
       // to: "shahalmovid@gmail.com",
       subject: "email Verification",
       text: `Please verify your Acount with the Link Provided below \n  http://localhost:3000/verification/${req.params.email}`

   }

   mailTransporter.sendMail(details,(err)=>{
       if(err) {
           console.log(err)
       }
       else{
           console.log('emai send')
       }
   })

   res.status(201).json('signup successfully')
}

export const verifiyUser = async(req,res) => {
    try{
      
        let inComingEmail = req.body.email
      
        let myUser = await User.findOne({email: inComingEmail})
     
        if(myUser.email==inComingEmail){
            User.findByIdAndUpdate(myUser._id,{"isVerified":true}, function(err,docs){
                if(err){
                    res.send('error')
                }
                else{
                    res.status(200).json({
                        status: true,
                        data: docs,
                    })
                }
            });
        }
        else{
            res.status(500).json({
                error: err,
                status: false,
            })
        }
    }catch(err){
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}