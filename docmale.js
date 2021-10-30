var nodemailer = require("nodemailer");
var fs = require("fs");

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "036fb316b0e6c1",
    pass: "c2f1ddedc02dc9",
  },
});
fs.readFile(
  "C:/Users/CHINMAYA/Desktop/What is react js.docx",
  function (err, data) {
    if (err) throw err;
    var mailOptions = {
      from: "padhichinmay108@gmail.com", // sender address
      to: "padhichinmay108@gmail.com", // list of receivers
      subject: "Attachment", // Subject line
      text: "react js fundamental", // plaintext body
      html: "<b>react js</b>", // html body
      attachments: [
        {
          filename: "What is react js.docx",
          contentType: "application/docx",
        },
      ],
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: " + info.response);
    });
    console.log(data);
  }
);
