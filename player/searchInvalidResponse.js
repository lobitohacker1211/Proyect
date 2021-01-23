module.exports = (client, message, query, tracks, content, collector) => {
    message.channel.send(`${client.emotes.error} - Envia un numero valido entre **1** y **${tracks.length}** !`);
};