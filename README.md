# Startpage

![GitHub License](https://img.shields.io/github/license/imjah/startpage?style=flat-square&logo=gnu&label=License&labelColor=282828&color=689d6a)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/imjah/startpage/deploy.yml?style=flat-square&logo=github&label=Deploy&labelColor=282828&color=689d6a)
![GitHub last commit](https://img.shields.io/github/last-commit/imjah/startpage?style=flat-square&label=Last%20commit&labelColor=282828&color=689d6a)

![Screenshot](.github/screenshot.webp)

A [startpage](https://reddit.com/r/startpages/) with lightweight and
privacy-friendly YouTube feed designed for flat gruvbox themed window managers.

**The project is currently in development. You can experience missing features.**

# Features

- YouTube data from [Piped API](https://github.com/TeamPiped/Piped)
- Support for channels and playlists
- No need to install self-hosted proxy services

# Roadmap

- [x] Youtube channel support
- [x] Youtube playlist support
- [x] Feed
- [x] Feed cache
- [x] Feed fetch indicator
- [x] Feed filter
- [x] Feed sync button
- [x] Feed editor
- [x] Feed add item
- [ ] Feed lazyloading
- [x] Search bar
- [ ] Search bar indicator
- [x] Search bar suggestions
- [ ] Channel editor page
- [ ] Bookmarks
- [ ] Bookmarks editor
- [x] Bookmarks add item
- [x] Settings
- [x] Settings editor
- [ ] Settings import/export
- [x] Offline mode
- [ ] Keyboard shortcuts
- [ ] Encrypted server synchronization
- [x] Not Found page

# Install

Use Startpage on your local machine.

#### Docker

```sh
# build
docker build -t startpage .

# run
docker run -dp 80:4173 startpage:latest
```

# Development

#### Setup

```sh
npm install
```

#### Hot reload

```sh
npm run dev
```

# Open videos in app

You can configure Startpage to open videos in a desktop app like `mpv` via
[custom protocol](https://kb.mozillazine.org/Register_protocol).

1. In `about:config` create `boolean` variable
`network.protocol-handler.expose.mpv` with `false` value

2. Create launcher

```sh
#!/bin/bash

mpv "${1/mpv:/}"
```

3. In [settings](https://imjah.github.io/startpage/settings) enable
`Open videos in app`

4. Click any link and select launcher from step 2
