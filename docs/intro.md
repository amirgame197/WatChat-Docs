---
id: intro
title: Introduction
sidebar_position: 1
---

[**WatChat**](https://watchat.c0s.me/) is a highly secure, fully anonymous, account-less `WatchParty` that is not solely used for movie nights.

The app comes with a translucent-themed video player with many features built entirely on the web, and a high grade cross-platform chat system.

The two parts are connected together and let you chat while watching movies, sync the video player state across users with a precise time algorithm, and use all features of both sections at the same time.

Even if you're not a `Movie watcher` kind of person, you can take advantage of the chat system, as it provides a ton of useful features for a `Chat app` that requires zero installation and is available for almost all operating systems.

Here's a some of WatChat's features:

## Chat App

<details>
<summary><strong>Features</strong></summary>

### Reactions

Aside from sending messages or replying, there are reactions too! You can give an unlimited amount of reactions to a message. The reaction is mainly an emoji, but you can send a custom text as a reaction too.

### GIFs and stickers

Once you send an image or a muted video, they get saved in your `Recent media` tab. After that, you can send them back quickly at any time.

### Voice recorder

Simply press the white microphone icon and start the recording. Once you're done speaking, check the recorded voice and send it!

### Voice chat

A sort of experimental implementation of a voice chat, with a maximum of <u>15 participants</u> and basic call functionalities.

### Graphic control settings

Some of the app's quality and internal controllers might prevent an old device from having a smooth experience. These settings are provided to disable them and get the app as fast as possible.

### User mentions & push notifications

Users can mention each other to receive a push notification *(if enabled)*. This helps when you want a user to get into the app while they're away.

### Search & pin messages

As far as it gets. You won't lose a message with these two anymore.

### Blocking users

Sometimes, a user is just trying to make you rage. You can block anyone to stop receiving any kind of data from them, like they were never there in the first place. Unblocking the user brings their presence back.

</details>

## Video Player

<details>
<summary><strong>Features</strong></summary>

### Play videos downloaded to your local device

No upload & no wasted bandwidth. If your video is already in your storage, you can just use that.

### Play video from a direct URL

If you have a direct URL that points to a supported video, you can import it and stream the video as you watch it.

The player is designed to download only the parts that are relevant and not the entire video. This helps save bandwidth way more than you can imagine.

> Note: 
> Video player sources *(local or URL)* are **not synced**. This is intentionally designed that way so each user can load their own version of a video.
>
> For example, one client can load a video with `1080p` quality and another can choose to load the `720p` one. The time and state will be synced no matter the user's loaded video.

### Full `.srt` subtitle support

You can either import an existing subtitle from your device and upload it to the server so it syncs to other clients, or try and extract the currently loaded video's subtitles.

The latter uses an external service called `FFmpeg` that reads the video's metadata and finds its subtitles.

### Live streaming

A user can host a live stream of their screen *(available on desktop only, a limitation of web technology)* or their camera *(back camera is preferred)*.

Anyone can stop the live stream by pressing the reset button.

> **Note:** We recommend you not to abuse this functionality, as it might make the streamer upset.

### Speed controls

And not in a limited way! You can go up to **4x faster** to skip through all the non-sense scenes, or slow the video down to **0.25x** just for fun!

</details>

## Theme editor

There is also a full-on theme editor that lets you change every aspect of the app, such as **colors**, **post effects**, and **background images** for each mode (<u>dark</u> and <u>light</u>).

## Security

**The key point of WatChat is its encryption system.**

The project is built for extremely harsh and sensitive environments where even the server hosting the app is being watched by the government *(or a corporation)*.

To prevent any data leak, WatChat encrypts every single data point for every room, including the room's metadata and its messages, in a way that there would be absolutely nothing visible inside the server files itself.

That level of protection allows the user data to stay hidden even if an authority has full access to the server.

The only way to access data is to directly navigate to a `Public` room.

### Private rooms

Speaking of more encryption, WatChat even allows you to have `Private` rooms with a custom password.

The password is set by the first person who joins the room for the first time, which creates the room and sets its initial data.

With a custom password, a user can get access to the room's data only if they provide the correct password.

### User data

Another privacy concern for major social apps is user data.

WatChat eliminates the entire concept by storing **zero** user data. Your identity preservation is handled by you, not us.

There is no Sign-Up or Login system. You are always fully anonymous, but with a special identity that is always carried by you inside your browser.

## Getting started

**[Click here to open WatChat](https://watchat.c0s.me/)!**

The next step shows you how to get started with everything. The usage flow is extremely easy, you can't miss it out!
