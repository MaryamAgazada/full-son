const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const kittySchema = new mongoose.Schema({
    name: String,
    age:Number
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
app.get('/products', async function (req, res) {
    const getData= await Kitten.find()
  res.send(getData)
})
app.get('/products/:id', async function (req, res) {
    const {id}=req.params
    const getData= await Kitten.findById(id)
  res.send(getData)
})
app.post('/products',async function (req, res) {
    const body=req.body
    const postData=new Kitten(body)
     await postData.save()
        res.send(postData)
  })
  app.put('/products/:id',async function (req, res) {
    const {id}=req.params
    const body=req.body
    const uptadetData=await Kitten.findByIdAndUpdate(id,body)
    res.send(uptadetData)
  })
  app.delete('/products/:id',async function (req, res) {
    const {id}=req.params
    const deletedData= await Kitten.findByIdAndDelete(id)
    res.send(deletedData)
  })
  mongoose.connect('mongodb+srv://meryem:meryem@cluster0.lbuxvjt.mongodb.net/ ')
  .then(() => console.log('Connected!'));

app.listen(3000,()=>{
  console.log("salam 3000")
})