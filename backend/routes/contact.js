//handle pages route
const nodemailer = require("nodemailer");
const Router = require('express').Router();



Router.route("/").post((req, res)=>{
    const email = req.body.email;
    const name = req.body.name;
    // const message = req.body.message;
    // in order to use gmail as a transporter smtp make sure you switch on less secure apps authentication for the account: link bellow
        // https://myaccount.google.com/lesssecureapps
    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
    
            // user:  // like : abc@gmail.com,
            // pass: // like : pass@123
        }
        });
    const mailInfo = {
        from: 'codexjo@gmail.com',
        to: email,
        subject: 'Testing Anjay project',
        html: `<h1>Hello ${name} </h1><p>Mail was sent from a node project <b>Anjay project</b> today!</p>`
    };
    transport.sendMail(mailInfo, function(err, info) {
        if(!err){
            res.status(200).send("Message sent successfully")
        }else{
            res.status(400).json("Error: "+err)
        }
    });
})

module.exports = Router;
