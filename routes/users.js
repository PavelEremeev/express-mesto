const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/read-file');

const jsonUsersDataPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users', (req, res) => {
  readFile(jsonUsersDataPath)
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
});

router.get('/users/:_id', (req, res) => {
  const { _id } = req.params;
  readFile(jsonUsersDataPath)
    .then((data) => {
      const userToFind = data.find((user) => user._id === _id);
      return userToFind;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    }).catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
});

module.exports = router;
