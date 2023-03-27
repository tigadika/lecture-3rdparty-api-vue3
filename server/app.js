require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! disini kita handle untuk komunikasi ke xenditnya
app.post('/invoice', async (req, res) => {
  try {
    const { email, total } = req.body
    if (!email) throw { name: 'EmailRequired' }
    if (!total) throw { name: 'TotalRequired' }

    const { data } = await axios({
      method: 'post',
      url: 'https://api.xendit.co/v2/invoices',
      data: {
        "external_id": `invoice-${new Date()}`,
        "amount": total,
        "payer_email": email,
        "description": "Invoice Demo Lecture",
        "should_send_email": true,
        "success_redirect_url": 'http://localhost:5173/'
      },
      auth: {
        username: process.env.XENDIT_API_KEY
      }
    })

    res.status(201).json({ data })
  } catch (error) {
    console.log(error);
    const status = error.name ? 400 : 500
    const message = error.name || 'Internal Server Error'

    res.status(status).json({ message })
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});