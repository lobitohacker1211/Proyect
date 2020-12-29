const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Info',
    utilisation: `{prefix}ping`,

    execute(client, message) {
        const embed = new Discord.MessageEmbed()
         .setTitle('Ping')
         .setDescription(`${client.emotes.success} - El ping actual es de *${client.ws.ping}ms*!`)
         .setColor(0xFF6100);
        message.channel.send(embed);
    },
};