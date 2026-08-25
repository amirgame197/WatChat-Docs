---
id: intro
title: Introduction
sidebar_position: 1
---

[WatChat](https://watchat.c0s.me/) is a highly secure, fully anonymous, account-less "watchparty" that is not solely used for movie nights.

The app comes with a translucent-themed video player with many features built entirely on web, and a high grade cross platform chat system.

The two parts are connected together and lets you chat while watching movies, sync the video player state across users with a battle tested time algorithm and use all features of both sections at the same time.

Even if you're not a "movie watcher" kind of person, you can take advantage of the chat system as it provides a ton of useful features for a "chat app" that requires zero installation and is available for almost all operating systems.

Here's a limited amount of WatChat's features:

## Chat App

### Reactions

Aside from sending messages or replying, there are reactions too! You can give an unlimited amount of reactions to a message. The reaction is mainly an emoji but you can send a custom text as a reaction too.

### GIF and stickers

Once you send an image or a mute video, they get saved in your "recent media" tab. After that, you send them back quickly any time.

### Voice recorder

Simply press the white microphone icon and start the recording. Once you're done speaking, check the recorded voice and send it!

### Voice chat

A sort of experimental implementation of a voice chat, with max 15 participants and basic call functionalities.

### Graphic control settings

Some of the app's quality and internal controllers might prevent an old device to have a smooth experience. These settings are provided to disable them and get the app as fast as possible.

### User mentions & push notification

Users can mention each other to receive a push notification (If enabled). This helps for when you want a user to get in the app while they're gone.

### Search & pin messages

As far as it gets. You won't lose a message with these two anymore.

### Blocking users

Sometimes, a user is just trying to make you rage. You can block anyone to stop receiving any kind of data from them, like they were never there at the first place. Unblocking the user brings their presence back.

## Video Player

### Play videos downloaded to your local device

No upload & no wasted bandwidth. If your video is already in your storage, you can just use that.

### Play video from a direct URL

By assuming you have a direct URL that shows a supported video, you can import it and stream the video as you watch it.

The player is designed to download only the parts that are relevant and not the entire video. This helps save bandwidth way more than you can imagine.

#### Video player sources (Local or URL) are not synced. This is intentionally designed that way so each user can load their own version of a video.<br>For example, one client can load up a video with 1080p quality and another can choose to load the 720p one. The time and state will be synced no matter the user's loaded video.

### Full `.srt` subtitle support

You can either import an existing subtitle from your device and upload it to the server so it syncs to other clients, or try and extract the currently loaded video's subtitles.

The latter uses an external service called `FFmpeg` that would read the video's metadata and finds its subtitles.

### Live streaming

A user can host a live stream of their screen (Available on desktop only, a limitation of web technology) or their camera (Back camera is preferred).

Anyone can stop the live stream by pressing the reset button (We recommend not abusing this functionality as it might make the streamer upset).

### Speed controls

And not in a limited way, you can go up to 4x faster to skip through all the non-sense scenes, or slow the video down to 0.25x just for fun!

## Theme editor

There is also a full-on theme editor that lets you change every aspect of the app, such as colors, post effects and background images for each mode (Dark and light).

## Security

The key point of WatChat is its encryption system.

The project is built for extremely harsh and sensitive environments where even the server hosting the app is being watched by the goverment (Or a corporation).

To prevent any data leak, WatChat encryptes every single data point for every room (Including even the room's name) and its messages, in a way that there would be absolutely nothing visible inside the server itself.

That level of protection allows the user data to stay hidden even if an authority has full access to the server.

The only way to access data is to directly navigate to a `Public` room.

### Private rooms

Speaking of more encryption, WatChat even allows you to have `Private` rooms which they can have a custom password (Set by the first person who join the room for the first time, which creates it and its initial data).

With a custom password, a user can get access to the room's data only if they provide a correct password.

### User data

Another privacy concern for major social apps is user data.

WatChat eliminates the entire concept by storing zero user data. Your identity preservance is handled by you, not us.

There is no Sign-Up or Login system. You are always fully anonymous but with an special identity which is always carried by you, inside your browser.

## Getting started

**[Click here to open WatChat](https://watchat.c0s.me/)!**

The next step shows you how to get started with everything. The usage flow is extremely easy, you cant miss it out.
