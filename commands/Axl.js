module.exports = {
    name: 'axl',
    description: "this is a axl command!",
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('#452fc2')
       .setTitle('Axl')
       .setDescription('This is my dog Axl he is the best do u like him.')
       
       
        
       

       
       
       
       
       
       
       message.channel.send(newEmbed);


    }
} 