const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

const server = app.listen(PORT, () => {
  console.log(' Tenthop server is listening on port 3000')
})

app.use(express.static('./client'))

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './client/' });
});