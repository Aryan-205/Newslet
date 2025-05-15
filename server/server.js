import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config({
  path:'/.env'
})

const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=${API_KEY}`)
})
