let Rubikabot = require('../src/rubika')
const token = 'DG0RIQVKTTKCUEUGURNGOHBLWULTSSQFHISIFXGXDACBMGZFWKDWNBLZKQLFSJDY'
const bot = new Rubikabot(token, {
  polling: true,
  start_message_id: 0
})
module.exports = bot
