---
id: sections-correlation
title: ارتباط بخش ها
sidebar_label: ارتباط بخش ها
sidebar_position: 3
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
  }
}}%%

flowchart TD

    subgraph Client_A["کلاینت اول - هر دو بخش"]
        direction TB

        Container_A(["کانتینر"])

        Chat_A(["💬 آیفریم چت"])
        Video_A(["🎥 آیفریم ویدیو"])

        Container_A --> Chat_A
        Container_A --> Video_A
    end

    subgraph Client_B["کلاینت دوم - فقط چت"]
        Chat_B(["💬 آیفریم چت"])
    end

    subgraph Client_C["کلاینت سوم - تب های جدا"]
        Chat_C(["💬 تب چت"])
        Video_C(["🎥 تب ویدیو"])
    end

    Server(["سرور سوکت / ایونت"])

    Chat_A <-->|"ایونت های چت"| Server
    Video_A <-->|"وضعیت ویدیو + ایونت ها"| Server

    Chat_B <-->|"ایونت های چت"| Server

    Chat_C <-->|"ایونت های چت"| Server
    Video_C <-->|"وضعیت ویدیو + ایونت ها"| Server

    Note1(["کلاینت دوم سینک ها و ایونت های وضعیت ویدیو را دریافت نمی کند."])
    Note2(["وضعیت سینک سایر کلاینت ها تحت تاثیر کلاینت دوم قرار نمی گیرد."])

    Server -.-> Note1
    Server -.-> Note2

    classDef chat fill:#172554,stroke:#3b82f6,color:#dbeafe,stroke-width:2px
    classDef video fill:#2e1065,stroke:#8b5cf6,color:#ede9fe,stroke-width:2px
    classDef server fill:#052e2b,stroke:#14b8a6,color:#ccfbf1,stroke-width:2px
    classDef container fill:#1e293b,stroke:#64748b,color:#f8fafc,stroke-width:2px
    classDef note fill:#422006,stroke:#f59e0b,color:#fef3c7,stroke-width:1px

    class Chat_A,Chat_B,Chat_C chat
    class Video_A,Video_C video
    class Server server
    class Container_A container
    class Note1,Note2 note
```

### تصویر بالا مجموعه تعاملات پایه بین بخش های `چت` و `ویدیو` را، برای هر کلاینت نشان می دهد.

:::caution
در حالت آیفریم (هر دو بخش در یک صفحه)، بخش ها با `SendMessage` با یکدیگر ارتباط برقرار می کنند.

اگر بخش `ویدیو`، یک بخش `چت` کنارش نباشد، ممکن است برخی از قابلیت های داخلی دچار مشکل شوند.
:::