const { Client, Intents } = require('discord.js');
const { MessageEmbed, MessageAttachments } = require('discord.js');

const bot = new Client(
    {
        intents: [
            Intents.FLAGS.GUILDS,
             Intents.FLAGS.GUILD_MESSAGES
        ]
    });
require('dotenv').config()

bot.on('ready', () => {
    console.log('\x1b[40m\x1b[32m' + `Bot is now online as ${bot.user.tag}!`);
    bot.user.setActivity('over the server members', { type: 'WATCHING' });
    console.log("Running status." + '\x1b[0m')
});

bot.on('messageCreate', message => {
    if (message.content === `${process.env.PREFIX}socials`) {

        const tiktokEmbed = new MessageEmbed()
            .setTitle("Here you can find my socials")
            .setURL("https://bycrxhit.xyz/trade_offer.gif")
            .setColor(0x45DDFF)
            .setFooter({ text: 'Chemion Bot', iconURL: bot.user.displayAvatarURL() })
            .addFields(
                { name: "TikTok <:tiktok:995092869570379838>", value: "[Click here](https://www.tiktok.com/@highonchemion)", inline: true },
                      { name: "Donate <:Donate:996005868405538816> ", value: "[Click here](https://www.paypal.com/paypalme/andrewbtn)", inline: true },
                      { name: "Instagram <:instagram:996005869256970282> ", value: "[Click here](https://www.instagram.com/highonchemion/)", inline: true }
            )
            .setTimestamp();

         message.channel.send({ embeds: [tiktokEmbed] });
    }
        else if (message.content === `${process.env.PREFIX}ping`) {
            message.channel.send(`🏓 Pong  ${Date.now() - message.createdTimestamp}ms.`);
    }
        else if (message.content === '<@979414678402895912>') {
            message.channel.send(`My prefix is hc!`);
    }
        else if (message.content === 'fuck you' ) {
             message.channel.send(`I love you too :smiling_face_with_3_hearts: `);
        }
        else if (message.content === `${process.env.PREFIX}help`) {

            const Help = new MessageEmbed()
                .setTitle("Here is the list of the commands")
                .setColor(0x45DDFF)
                .setFooter({ text: 'Chemion Bot', iconURL: bot.user.displayAvatarURL() })
                .addFields(
                    { name: "ping", value: "shows you the ping of the bot", inline: true },
                          { name: "socials", value: "You can find HighOnChemion`s socials ", inline: true },
                          { name: "soon", value: "soon", inline: true }
                )
                .setTimestamp();
    
             message.channel.send({ embeds: [Help] });
        
        }

        else if (message.content === `${process.env.PREFIX}server`) {
        const guild = interaction.guild;
            message.channel.send(`Server name: ${guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        } 
         
});


bot.login(process.env.TOKEN);