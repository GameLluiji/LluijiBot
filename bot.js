const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'l!') {
    	message.reply('Ummm...i dnt have any commands. I'm askin kyo if he can give me Nadeko's
                     instead of me takin from Nekobot which idk how.);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
