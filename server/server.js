import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=${process.env.API_KEY}`)
    res.status(200).json(response.data).send("fetching")

  } catch (error) {
    console.error(error)
    res.status(500).send('error in fetching')
  }
})
app.listen(3000,()=>{
  console.log("PORT listening at port 3000")
})