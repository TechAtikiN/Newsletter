// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../config/nodemailer'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  if (req.method === 'POST') {
    const {name, email} = req.body
    if (!name || !email) {
      return res.status(400).json({message:'Bad request'})
    }

     const userMailFormattedHtml = `
    <p>Heyy <strong>${name}!</strong>,</p>
    <p>Hope you are doing well today!<br>Today's quote of the day is, if you have got someone you love most, dont let them go away an inch..</p>
    <Kinesiis>Yours,<br>Nikita Khabya.</p>
  `
    const userMailData = {
    from: process.env.EMAIL, // sender address
    to: email,
    subject: 'Quote of the day', // subject line
    html: userMailFormattedHtml, // html body
  }

    try {
      await transporter.sendMail(userMailData)
    } catch (err) {
      console.log(err)
      return res.status(400).json({message:'Bad request'})
    }
  }

  return res.status(400).json({message:'Bad request'})
}

export default handler