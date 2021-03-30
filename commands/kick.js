module.exports = {
    name: 'kick',
    description: "This cammand kicks a member!",


    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();

        if (message.member.roles.cache.has('812077359300608020', '812077359300608020', '806925364290125834')) {
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                const newEmbed = new Discord.MessageEmbed()
                .setColor('##28d12e')
                .setDescription(':white_check_mark:User has been kicked!')

                message.channel.send(newEmbed);
       
       
            } else {
                const newEmbed = new Discord.MessageEmbed()
                .setColor('#d12828')
                .setDescription(':x: Please specify a member!')

                message.channel.send(newEmbed);
            }

        } else {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#d12828')
            .setDescription(':x: You can not kick anyone because you do not have the right permisions.')

            message.channel.send(newEmbed);
        }
    }

}   

         

         
    
                
         
      
      
