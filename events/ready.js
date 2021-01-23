module.exports = async (client) => {
    console.log(`Listo en ${client.guilds.cache.size} servers`);

    client.user.setActivity(client.config.discord.activity);
}