//peer server
const { PeerServer } = require("peer")

const peerserver = PeerServer({
    port: 3001,
    path: "/",
})
peerserver.on("connection", (client) => {
    console.log(`Connection ${client.id}`)
})
peerserver.on("disconnect", (client) => {
    console.log(`Disconnected ${client.id}`)
})
