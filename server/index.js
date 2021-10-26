const express = require('express');
const cors = require('cors');
const { addItems } = require('./comonFunctions');
const { BASKET_GOODS_PATH } = require('./constants');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('./static'));

app.patch('/api', (res, req) => {
  console.log('body - ', res.body)
  addItems(BASKET_GOODS_PATH, res.body).then((items) => {
    req.setHeader('Content-type', 'application/json')
    req.send(items)
  })
});

app.listen('8000', () => {
  console.log('server is run!');
})