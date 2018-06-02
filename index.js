const prefix = "!"
const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('message', (message) => {
   
    if(message.content == prefix + 'Channel') {
        message.channel.sendMessage('https://www.youtube.com/channel/UChXNvQj5mw-vJmC_Lv3f10Q');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'SecondChannel') {
        message.channel.sendMessage('https://www.youtube.com/channel/UCbjZGpSgIMbfdw5OXPzJvbQ');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'Cmds') {
        message.channel.sendMessage('```Channel``` ```SecondChannel``` ```Prefix.```');
    }
});

bot.on('message', (message) => {
   
    if(message.content == 'Prefix') {
        message.channel.sendMessage('The current prefix is: !');
    }
});

bot.on('message', (message) => {
   
    if(message.content == prefix + 'Gaybomb') {
        message.channel.sendMessage('https://cdn.discordapp.com/attachments/413304257232633856/415435880271052803/30.PNG');
    }
});

bot.login(process.env.BOT_TOKEN);
// yeet it up B
