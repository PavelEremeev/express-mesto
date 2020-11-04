const router = require('express').Router();
const Card = require('../models/card')

router.get('/cards', (req, res) => {
  Card.find({})
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
});

module.exports = router;
