let Rubikabot = require('../src/rubika')
const token = 'your_token'
const bot = new Rubikabot(token, {
  polling: true,
  start_message_id: 0
})
module.exports = bot
