const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/read-file');

const jsonCardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => {
  readFile(jsonCardsDataPath)
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));
});

module.exports = router;
