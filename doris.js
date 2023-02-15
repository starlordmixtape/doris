require("dotenv").config();

const MESSAGES = {
  message01: "Back in my day, things were better.",
  message02: "Kids these days don't have any respect for their elders.",
  message03: "In my time, we didn't have all these fancy gadgets.",
  message04: "Why do people always have to be in such a hurry?",
  message05: "I don't have time for this nonsense.",
  message06: "You young folks just don't understand.",
  message07:
    "When I was your age, I had to walk five miles to school in the snow.",
  message08: "I'm too old for this.",
  message09: "Get off my lawn!",
};

const { Client, IntentsBitField } = require("discord.js");

const doris = new Client({
  // https://discord.com/developers/docs/topics/gateway#list-of-intents
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

doris.on("ready", (dorisReady) => {
  console.log(`${dorisReady.user.tag} is onlne`);
});

doris.on("messageCreate", (theMessage) => {
  if (theMessage.author.bot) {
    return;
  }
  console.log(`${theMessage.author.username} said ${theMessage.content}`);
  var keys = Object.keys(MESSAGES);
  theMessage.reply(MESSAGES[keys[(keys.length * Math.random()) << 0]]);
});

doris.login(process.env.TOKEN);
