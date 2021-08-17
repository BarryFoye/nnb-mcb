const mineflayer = require('mineflayer')

// see the docs for additional options including log in credentials
// for WAN servers. 
// https://mineflayer.prismarine.js.org/#/api?id=mineflayercreatebotoptions
const options = {
    host: 'localhost', // change if server isn't runnning locally.
    port: '<PORT_NUMBER>', // change this to the given portnumber.
    username: 'botastic' // give your bot a name.
}
// create the bot with the options set
bot = mineflayer.createBot(options)

// when the bot spawns it will say hello, but only once!
bot.once('spawn', () => {
    bot.chat('Hello World!!!')
})

// log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)