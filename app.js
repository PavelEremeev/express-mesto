const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const usersRoutes = require('./routes/users.js');
const cardsRoutes = require('./routes/cards.js');
const unknownRoute = require('./routes/unknown.js');

const app = express();
const PORT = 3000;
const mongoDbUrl = 'mongodb://localhost:27017/mestodb';
const mongoConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}

mongoose.connect(mongoDbUrl, mongoConnectionOptions)

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRoutes);
app.use('/', cardsRoutes);
app.use('/', unknownRoute);

// app.get('/', (req, res) => {
//   res.send('hello :)');
// });

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
