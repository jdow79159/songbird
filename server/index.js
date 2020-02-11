const express = require('express');
const data = require('./data');


const app = express();
const PORT = process.env.PORT || 80;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/questions', (req, res)=>{
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
