module.exports = {
    name: 'rules',
    description: "this is a Rules command!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('#452fc2')
       .setTitle('Rules')
       .setURL('')
       .setDescription('Please read the Rules and respect them.')
       .addFields(
           {name: 'Rule 1', value: 'Be kind and respect everyone.'},
           {name: 'Rule 2', value: 'Do not spam the Bots or you will be banned.'},
           {name: 'Rule 3', value: 'No cursing or inappropriate behaviour.'},
           {name: 'Rule 4', value: 'Respect Mods.'},
           {name: 'Rule 5', value: 'Have fun.'},
           )
       
       
       
       
       
       
       
       message.channel.send(newEmbed);

    }
} 
       
       
       
       
       
       

       
       
       
       
       
