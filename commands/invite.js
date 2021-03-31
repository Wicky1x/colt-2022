module.exports = {
    name: 'invite',
    description: "This is an invite!",
    execute(client,message, args,Discord){
    const newEmbed = new Discord.MessageEmbed()
       .setColor('#c6e2ff')
       .setTitle('Invite')
       .setURL('https://discord.com/oauth2/authorize?client_id=817405339104051242&scope=bot&permissions=2147483647')
       .setDescription('Invite my Bot to your server!')

       message.channel.send(newEmbed);

    }
} 
