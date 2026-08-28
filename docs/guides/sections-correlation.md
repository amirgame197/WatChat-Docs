---
id: sections-correlation
title: Sections Correlation
sidebar_label: Sections Correlation
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

    subgraph Client_A["Client A - Both sections"]
        direction TB

        Container_A(["Container"])

        Chat_A(["💬 Chat iframe"])
        Video_A(["🎥 Video iframe"])

        Container_A --> Chat_A
        Container_A --> Video_A
    end

    subgraph Client_B["Client B - Chat only"]
        Chat_B(["💬 Chat iframe"])
    end

    subgraph Client_C["Client C - Separate tabs"]
        Chat_C(["💬 Chat tab"])
        Video_C(["🎥 Video tab"])
    end

    Server(["Socket / Event Server"])

    Chat_A <-->|"Chat events"| Server
    Video_A <-->|"Video state + events"| Server

    Chat_B <-->|"Chat events"| Server

    Chat_C <-->|"Chat events"| Server
    Video_C <-->|"Video state + events"| Server

    Note1(["Client B does not receive video state syncs/events."])
    Note2(["Other clients sync states are unaffected by Client B."])

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

### The figure above shows the basic interaction set between `Chat` and `Video` sections, for each client.

:::caution
When in iframe mode (both section in one page), the sections communicate with `SendMessage`.

Some functionalities might break when `Video` section is missing a sibling `Chat` section.
:::