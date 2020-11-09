const Card = require('../models/card')


module.exports.getCard = (req, res) => Card.find({})
.then((data) => res.send(data))
.catch(() => res.status(500).send({ message: 'Ошибка чтения файла' }));

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const { _id } = req.user
Card.create({ name, link, owner: _id })
.then((card) => res.send(card))
.catch(err => res.status(500).send(err));
}
module.exports.deleteCard = (req, res) => Card.findByIdAndRemove(req.params._id)
.then((card) => {
  if (!card) {
    return res.status(404).send({ message: 'Нет карточки с таким id' });
  }
  return res.status(200).send(card);
}).catch(() => res.status(500).send(err));