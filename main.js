const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('message', async message => {
    let prefix = config.prefix;

    if (message.content.startsWith ("!андрей соси")) {
        message.channel.send ("подожди", {files: ["./xyita.png"]});
    }

    if (message.content.startsWith ("!справедливо")) {
        message.channel.send ("подожди", {files: ["./spravedlivo.png"]});
    }
    
    if (message.content.startsWith ("!Справедливо")) {
        message.channel.send ("подожди", {files: ["./spravedlivo.png"]});
    }

    if (message.content.startsWith ("!Андрей соси")) {
        message.channel.send ("подожди", {files: ["./xyita.png"]});
    }

    if (message.content.startsWith ("!Андрей иди нахуй")) {
        message.channel.send ("подожди", {files: ["./naxyi.png"]});
    }

    if (message.content.startsWith ("!андрей иди нахуй")) {
        message.channel.send ("подожди", {files: ["./naxyi.png"]});
    }
bot.login(config.token);

});

bot.login(config.token);
bot.on('ready', () => {
    console.log(`${bot.user.username} online`);
    bot.user.setPresence({status: 'dnd', game:{name: 'test', type: 0}});

});