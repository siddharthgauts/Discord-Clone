import express from "express"
import Gun from 'gun' //39.5K (gzipped: 15.1K)
import  cors from  'cors' //4.9K (gzipped: 2K)


const app=express()
const port = prrocess.env.PORT || 9000

app.use(cors())

app.use(cors())

app.get('/', (_,res)=>{
    res.status(200).send('>DEBUG: Discord Node is Live')
})

const server =app.listen(port, ()=>{
    console.log('>DEBUG: Discord Node is listening at http://localhost:${port}')
})
Gun({web: server})