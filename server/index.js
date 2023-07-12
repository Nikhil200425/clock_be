const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  let result;
  
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }

  res.json({ result });
});

app.listen(9000, () => {
  console.log('Server running on port 9000');
});
