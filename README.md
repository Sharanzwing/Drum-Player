# 🥁 Virtual Drum Player

An interactive, responsive virtual drum kit built with modern HTML5, CSS3 (Glassmorphism + Neon stage styling), and JavaScript. Play drum sounds in real time using your keyboard, mouse, or touch screen.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- **High-Performance Audio Engine**: Audio elements are preloaded and cloned on hit to enable rapid drum rolls and overlapping playback without audio clipping or latency.
- **Glassmorphic Stage Aesthetics**: Dark stage theme with ambient glow orbs and distinct neon accent colors for each drum pad.
- **Dynamic Visual Feedback**: Instant pad push animations, neon visualizer pulses, and instrument glows.
- **Multi-Input Controls**:
  - **Keyboard Hotkeys**: Play using keys W, A, S, D, J, K, and L (case-insensitive, works with Caps Lock on or off).
  - **Mouse / Touch**: Full touch screen support with zero delay for mobile devices.
- **Master Volume Control**: Adjust the kit output volume in real-time.
- **Fully Responsive**: Adapts seamlessly to smartphones, tablets, and widescreen displays.

---

## 🎹 Keyboard Controls & Instrument Map

| Key | Instrument | Description |
| :---: | :--- | :--- |
| <kbd>W</kbd> | **Tom 1** | High rack tom |
| <kbd>A</kbd> | **Crash** | Bright accent cymbal |
| <kbd>S</kbd> | **Kick** | Deep punchy bass drum |
| <kbd>D</kbd> | **Snare** | Crisp snare crack |
| <kbd>J</kbd> | **Tom 2** | Mid-high tom |
| <kbd>K</kbd> | **Tom 3** | Mid-low tom |
| <kbd>L</kbd> | **Tom 4** | Low floor tom |

---

## 🚀 How to Run Locally

You don't need to install any dependencies or run a build step!

1. Clone or download the repository.
2. Open index.html in any modern web browser (Google Chrome, Firefox, Edge, Safari, Brave).
3. Start hitting keys or tapping pads to create rhythms!

---

## 📦 How to Upload / Publish with GitHub Desktop

Follow these simple steps to upload this project to GitHub using **GitHub Desktop**:

1. **Open GitHub Desktop**.
2. Click on **File** > **Add Local Repository...** (or press <kbd>Ctrl</kbd> + <kbd>O</kbd>).
3. Click **Choose...** and select this project folder:
   `
   c:\Users\Sharan Raj\Downloads\Drum Player
   `
4. Click **Add Repository**.
5. You'll see the repository is already initialized with all files cleanly committed.
6. Click the **Publish repository** button at the top toolbar.
7. Choose whether you want the repository to be **Public** or **Private**, and click **Publish repository**.
8. Your project is now live on GitHub! 🎉

> **Tip:** You can enable **GitHub Pages** under repository **Settings > Pages > Branch: main** to host and play your drum kit online for free!

---

## 📂 Project Structure

`
Drum Player/
├── .gitignore          # Git ignore rules for OS and temporary files
├── README.md           # Documentation and setup instructions
├── index.html          # Main application markup
├── styles.css          # Glassmorphic UI styles & responsive animations
├── index.js            # Audio engine and event handling
├── images/             # Drum pad instrument artwork
│   ├── crash.png
│   ├── kick.png
│   ├── snare.png
│   ├── tom1.png
│   ├── tom2.png
│   ├── tom3.png
│   └── tom4.png
└── sounds/             # High quality drum audio samples (.mp3)
    ├── crash.mp3
    ├── kick-bass.mp3
    ├── snare.mp3
    ├── tom-1.mp3
    ├── tom-2.mp3
    ├── tom-3.mp3
    └── tom-4.mp3
`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
