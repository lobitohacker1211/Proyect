module.exports = (client, message, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} Se ha añadido a la lista (**${playlist.items.length}** Musica) !`);
};