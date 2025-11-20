import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Bot töötab: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "!tere") {
    message.reply("Tere! 👋");
  }
});

client.login(process.env.TOKEN);

