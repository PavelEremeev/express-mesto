const express = require('express');
const usersRoutes = require('./routes/users.js')
const cardsRoutes = require('./routes/cards.js')
const unknownRoute = require('./routes/unknown.js')

const app = express();
const PORT = 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRoutes)
app.use('/', cardsRoutes)
app.use('/', unknownRoute)

// app.get('/', (req, res) => {
//   res.send('hello :)');
// });

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
