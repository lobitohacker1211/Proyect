module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musica parada por que no hay miembros en el vc !`);
};