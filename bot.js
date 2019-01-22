const Discord = require('discord.js');
const client = new Discord.Client();
const bot = require('discord.js-musicbot-addon');//Elmusaui_GK + Narox
bot.start(client, {//Elmusaui_GK + Narox
 youtubeKey: "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8", //Elmusaui_GK + Narox
 musichelp : "*help", //Elmusaui_GK + Narox
 botPrefix : "*", //Elmusaui_GK + Narox
 anyoneCanSkip: true, // اي احد يقدر يسوي سكيب : true // ما حد يقدر يسوي سكيب الا الي عنده امر السكيب : false 
 bigPicture : true, //Elmusaui_GK + Narox
 anyoneCanAdjust : true, //حد يقدر يغير الصوت اذا خليته true // ما حد يقدر يغير الصوت الا الي عندهم ادمينيستراتور : false 
});//Elmusaui_GK + Narox




client.login(procces.env.BOT_TOKEN);
