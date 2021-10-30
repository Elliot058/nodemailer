var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f61386e39cebd5",
    pass: "62367327351dfa",
  },
});

var mailOptions = {
  from: "blackhat2658@gmail.com",
  to: "pahichinmay1998@gmail.com,",
  subject: "Sending Email using Node.js",
  text: `hy krishna `,
  html:
    '<marquee><h1 style="color:green"></marquee>I LOVE YOU KRISHNA </h1><p>Your Messsage</p>',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
