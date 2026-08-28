---
id: video-player-usage
title: Video Player Usage
sidebar_label: Video Player Usage
sidebar_position: 5
---

![](/static/img/video-player-image.png)

## Loading videos
---

![](/static/img/loading-video-image.png)

There are currently two ways to load up a video in the player.

### Loading a local video
---

If you have a video file in your device's storage, you can choose this option and select the video accordingly.

:::important
Some old phones hardware do not natively support `x265` *(HEVC & Nvidia)* codec, therefore the browser cannot decode the video.<br />
This causes the player to freeze in a black screen, and play the video's audio instead.

Unfortunately, there is currently <u>no fix</u> for that. If your device seems to have this problem, you need to load up `x264` *(MPEG)* instead.
:::

### Loading from direct URL
---

If you have a link that directly shows / downloads the video upon opening, you can choose this option and fill in the prompt to try and stream the video online.

Using this method adds a little bit of overhead and might cause minor setbacks on an old device. This is because the network always has to send requests to fetch the URL as a `Partial Response`.

:::note
Some servers do not allow `Partial Response` requests and therefore a video stream cannot happen in the player.

In that case, you'll need to either wait for the whole video to get downloaded, or choose another server that supports that feature.
:::

## Loading subtitles
---

![](/static/img/video-subtitle-image.png)

You can add a subtitle to video, which is automatically converted and fixed through the server.

### Uploading subtitles
---

If you have the `.srt` subtitle file in your device's storage, you can choose that file directly.

### Extracting subtitles
---

If you currently have a video loaded *(streaming & local)*, you can try and extract the embedded subtitles and route them through the server.

- Locally loaded video:
  
  The website tries loading a plugin called `FFmpeg-WASM`, which is a tool that reads your local file and finds its subtitles without uploading it anywhere.

  :::note
  The plugin is basically a `Web Assembly` with **~6MB** size. It will be automatically downloaded and stored in the static cache library for further usage.
  :::

- URL streaming video:
  
  The URL gets sent to the server first. Then, the server downloads *most* of the video to find its container's embedded subtitles section, and tries to extract them.

  This process is more complicated and might fail if the server fails to fetch the URL data. Therefore, your extraction process is visible on chat logs as a system notification.

  :::note
  This feature is rate-limited. If the server is failing to extract the subtitles, consider downloading a subtitle yourself and upload it using the first option.
  :::

## Video controls
---

Some side-gesture controls are available below.

### Resetting video
---

Pressing this button will `Reset` the video state. This includes:
1. Pausing the video
2. Setting video time to `00:00`
3. Removing the subtitle
4. Unloading the video
5. **Stopping a `Live Stream`**

![](/static/img/video-side-controls-image.png)

### Playback speed
---

Sets the playback speed multiplier. This can <u>slow down</u> or <u>speed up</u> the playback.

:::note
Setting a high speed might cause the video to get de-synced due to high amount of time changes between clients.

At the same time, some high quality videos might not exactly get as fast as the desired amount. This is due to the hardware decoding <u>bottleneck</u>.
:::

### Playback volume
---

- Phone:
  
  Swipe from top to bottom, on the left side of the player to quickly change the video's volume.

- Desktop:
  
  Use mouse scroll to change the video's volume.

## Live streaming
---

![](/static/img/streaming-video-image.png)

Starting a `Live Stream` will change everyone's video source to the stream source.

- Camera sharing will start capturing your **Back** camera.

:::important
Unfortunately, phone browsers do not support sharing device's screen, therefore it is not possible to share your screen on phones.
:::

## State sync architecture
---

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "fontFamily": "Inter, sans-serif",
    "fontSize": "15px",
    "primaryColor": "#1e293b",
    "primaryTextColor": "#f8fafc",
    "primaryBorderColor": "#475569",
    "lineColor": "#64748b",
    "secondaryColor": "#172033",
    "tertiaryColor": "#111827",
    "clusterBkg": "#0f172a",
    "clusterBorder": "#334155"
  },
  "themeCSS": ".node rect { rx: 8 !important; ry: 8 !important; }"
}}%%

