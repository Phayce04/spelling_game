const express=require('express')
const app =express();
const PORT=process.env.PORT||3004

app.get('/api/words',()=>{
  res.send("words")
})

app.listen(PORT , ()=>{
  console.log(`Server is listening at ${PORT}`)
})