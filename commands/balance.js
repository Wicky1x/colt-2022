module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    description: "Check the user balance",
    execute(client, message, args, Discord, cmd, profileData) {
      const newEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor('#d12828')
      .addFields(
        {name: '**:moneybag:Bank:**', value: `${profileData.bank}`},           
              {name: '**:money_with_wings:Wallet:**', value: `${profileData.coins}`},  
        
       
        )

      message.channel.send(newEmbed);
    },
  };
  