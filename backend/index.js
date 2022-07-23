const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const router = express.Router();
const { USERNAME, PASSWORD, EMAIL_PORT, PORT } = require("./config");

var transport = {
  host: "smtp.gmail.com",
  port: EMAIL_PORT || 465,
  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
};

var transporter = nodemailer.createTransport(transport);

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var fullName = req.body.fullName;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;
  var content = `Sender's Name: ${fullName} \nSender's Email: ${email} \nSubject: ${subject} \nMessage: \n${message} \n\n================== This email was sent via your personal portfolio website. ==================`;
  var mail = {
    from: fullName,
    to: USERNAME,
    subject: subject,
    text: content,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ status: "fail" });
    } else {
      res.json({ status: "success" });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT || 5000);
