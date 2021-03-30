module.exports = {
    name: 'ban',
    description: "This cammand bans a member!",


    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();

        if (message.member.roles.cache.has('812077359300608020')) {
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("User has been banned");
            } else {
                message.channel.send('Please specify that member!');
            }

        } else {
            message.channel.send('You can not send this command because you do not have the right permisions.')
        }
    }

}   
