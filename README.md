<div align="center">
  <h1>🎮 Pomoboy - Game Boy Pomodoro Timer</h1>
  <p>A retro Game Boy-styled Pomodoro timer built with React, Vite, and TypeScript</p>
  
  ![Pomoboy](https://img.shields.io/badge/Status-Active-brightgreen)
  ![React](https://img.shields.io/badge/React-19.2.0-blue)
  ![Vite](https://img.shields.io/badge/Vite-6.4.1-purple)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)
</div>

## ✨ Features

- 🎮 **Game Boy UI**: Authentic retro Game Boy design with controls
- ⏱️ **Pomodoro Timer**: 25 min focus, 5 min short break, 15 min long break
- 🔊 **Sound Effects**: Game Boy-style beeps using Web Audio API
- ⚙️ **Customizable Settings**: Adjust timer durations and auto-start options
- 🎨 **Tailwind CSS**: Beautiful responsive design
- 🧪 **Fully Tested**: Unit and integration tests with Vitest
- 📱 **Responsive**: Works on desktop and mobile
- 🏷️ **Frontera® Branding**: Professional branding integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository:**
```bash
git clone <repo-url>
cd proj-pomoboy
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Start the dev server:**
```bash
pnpm dev
```

4. **Open in browser:**
```
http://localhost:3000
```

## 📝 Available Scripts

### Development
```bash
pnpm dev          # Start dev server
```

### Build & Preview
```bash
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Testing
```bash
pnpm test         # Run all tests
pnpm test:ui      # Run tests with UI dashboard
pnpm test:coverage # Generate coverage report
```

## 🎮 How to Use

### Controls
- **D-Pad Left/Right**: Switch between modes (Focus → Break → Long Break)
- **A Button**: Play/Pause timer
- **B Button**: Reset timer
- **SELECT**: Open settings
- **START**: Play/Pause timer

### Modes
1. **FOCUS** (25 min) - Pomodoro work session
2. **BREAK** (5 min) - Short break
3. **LONG BREAK** (15 min) - Extended break after 4 pomodoros

### Settings
- Customize timer durations
- Enable/disable auto-start for breaks
- Enable/disable auto-start for pomodoros
- Adjust long break interval

## 🏗️ Project Structure

```
src/
├── App.tsx                 # Main application component
├── main.tsx               # React entry point
├── styles/
│   └── globals.css        # Global Tailwind styles
├── components/
│   └── SettingsModal.tsx  # Settings configuration modal
├── utils/
│   └── sound.ts           # Game Boy sound effects manager
├── types/
│   └── index.ts           # TypeScript type definitions
└── __tests__/
    ├── App.test.tsx       # App component tests
    ├── constants/
    │   └── index.test.ts  # Constants tests
    ├── types/
    │   └── index.test.ts  # Types tests
    └── utils/
        └── sound.test.ts  # Sound manager tests
```

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 6.4.1
- **Language**: TypeScript 5.8.2
- **Styling**: Tailwind CSS 3.4.18
- **Testing**: Vitest 1.6.1
- **Icons**: Lucide React 0.554.0

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize Game Boy colors:
```javascript
colors: {
  gb: {
    bg: '#d1d5db',        // Device background
    screen: '#9bbc0f',    // Screen color
    pixel: '#0f380f',     // Pixel/text color
    bezel: '#50545e',     // Bezel color
    red: '#8b0000',       // Button color
    dark: '#2d2d2d'       // Dark elements
  }
}
```

### Timer Durations
Edit `src/constants/index.ts`:
```typescript
export const DEFAULT_SETTINGS = {
  pomodoro: 25,           // Focus duration (minutes)
  shortBreak: 5,          // Short break duration (minutes)
  longBreak: 15,          // Long break duration (minutes)
  longBreakInterval: 4,   // Pomodoros before long break
  // ... other settings
};
```

## 🧪 Testing

### Run Tests
```bash
pnpm test
```

### Test Coverage
- Sound Manager: 9 tests
- Constants: 12 tests
- Types: 6 tests
- App Component: 6 tests
- **Total**: 27 tests ✓

## 🌐 Web Audio API

The project uses the Web Audio API for authentic Game Boy sound effects:
- Square wave oscillators
- Frequency modulation for different tones
- Envelope shaping for realistic beeps

## 📦 Dependencies

### Runtime
- react@^19.2.0
- react-dom@^19.2.0
- lucide-react@^0.554.0

### Development
- vite@^6.2.0
- typescript@~5.8.2
- tailwindcss@^3.4.18
- postcss@^8.4.45
- autoprefixer@^10.4.20
- vitest@^1.6.1
- @testing-library/react@^14.3.1

## 🎯 Best Practices

✅ Industry-standard project structure
✅ Type-safe TypeScript configuration
✅ Comprehensive test coverage
✅ Tailwind CSS for styling
✅ PostCSS processing
✅ Path aliases for clean imports
✅ Proper error handling
✅ Responsive design

## 🔗 Links

- **Website**: https://frontera.my.id
- **Repository**: [Your Repo]
- **Issues**: [Report Issues]

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Credits

- Game Boy design inspiration from Nintendo
- Pomodoro technique by Francesco Cirillo
- Built with ❤️ using React, Vite, and TypeScript

---

**Made with ❤️ by Frontera®**
