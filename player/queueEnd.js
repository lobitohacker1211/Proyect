module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La musica se ha parado porque no hay mas en la lista !`);
};