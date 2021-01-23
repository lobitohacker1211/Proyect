module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musica parada por que se desconecto del vc !`);
};