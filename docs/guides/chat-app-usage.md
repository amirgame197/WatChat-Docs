---
id: chat-app-usage
title: Chat App Usage
sidebar_label: Chat App Usage
sidebar_position: 4
---

![](/vid/replying-to-message.webm)

## Sending & replying messages

If you're using your phone, you can just <u>swipe the message</u> left or right to start replying.<br />
On desktop systems, you can <u>double click</u> the message instead.

![](/img/reply-to-message-image.png)

Or you can right click *(click - in phone)* and select the first option.

## Message options

And once you open the message options, you'll see several other buttons:

![](/img/message-options-image.png)

### ❤️ React
---

You can add an *infinite* amount of reactions to a message, which can be an Emoji or a custom sentence:

![](/img/reactions-panels-image.png)


#### **➕ Custom reactions**

There are **more than 150** reactions available in the panel.

But if you can't find the one you're looking for, you can just type the reaction in the `Custom Reaction` section and press `Enter`!

### 📋 Copy Text
---

Simply copy the message.

The copied text keeps Markdown as the original *raw* format, which differs from a visible Markdown message.

### 📍 Un/Pin
---

**Everyone can pin or unpin a message**. Since there is no account creation, there can't be any permission settings / administrators.

A pinned message will remain forever in the `📌 Pinned Messages` modal.

### 💾 Download *(Media)*
---

This button initiates a download for the message's media.

This includes:
1. Images
2. Videos
3. Audios *(music & voice)*
4. Files

:::caution
Files sent by users can be **malicious** or potentially unsafe. Do not execute random / sketchy programs sent by untrusted users.
:::

### ®️ Add to Recent *(Media)*
---

![](/img/recent-media-panel.png)

Your `®️ Recent Media` panel contains your latest GIFs and stickers. You can quickly send them back using this panel.

You can also remove, add and re-arrange your saved media.

### ✏️ Edit *(Self)*
---

Simply edits your messages *(only text)*.

:::note
This action does not modify an already sent push notification.
:::

### 🗑️ Delete *(Self)*
---

Simply prompts you to delete your message.

:::note
This action does not remove an already sent push notification.
:::

### 👁️ Views *(Self)*
---

![](/img/message-views-image.png)

#### *Whenever your message gets a two-tick indicator (![](/img/double-tick.png)), you can open this panel to find out who saw your message.*

Some users might be `Unknown` due to lack of recent messages, or being offline for a long time.

## Users list

There are several ways to check the users in your room.

The server does not store any kind of `Members` list for rooms, therefore there is no consistent way of *subscribing* to a room.

![](/img/recent-users-image.png)

For example, you can type `@` in chat to bring the list of `Recent Users` up. You can click on any user to start mentioning them.

Other than that, `👥 Online users` panel can show you the list of currently online users, with their current video time (if any) visible.<br />
This can be useful if you want to check if everyone's video states are in sync.

## Finding messages

When the room's messages count up to a massive amount, you might need to somehow find the older messages and 

### 🔎 Search chats
---

![](/img/search-panel-image.png)

In this panel, you can type your query and press `Enter`.

The search's results are limited to 200 messages.

### 📌 Pinned messages
---

![](/img/pinned-messages-image.png)

Pinned messages are visible in this panel.

You can direcly unpin a message by clicking the `📍` icon on top of the message.

## Voice chat

You can watch and talk at the same time, chatting is not the only option.

The voice chat uses a **browser native** communication method called `WebRTC`.

![](/img/voice-chat-image.png)

:::note
This is a <u>Peer-to-Peer</u> realtime communication system that connects clients to each other, which leaks your IP address to everyone.

To protect your privacy, your connection will be tunneled through the server, and then it reaches other clients.

That way, each participant will only see the server's IP address instead of a client's.
:::

## Blocking users

![](/img/blocking-user-image.png)

When you block a user, all messages from a user will be hidden, and you'll no longer see a message from that specific user.

You will also not receive <u>states</u> and <u>reactions</u> from a blocked user.

## Chat settings

![](/img/room-options.png)

This section allows you to modify the app's internal quality settings.

:::note
Some old devices might get laggy, or sometimes frozen, when the application is in intense load.

While WatChat has advanced optimization techniques, the sole un-optimized identity of web programming prevents most `Web Apps` to even compete with platform native ones.
:::

You can toggle all of the website's <u>*Liquid* effects</u>, <u>Mutation observers</u>, <u>Pretty emojis</u> (microsoft fluent flat) and <u>Animations</u>.

:::caution
You can also clear the app's caches. There are two types of caches:
1. Dynamic: Website's pages and internal files, saved locally to increase loading speed.
2. Static: Media sent by users and some local files.

Deleting the `Dynamic` cache is always okay, and is preferred if you're experiencing bugs.

But be careful, clearing `Static` cache will remove all locally downloaded media (which frees some storage).<br />
This does not delete any of your messages, and the media can be downloaded again if needed.
:::