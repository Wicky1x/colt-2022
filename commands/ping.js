const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    async execute (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setColor('#fc0303')
        .setDescription(`\`${Date.now() - message.createdTimestamp}\`ms`);
        

        message.channel.send(ping);
    }
}