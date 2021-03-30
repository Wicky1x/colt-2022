const profileModel = require("../models/profileSchema");
module.exports = {
  name: "beg",
  aliases: [],
  description: "beg for coins",
  cooldown: 500,
  async execute(client, message, args, Discord, cmd, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    
    const newEmbed = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor('#d12828')
      .setDescription((`${message.author.username}, you begged and received ${randomNumber} **coins**`))

      message.channel.send(newEmbed);
  },
};