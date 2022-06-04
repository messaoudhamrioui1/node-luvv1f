const https = require('https');
const options = {
  hostname: 'back.dev-web-retail-vr.com',
  method: 'GET',
};
var nodemailer = require('nodemailer');

var mailOptions = {
  from: 'messa200993@gmail.com',
  to: 'hamriouimessaoud@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

function intervalFunc() {
  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'messaoud.hamrioui@gmail.com',
        pass: 'Messaoud1993@@',
      },
    });
    mailOptions.text = res.statusCode;
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
}

intervalFunc();
