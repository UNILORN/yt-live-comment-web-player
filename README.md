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

