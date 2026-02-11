# PrecisionTimer

<p align="center">
  <img src="icon.png" alt="PrecisionTimer Logo" width="128" height="128">
</p>

<h3 align="center">A Modern Cross-Platform Timer Application</h3>

<p align="center">
  PrecisionTimer is a sleek, feature-rich timer application with a Windows-style UI design.
  Built with Electron.js for seamless cross-platform time management.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#development">Development</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a>
</p>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Build & Deployment](#build--deployment)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 📖 About

PrecisionTimer is a modern desktop timer application designed for professionals and casual users alike. With its clean Windows-inspired interface and robust feature set, it provides an intuitive way to manage time across all major operating systems.

The application focuses on precision timing with visual feedback, customizable presets, and a distraction-free experience that adapts to your workflow.

## ✨ Features

### Core Functionality
- **Versatile Timing Modes**
  - Countdown timers with preset management
  - Stopwatch functionality
  - Overtime detection with visual alerts
  - Interval timing capabilities

### User Interface
- **Modern Windows-Style Design**
  - Clean, minimalist interface
  - Dark/light theme toggle
  - Responsive layout that adapts to window size
  - Smooth animations and transitions

### Preset Management
- **Smart Timer Presets**
  - Save frequently used time durations
  - Quick-access preset panel
  - Edit and delete existing presets
  - Automatic labeling (5 min, 10 min, 1 hr, etc.)

### Visual Feedback
- **Real-time Display**
  - Large, easy-to-read time display
  - Overtime warning with animated banner
  - Screen shake effect during overtime
  - Smooth color transitions

### Advanced Features
- **Keyboard Shortcuts** for power users
- **Fullscreen mode** for distraction-free timing
- **Local storage** persistence for presets
- **Ripple click effects** for interactive feedback
- **Responsive design** that works on various screen sizes

## 🖼️ Screenshots

*Coming soon - Application interface screenshots*

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** for cloning the repository

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/OyeAbiodun/PrecisionTimer.git
cd PrecisionTimer
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the application:**
```bash
npm start
```

### System Requirements

**Windows:** Windows 7 or later
**macOS:** macOS 10.10 or later
**Linux:** Ubuntu 16.04+, Fedora 24+, or compatible distributions

## 🎯 Usage

### Basic Operations

1. **Setting a Timer**
   - Click the large time display or press `E`
   - Enter hours, minutes, and seconds
   - Click "Save" or press Enter

2. **Starting/Stopping**
   - Click the play/pause button or press Spacebar
   - Timer will count down to zero

3. **Managing Presets**
   - Open sidebar with hamburger menu or press `M`
   - Click any preset to load it
   - Use + button to create new presets

### Advanced Usage

- **Overtime Mode:** When timer reaches zero, it automatically switches to overtime counting up
- **Theme Toggle:** Click the sun/moon icon or use the theme toggle button
- **Fullscreen:** Press `F` to enter fullscreen mode
- **Reset:** Press `R` or click the reset button to clear the timer

## 💻 Development

### Project Structure
```
PrecisionTimer/
├── index.html          # Main application interface
├── styles.css          # Application styling
├── script.js           # Core application logic
├── main.js             # Electron main process
├── package.json        # Project configuration
├── README.md           # Documentation
└── assets/             # Icons and images
```

### Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests (if available)
npm test

# Lint code
npm run lint
```

### Development Setup

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Commit your changes:** `git commit -m 'Add amazing feature'`
5. **Push to the branch:** `git push origin feature/amazing-feature`
6. **Open a pull request**

## 🛠️ Tech Stack

### Core Technologies
- **[Electron.js](https://www.electronjs.org/)** - Cross-platform desktop application framework
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS variables and animations
- **Vanilla JavaScript** - ES6+ features for core functionality

### Key Libraries & Tools
- **Node.js** - Runtime environment
- **npm** - Package management
- **electron-builder** - Application packaging and distribution
- **Electron Forge** - Development toolchain (optional)

### Development Tools
- **Visual Studio Code** - Recommended IDE
- **Git** - Version control
- **GitHub** - Code hosting and CI/CD

## 🏗️ Architecture

### Application Layers

1. **Presentation Layer** (`index.html`, `styles.css`)
   - User interface components
   - Styling and theming
   - Responsive design implementation

2. **Logic Layer** (`script.js`)
   - Timer management algorithms
   - State handling and persistence
   - Event processing and user interactions

3. **Platform Layer** (`main.js`)
   - Electron main process
   - Window management
   - System integration
   - File system access

### Data Flow

```
User Input → Event Handlers → State Management → UI Updates → Local Storage
```

### State Management
- **Local Variables:** Timer state, UI state
- **localStorage:** Preset persistence
- **DOM Manipulation:** Real-time UI updates

## 📦 Build & Deployment

### Build Configuration

The application uses **electron-builder** for packaging with the following configuration:

```json
{
  "build": {
    "appId": "com.precisiontimer.app",
    "productName": "PrecisionTimer",
    "artifactName": "${productName}.${ext}",
    "win": {
      "target": ["nsis", "portable", "zip"]
    },
    "mac": {
      "target": ["dmg", "zip"]
    },
    "linux": {
      "target": ["AppImage", "deb", "tar.gz"]
    }
  }
}
```

### Building for Different Platforms

**Windows:**
```bash
npm run build -- --win
```

**macOS:**
```bash
npm run build -- --mac
```

**Linux:**
```bash
npm run build -- --linux
```

### Output Files

After building, distributable files are generated in the `dist/` folder:

- **Windows:** `.exe` installer, portable `.exe`, `.zip` archive
- **macOS:** `.dmg` disk image, `.zip` archive
- **Linux:** `.AppImage`, `.deb`, `.tar.gz` packages

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Start/Pause timer |
| `R` | Reset timer |
| `M` | Toggle preset menu |
| `E` | Open timer editor |
| `F` | Toggle fullscreen mode |
| `Esc` | Close modals and menus |

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Report Bugs** - Use the issue tracker to report bugs
2. **Suggest Features** - Propose new features or improvements
3. **Submit Pull Requests** - Fix issues or add new functionality
4. **Improve Documentation** - Help make the docs better

### Development Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation when necessary
- Keep pull requests focused and atomic

### Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 👤 Author

**Abiodun Oyewole**

- GitHub: [@OyeAbiodun](https://github.com/OyeAbiodun)
- Email: abiodunoyewole994@gmail.com

## 🙏 Acknowledgments

- [Electron.js](https://www.electronjs.org/) team for the amazing framework
- Open source community for inspiration and tools
- All contributors who have helped shape this project

## 🔗 Links

- [Repository](https://github.com/OyeAbiodun/PrecisionTimer)
- [Issue Tracker](https://github.com/OyeAbiodun/PrecisionTimer/issues)
- [Pull Requests](https://github.com/OyeAbiodun/PrecisionTimer/pulls)

---

<p align="center">
  Made with ❤️ by Abiodun Oyewole
</p>

<p align="center">
  <a href="#top">Back to top</a>
</p>