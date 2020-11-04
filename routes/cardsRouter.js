const router = require('express').Router();
const Card = require('../models/card')

// Получение карточек
router.get('/cards', (req, res) => {
  Card.find({})
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
});

// Создание карточки
router.post('/cards', (req, res) => {
  const { name, link } = req.body;
  const { _id } = req.user;
  Card.create({ name, link, owner: _id })
  .then((card) => res.send(card))
  .catch(err => res.status(500).send(err));
});

// Удаление карточки
router.delete('/cards/:_id', (req, res) => {
  Card.findByIdAndRemove(req.params._id)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      return res.status(200).send(card);
    }).catch(() => res.status(500).send(err));
});


module.exports = router;

module.exports.createCard = (req, res) => {
  console.log(req.user._id); // _id станет доступен
};