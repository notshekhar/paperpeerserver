//peer server
const { PeerServer } = require("peer")
require("dotenv").config()

const peerserver = PeerServer({
    port: process.env.PORT || 3001,
    path: "/",
    config: {
        iceServers: [
            { url: "stun:stun.l.google.com:19302" },
            { url: "stun:stun1.l.google.com:19302" },
            { url: "stun:stun2.l.google.com:19302" },
            { url: "stun:stun3.l.google.com:19302" },
            { url: "stun:stun4.l.google.com:19302" },
            {
                url: "turn:numb.viagenie.ca",
                credential: "muazkh",
                username: "webrtc@live.com",
            },
        ],
    },
})
peerserver.on("connection", (client) => {
    console.log(`Connection ${client.id}`)
})
peerserver.on("disconnect", (client) => {
    console.log(`Disconnected ${client.id}`)
})
