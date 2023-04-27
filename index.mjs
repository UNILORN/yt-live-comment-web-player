import { LiveChat } from 'youtube-chat';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//
// ここにLiveIDをいれてください。
//
const liveChat = new LiveChat({liveId: ""})
    
liveChat.on("start", async (liveId) => {
    console.log(liveId)
})

liveChat.on("end", (reason) => {
    console.log(reason)
})

liveChat.on("error", (err) => {
    console.log(err)
})

wss.on('connection',async function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('something');

    liveChat.on("chat", async (chatItem) => {
        console.log(chatItem)
        ws.send(JSON.stringify(chatItem));
        
    })

});
await liveChat.start()
