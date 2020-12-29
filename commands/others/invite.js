const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    category: 'Others',
    aliases: ['invi'],
    description: 'Si me quieres en tu server ejecuta este comando!',
    execute(client, messsage) {
        const embed = new Discord.MessageEmbed()
         .setTitle('La invitacion esta aqui!')
         .setURL('https://discord.com/api/oauth2/authorize?client_id=786021371821031502&permissions=0&scope=bot')
         .setColor(0xFF0000);
        messsage.channel.send(embed);
    }
}