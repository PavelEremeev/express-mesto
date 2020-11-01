const validator = { function(v) {
  const regex = /^(http|https):\/\/cs[0-9]+\.[a-zA-Z0-9]+\.me\/[^.]+/
  return regex.test(v)
},
message: 'Введите ссылку!'
}
module.exports = {validator}