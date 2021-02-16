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
                url: "turn:192.158.29.39:3478?transport=udp",
                credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
                username: "28224511:1379330808",
            },
            {
                url: "turn:192.158.29.39:3478?transport=tcp",
                credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
                username: "28224511:1379330808",
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
