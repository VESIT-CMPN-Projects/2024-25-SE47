import nodemailer from "nodemailer"
import dotenv from "dotenv";
import fs from "fs"
dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

let htmlTemplate = fs.readFileSync("./email.html", 'utf-8');
const sendCustomerMail = (req, res)=>{
    const {fName, lName, cName, email, phone, message} = req.body;
    htmlTemplate = htmlTemplate.replace('{{fname}}', fName)
    htmlTemplate = htmlTemplate.replace('{{lname}}', lName)
    htmlTemplate = htmlTemplate.replace('{{cname}}', cName)
    htmlTemplate = htmlTemplate.replace('{{email}}', email)
    htmlTemplate = htmlTemplate.replace('{{phone}}', phone)
    htmlTemplate = htmlTemplate.replace('{{message}}', message)

    const mailOptions = {
        from: "alfiyasiddique1708@gmail.com",
        to: "fs21co025.alfiya@gmail.com",
        subject: "New customer Message",
        html: htmlTemplate
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
            res.status(500).send("Failed to send mail");
        }else{
            console.log("Email Sent: "+ info.response);
            res.status(200).json({message: "Email sent successfully!"})
        }
    });
}

const EmailHandler = {
    sendCustomerMail
}

export default EmailHandler;
