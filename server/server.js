import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())

// app.use(express.json({ limit: '100kb'}))
// app.use(express.urlencoded({ extended:true, limit: '100kb'}))

// app.get('/', async (req, res) => {
//   try {
//     const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/2025/5.json?api-key=${process.env.API_KEY}`)
//     res.status(200).json(response.data.response.docs)

//   } catch (error) {
//     console.error(error)
//     res.status(500).send('error in fetching')
//   }
// })

app.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;     // default to page 1
    const limit = parseInt(req.query.limit) || 50; // default to 100 items per page
    const start = (page - 1) * limit;
    const end = page * limit;

    const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/2025/5.json?api-key=${process.env.API_KEY}`);
    const allDocs = response.data.response.docs;
    const paginatedDocs = allDocs.slice(start, end);

    res.status(200).json({
      total: allDocs.length,
      data: paginatedDocs
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(3000,()=>{
  console.log("PORT listening at port 3000")
})