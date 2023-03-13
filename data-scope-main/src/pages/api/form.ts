import { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const body = req.body
    if (!body.length) {
      return res.status(400).json({ data: 'Missing email' })
    }

    const msg = {
      to: "mohamedahassan1998@gmail.com", 
      from: "info@momito.co.uk",
      subject: "Datascope Analytics: Interest Shown",
      html: `<p>Interest was recently show on Datascope Analytics by: <strong>${body}</strong></p>`
    }
    try {
      const email = await sgMail.send(msg);
      return res.status(200).json({ data: `${body.first} ${body.last}` })
    } catch (error) {
      console.error(error)
      return res.status(400).json({ data: 'Something went wrong' })
    }
  }
