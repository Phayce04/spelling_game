import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';
import wordArray from './words.js';
const app =express();
const PORT=process.env.PORT||3004
//json requests
app.use(express.json())
// html files
app.use(express.static('./public'))


const  __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

// home page
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public','index.html'))
})

//api routes  
app.get('/api/words',(req,res)=>{
  res.send(wordArray)
})

app.listen(PORT , ()=>{
  console.log(`Server is listening at ${PORT}`)
})