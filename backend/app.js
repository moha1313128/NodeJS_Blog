const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({message: 'success'});
});
app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'ddssddd',
      title: 'post 1',
      content: 'this the first post'
    },
    {
      id: '#eddsddfffd',
      title: 'post 2',
      content: 'this the 2 post'
    }
  ];
  res.status(200).json({
    message: 'post fetched with success',
    posts : posts
  });
});

module.exports = app;
