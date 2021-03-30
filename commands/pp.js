const Discord = require('discord.js');
module.exports = {
    name: 'pp',
    aliases: ['pp'],
    description: "this command send your penis size!",
    execute(client, message, args, Discord) {

    
        const penis = ["8D","8=D","8==D","8D","8=====D","8=====D","You have to have a penis to calculate","8==========D"]
        const penisrate = penis[Math.floor(Math.random() * penis.length)]

        const penisEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Pp Calculator")
        .setDescription(`${message.author.username}'s penis  
        ${penisrate} `)

        message.channel.send(penisEmbed);
    }}