flowchart TD

    subgraph Clients["Active Video Clients"]
        direction TB

        C1["<b>Client 1</b><br/><br/>Video loaded<br/>Time: 00:40<br/>▶ Playing - x1.0"]

        C2["<b>Client 2</b><br/><br/>Video loaded<br/>Time: 00:35<br/>▶ Playing - x1.0"]

        C3["<b>Client 3</b><br/><br/>Video loaded<br/>Time: 00:38<br/>❚❚ Paused - x1.0"]
    end

    EVENTS["<b>Periodic Video State Events</b><br/><br/>Time<br/>Play / Pause<br/>Playback Speed"]

    subgraph Server["VIDEO SYNC SERVER"]
        direction TB

        RECEIVE["<b>Receive State Events</b><br/><br/>Events arrive periodically from all active video clients"]

        TIME["<b>Calculate Video Time</b><br/><br/>The server uses the <b>lowest</b> time received from all clients<br/><br/><b>Min(00:40, 00:35, 00:38)</b><br/><b>↓</b><br/><b>00:35</b>"]

        PLAY["<b>Update Play / Pause</b><br/><br/>Only changes when a received Play / Pause value differs from the current server state"]

        SPEED["<b>Update Playback Speed</b><br/><br/>Only changes when a received speed differs from the current server speed"]

        STATE["<b>AUTHORITATIVE SERVER STATE</b><br/><br/>Video time - <b>00:35</b><br/>Playback - <b>Playing</b><br/>Speed - <b>x1.0</b>"]
    end

    NORMAL["<b>NORMAL OPERATION</b><br/><br/>The server keeps calculating its authoritative state, but does not force clients to change their state."]

    FORCE["⚡ <b>FORCE SYNC EVENT</b><br/><br/>Explicit request to immediately synchronize every connected client"]

    FORCE_RESULT["<b>FORCE SYNCHRONIZATION</b><br/><br/>Server sends its current state to all connected video clients<br/><br/>Every client immediately appliesthe received video state"]

    INITIAL["➕ <b>NEW CLIENT CONNECTION</b><br/><br/>Client enters the video section with a video loaded"]

    INITIAL_RESULT["<b>INITIAL SYNCHRONIZATION</b><br/><br/>Server sends its current authoritative video state to the newly connected client"]

    C1 --> EVENTS
    C2 --> EVENTS
    C3 --> EVENTS

    EVENTS --> RECEIVE

    RECEIVE --> TIME
    RECEIVE --> PLAY
    RECEIVE --> SPEED

    TIME --> STATE
    PLAY --> STATE
    SPEED --> STATE

    STATE --> NORMAL

    FORCE --> FORCE_RESULT
    STATE -->|"Current server state"| FORCE_RESULT

    INITIAL --> INITIAL_RESULT
    STATE -->|"Current server state"| INITIAL_RESULT

    classDef client fill:#172554,stroke:#3b82f6,color:#dbeafe,stroke-width:2px;
    classDef packet fill:#172033,stroke:#60a5fa,color:#dbeafe,stroke-width:2px;
    classDef process fill:#2e1065,stroke:#8b5cf6,color:#ede9fe,stroke-width:2px;
    classDef state fill:#052e2b,stroke:#14b8a6,color:#ccfbf1,stroke-width:2px;
    classDef normal fill:#1e293b,stroke:#64748b,color:#f8fafc,stroke-width:2px;
    classDef force fill:#422006,stroke:#f59e0b,color:#fef3c7,stroke-width:2px;
    classDef sync fill:#13251e,stroke:#22c55e,color:#bbf7d0,stroke-width:2px;

    class C1,C2,C3 client;
    class EVENTS packet;
    class RECEIVE,TIME,PLAY,SPEED process;
    class STATE state;
    class NORMAL normal;
    class FORCE force;
    class FORCE_RESULT,INITIAL_RESULT sync;

    style Clients fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc;
    style Server fill:#0f172a,stroke:#334155,stroke-width:2px,color:#f8fafc;
```

:::tip
You can compare the `Server Time` *(visible in player's bottom-down)* with your video's time to see if you're behind of forward. If the value differs more than ~5 seconds, you can press the sync button to force all clients to the server time.
:::