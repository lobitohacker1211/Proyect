module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} se ha puesto en la lista !`);
};