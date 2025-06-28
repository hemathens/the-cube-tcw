# 🧊 THE CUBE

A beautiful, interactive 3D cube-solving simulation game built with JavaScript and Three.js. Designed to mimic the logic and experience of a real Rubik’s Cube, with sleek animations, themes, performance tracking, and customization options.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00bfff?style=for-the-badge&logo=vercel)](https://the-cube-tcw.vercel.app)
[![GitHub](https://img.shields.io/github/repo-size/hemathens/the-cube-tcw?style=for-the-badge&logo=github)](https://github.com/hemathens/the-cube-tcw)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/hem-patels-projects/the-cube-tcw)

---

## 🎮 Gameplay Overview

> Double-tap to start. Scramble, rotate, and solve. Your best solve time is recorded. Train like a speedcuber 🏆

**Core UI elements:**

- **🧩 Cube Renderer** – Dynamic 3D cube in `ui__game`
- **🕹 Controls** – Scramble, rotate, and reset
- **🎨 Theme Panel** – Custom hue, saturation, lightness and color schemes
- **📊 Stats Tracker** – Tracks solve count, best/worst times, average of 5/12/25
- **⚙️ Preferences** – Select cube size, flip type, scramble length, and FOV
- **🏆 Completion Panel** – Best time notification, timer, and trophy icon

---

## ✨ Features

- 🧊 Realistic Rubik’s Cube feel with 2x2x2 to 5x5x5 sizes
- 🎨 Customizable themes (Erno, Dust, Rain, etc.)
- 🎥 Camera perspective modes: Orthographic & Perspective
- ⏱ Smooth solving timer with stats history
- 📈 Auto‑calculated averages of recent solves (Ao5, Ao12, Ao25)
- 💾 Best performance tracking and local storage memory
- 🌈 Color hue/saturation/lightness editor
- 🧠 Intuitive double-click to start, one-click reset
- 💻 Fully responsive UI

---

## 🖼️ Screenshots

<!-- Uncomment and insert image links if you have them -->
<!--
### Cube in Play
![Cube Gameplay](screenshots/cube-play.png)

### Customization Panel
![Preferences](screenshots/prefs-theme.png)
-->

---

## 🚀 Live Demo

👉 [Play Now on Vercel](https://the-cube-tcw.vercel.app)

---

## 📁 Project Structure

```bash
the-cube-tcw/
├── dist/                  # Production-ready static files
│   ├── index.html
│   ├── script.js
│   ├── style.css
├── src/                   # Source files for development
│   ├── index.html
│   ├── script.js
│   ├── style.sass
├── .gitignore
├── vercel.json            # (Optional) For custom deploy config
└── README.md
```
# 🛠 Setup & Development

Clone and run locally:

``` bash

git clone https://github.com/hemathens/the-cube-tcw.git
cd the-cube-tcw
# Open index.html in dist/ in your browser
```
To edit or develop:

Work in the src/ folder

Compile style.sass → style.css manually or via build tools

Copy changes to dist/ before pushing to deploy

# 🌐 Deployment

This project is auto-deployed via Vercel:

```bash

npx vercel --prod
```
Set output directory as dist
Linked to GitHub for CI/CD

# 👨‍💻 Author

Hem Patel

🔗 GitHub | Kaggle | LinkedIn

# 📜 License

This project is licensed under the MIT License. See LICENSE for details.
```yaml

---

Let me know if you want:

- A version with screenshots
- Sass-to-CSS build setup included
- Separate sections for mobile UX

Or I can auto-insert this into your repo and commit it for you!
```
