const nodemailer = require("nodemailer");



async function mailer() {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        },
    });

    let info = await transporter.sendMail({
        from: 'rajithakumaraprog@gmail.com', // sender address
        to: "lionrider135c@gmail.com", // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
}




function handler(req, res) {
    res.status(200).json({request: req.body, status: "true"});
}

export default handler;