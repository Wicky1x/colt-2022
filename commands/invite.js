module.exports = {
    name: 'invite',
    description: "This is an invite!",
    execute(client,message, args,Discord){
    const newEmbed = new Discord.MessageEmbed()
       .setColor('#c6e2ff')
       .setTitle('Invite')
       .setURL('https://discord.com/oauth2/authorize?client_id=808349821625827328&scope=bot&permissions=8')
       .setDescription('Invite my Bot to your server!')

       message.channel.send(newEmbed);

    }
} 
