"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const tmi_js_1 = __importDefault(require("tmi.js"));
// DOTENV
require('dotenv').config();
// Config client
const client = new tmi_js_1.default.Client({
    option: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: `hbdwbot`,
        password: process.env.OAUTH
    },
    channels: [
        `hilfebeiderwebsite`
    ]
});
// Check connection
client.connect().catch(console.error);
// Check messages
client.on(`message`, (channel, tags, message, self) => {
    // Send mesage
    if (message.toLowerCase() === `!kontakt`) {
        client.say(`hilfebeiderwebsite`, `Hallo ${tags.username}, wenn du uns kontaktieren möchtest, dann sende eine Email an info@hilfebeiderwebsite.de!`);
    }
});
// Send welcome message
client.on(`join`, (channel, username, self) => {
    // Send message
    setTimeout(() => {
        client.say(`hilfebeiderwebsite`, `Herzlich Willkommen ${username}, ich wünsche dir viel Spaß in meinem Stream.`);
    }, 2000);
});
