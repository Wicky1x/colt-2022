module.exports = async (client) =>{
    const guild = client.guilds.cache.get('786628025054789702');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('810630615753293904');
        channel.setName(`Member Count ${memberCount.toLocaleString()}`);
        console.log('Updating Member count');
    }, 5000);
}
