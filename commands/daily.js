const profileModel = require("../models/profileSchema");
module.exports = {
  name: "daily",
  aliases: [],
  description: "beg for coins",
  cooldown: 86400,

  async execute(client, message, args, Discord, cmd, profileData) {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
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
      .setColor('#d12828')
      .setDescription((`${message.author.username}, you recived ${randomNumber} as your daily **coins**.`))

      message.channel.send(newEmbed);
  },
};