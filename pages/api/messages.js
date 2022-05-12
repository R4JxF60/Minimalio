const nodemailer = require("nodemailer");

async function mailer() {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: "rajithakumaraportfolio@gmail.com",
            clientId: "739138428345-i0c87ilb4ggnnpsk0mrb42vodiani7k9.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04B57VISwDWwsCgYIARAAGAQSNwF-L9IrFilGfsEvFzlEsIqGh3wZNhrQhAwQuy7_QJ83jnTcQhlx356aSsOz9zZVceXxwAEUmE4",
            accessToken: "ya29.A0ARrdaM8qtueByJ5bkSgEn2mXXQJBDhESs1CVC8Uk-Y0425PXqVaFSZM5aNBRp6-k-XtOdXj-NfVJ7ilDFCcvq9POfZklxjyFzoKOoALff51H3Vq3bgVTWr84FVQ7w0rq5p4uKI2isZ0vnii4TQMWELbqPMJi",
            expires: 3599,
        },
    });

    let options = await transporter.sendMail({
        from: "rajithakumaraportfolio@gmail.com", // sender address
        to: 'rajithakumaraprog@gmail.com', // list of receivers
        subject: "Hello", // Subject line
        text: "Hello world?", // plain text body
    });

    try {
        transporter.sendMail(options, (error, info) => {
            if(error) {
                console.log(`[Email Sending Failed!] : ${error}`);
            }else {
                console.log(`[Email Sending Success!] : ${info}`);
            }
        })
    }catch(error) {
        throw Error(error);
    }
}

function handler(req, res) {
    mailer().catch(error => console.error(`Error : ${error}`));
    res.status(200).json({request: req.body, status: "true"});
}

export default handler;