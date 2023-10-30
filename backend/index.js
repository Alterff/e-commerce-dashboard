const express = require('express');
const cors = require('cors');
require('./config');
const data = require('./Users');
const app = express();
const product=require('./Product');
app.use(express.json());

// Use cors() middleware
app.use(cors({
    origin: 'http://localhost:3000', // Adjust the origin based on your frontend URL
  }));
  

app.post('/register', async (req, resp) => {
 
    let user = new data(req.body);
    let result = await user.save();
    result=result.toObject();
    delete result.pass;
    resp.send(result);

});
app.post('/login',async (req,resp)=>{
  if(req.body.pass && req.body.email){
  let user=await data.findOne(req.body).select("-pass");
  if(user){
    resp.send(user);
  }
  else{
    resp.send({result:'no data'});
  }
}
else{
  resp.send('error');
}

})
app.post('/add-product', async (req,resp)=>{
  let pr=new product(req.body);
  let result=await pr.save();
  resp.send(result);
})
app.get('/',async(req,resp)=>{
  let result=await product.find();
  resp.send(result);
})
app.delete('/delete/:_id',async (req,resp)=>{
  let result=await product.deleteOne({_id:req.params._id});
  resp.send(result);
});

app.get('/product/:_id', async (req, resp) => {
  try {
    let result = await product.findOne({ _id: req.params._id });
    
    if (result) {
      resp.send(result);
    } else {
      resp.send({ "result": 'not found' });
    }
  } catch (error) {
    resp.status(500).send({ "error": 'An error occurred' });
  }
});
app.put('/update/:id',async(req,resp)=>{
  let result=await product.updateOne(
    {_id:req.params.id},
    {$set:req.body}
  );
  resp.send(result);
})
app.get("/search/:key", async (req,resp)=>{
  let result=await product.find({
    "$or":[
      {
        name:{$regex :req.params.key}
      },
      {
        category:{$regex:req.params.key}
      },
      {
        company:{$regex:req.params.key}
      }
    ]
  })
  resp.send(result);
})


app.listen(5000);

