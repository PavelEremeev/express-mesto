const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const usersRoutes = require('./routes/usersRouter.js');
const cardsRoutes = require('./routes/cardsRouter.js');
const unknownRoute = require('./routes/unknown.js');


const app = express();
const PORT = 3000;
const mongoDbUrl = 'mongodb://localhost:27017/mestodb';
const mongoConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(mongoDbUrl, mongoConnectionOptions)

app.use((req, res, next) => {
  req.user = {
    _id: '5fa2d039cb2c1312e8710f73'
  }
  next()
})

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRoutes);
app.use('/', cardsRoutes);
app.use('/', unknownRoute);

// app.get('/', (req, res) => {
//   res.send('hello :)');
// });

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
