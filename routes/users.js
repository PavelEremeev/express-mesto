const router = require('express').Router();
const User = require('../models/user')


router.get('/users', (req, res) => {
  User.find({})
  .then((data) => res.send(data))
  .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
});

router.get('/users/:_id', (req, res) => {
  User.findOne({_id: req.params._id})
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.status(200).send(user);
    }).catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
});

module.exports = router;
