const express = require('express');
const app = express();

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/views', express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });

app.listen(3000, () => {
    console.log('server initializied');
});