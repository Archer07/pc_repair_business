var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/send', function(req, res, next) {
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail', // using gmail as mailing service
        auth: {
            user: '', // enter your email
            pass: ''// enter the password of your email
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Sender 👻" <transporter@email.com>', // sender address
        to: 'receiver@num1.com, receiver@num2.com', // list of receivers
        subject: 'Test nodemailer ✔', // Subject line
        text: 'This message came from: ' + req.body.name + ', via the email: ' + req.body.email + '. The content of the message is: ' + req.body.message+ '.', // plain text body
        html: '<p>This message came from: <b>' + req.body.name + '</b>, via the email: <b>' + req.body.email + '</b></p>.<p> The content of the message is: </p><h3>' + req.body.message+ '.</h3>'// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.redirect('/');
        }
        res.redirect('/');
    });

});

module.exports = router;
