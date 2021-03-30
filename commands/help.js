module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor('#0cf2eb')
       .setTitle('Help')
       .setURL('')
       .setDescription('My prefix on this server is -')
       .addFields(
           {name: ':hammer:Mod', value: '`-help-mod`'},           
           
           {name: ':moneybag:Economy', value: '`-help Economy`'},  
           
           {name: ':laughing:Fun', value: '`-help-fun`'},           {name: 'Support Server', value: '`-invite`'}, 
           )
        .setFooter('Hope this helped you.');
       
       
       
       
       
       
       message.channel.send(newEmbed);

       

    }
} 