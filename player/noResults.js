module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - No resultados encontrado en youtube de ${query} !`);
};