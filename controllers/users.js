const User = require('../models/user')

module.exports.getUser = (req, res) =>
User.find({})
.then((data) => res.send(data))
.catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar})
  .then((user) => res.send(user))
  .catch(err => res.status(500).send(err));
}

module.exports.getOneUser = (req, res) =>
User.findById(req.params._id)
.then((user) => {
  if (!user) {
    return res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
  return res.status(200).send(user);
}).catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));