require('dotenv').config();

const cooldowns = new Map();

const cooldowns_amount = cooldowns.length;



const profileModel = require("../../models/profileSchema");
const { mapReduce } = require('../../models/profileSchema');

module.exports = async (Discord, client, message) =>{
    
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({  userID: message.author.id});
        if(!profileData){
            let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            coins: 1000,
                bank: 0,
                }); 
                profile.save();
        }
    } catch (err) {
        console.log(err);
    }

    

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#d12828')
            .setDescription(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}!`)
            
            return message.channel.send(newEmbed);
        }
    }

    time_stamps.set(message.author.id, current_time);
    
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

  try{
    command.execute(client, message, args, Discord, cmd, profileData);
} catch (err){
    message.reply("There was an error trying to execute this command");
    console.log(err);
 }
     


}