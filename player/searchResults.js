module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: `Aqui los resultados de ${query}` },
            footer: { text: 'Este bot es de lobo' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};