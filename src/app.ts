// Import
import tmi from 'tmi.js'

// DOTENV
require('dotenv').config()

// Config client
const client: any = new tmi.Client({
    option: {
        debug: <Boolean>true
    },
    connection: {
        reconnect: <Boolean>true,
        secure: <Boolean>true
    },
    identity: {
        username: <string>`hbdwbot`,
        password: <string>process.env.OAUTH
    },
    channels: [
        <string>`hilfebeiderwebsite`
    ]
})

// Check connection
client.connect().catch(console.error)

// Check messages
client.on(`message`, (channel: any, tags: any, message: any, self: any) => {

    // Send mesage
    if (message.toLowerCase() === `!kontakt`) {
        client.say(`hilfebeiderwebsite`, `Hallo ${tags.username}, wenn du uns kontaktieren möchtest, dann sende eine Email an info@hilfebeiderwebsite.de!`)
    }

})

// Send welcome message
client.on(`join`, (channel: any, username: any, self: any) => {

    // Send message
    setTimeout(() => {
        client.say(`hilfebeiderwebsite`, `Herzlich Willkommen ${username}, ich wünsche dir viel Spaß in meinem Stream.`)
    }, 2000)

})