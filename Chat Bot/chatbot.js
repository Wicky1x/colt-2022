const { chatBot } = require('reconlx') 

module.exports = {
    name : 'chat',
    execute : async(client, message, args) => {
        chatBot(message, args.join(" "))
    }
}