module.exports = {
	name: 'help',
	description: 'lista de todos mis comandos e info.',
	aliases: ['h', 'ayuda'],
	usage: '[Nombre del comando]',
	execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const others = message.client.commands.filter(x => x.category == 'Others').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Panel de ayuda!' },
                    footer: { text: 'Este bot es un proyecto personal' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Others', value: others },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `To use filters, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Panel de ayuda' },
                    footer: { text: 'Este bot es un proyecto personal' },
                    fields: [
                        { name: 'Nombre', value: command.name, inline: true },
                        { name: 'Categoria', value: command.category, inline: true },
                        { name: 'Alias', value: command.aliases.length < 1 ? 'None' : command.aliases.join('\n'), inline: true },
                        { name: 'Uso', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};
