## Youtube Live comment -> Playing Youtube Video

### 構成図

```
     ┌──────────────┐
     │ Youtube Live │
     └──────┬───────┘
            │
            │
  ┌─────────▼──────────┐
  │                    │
  │ Comment Subscriber │
  │                    │
  └─────────┬──────────┘
            │
  Websocket │ localhost:8080
  ┌─────────▼──────────┐
  │   Player Frontend  │
  │   Google Chrome    │
  │                    │
  │  (Youtube Iframe)  │
  └────────────────────┘

```

### Initialize 

```
npm i
```

### Commecnt Subscriber

LiveIDを記入

```js
//
// ここにLiveIDをいれてください。
//
const liveChat = new LiveChat({liveId: ""})
```

```
node ./index.mjs
```


### Player Frontend

Webserberを起動する必要があります

```
npm i -g http-server -p 8000
```

http://localhost:8000


起動時に初回表示する動画IDを記入

```js
videoId: '',　// 起動時に表示する動画

```


コメントの情報をWebsocketで取得する。内容の振り分けなどはこのあたりで記入しても良いし、サーバ側で送っている所で分岐しても良い
```js

var exampleSocket = new WebSocket("ws://localhost:8080", "protocolOne");
exampleSocket.onmessage =  (event) => {
    console.log(event.data);
    player.clearVideo()
    player.loadVideoById({
        videoId: "", // コメントの内容からVideoIDを挿入
        startSeconds: 0,
    })
}
```