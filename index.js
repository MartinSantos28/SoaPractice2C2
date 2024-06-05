const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/welcome', (req, res) => {
  res.send('Hello, World! miss x3\10000000000000000-00000');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
