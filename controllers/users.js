const User = require('../models/user')

module.exports.getUser = (req, res) =>
User.find({})
.then((data) => res.send(data))
.catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
