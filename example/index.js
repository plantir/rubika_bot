const bot = require('./bot')

bot.onText(/شروع/, msg => {
  bot.sendMessage(msg.chat_id, 'به روبیکا خوش آمدید')
})
