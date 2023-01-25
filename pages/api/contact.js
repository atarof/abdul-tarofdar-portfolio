export default function handler(req, res) {
  const handler = (req, res) => {
    if (req.method === "POST") {
      const data = req.body
      if (!values.name || !values.email || !values.message) {
        return res.status(400).json({message: "Bad request"})
      }
    }
  } 
  
  let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'abdul.tarofdar1990@gmail.com',
        pass: 'wxgszeqibvubqgfz',
      },
      secure: true,
    })
    console.log(req.body)

  const mailData = {
    from: 'abdul.tarofdar1990@gmail.com',
    to: 'abdul.tarofdar1990@gmail.com',
    subject: `Message From ${req.body.fullname}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  }
   transporter.sendMail(mailData, function (err, info) {
     if (err) console.log(err)
     else console.log(info)
   })
   res.status(200)
   res.send()
}
