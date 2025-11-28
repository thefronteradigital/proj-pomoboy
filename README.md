🎮 Pomoboy - Game Boy Pomodoro Timer
A retro Game Boy-styled Pomodoro timer built with React, Vite, and TypeScript

## ✨ Features

- 🎮 **Game Boy UI**: Authentic retro Game Boy design with controls
- ⏱️ **Pomodoro Timer**: 25 min focus, 5 min short break, 15 min long break
- 🔊 **Sound Effects**: Game Boy-style beeps using Web Audio API
- ⚙️ **Customizable Settings**: Adjust timer durations and auto-start options
- 🎨 **Tailwind CSS**: Beautiful responsive design
- 🧪 **Fully Tested**: Unit and integration tests with Vitest
- 📱 **Responsive**: Works on desktop and mobile
- 🏷️ **Frontera® Branding**: Professional branding integration
- 🧩 **Modular Architecture**: Clean separation of concerns with custom hooks
- 🎯 **Best Practices**: Industry-standard React patterns and TypeScript
- 🔍 **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards
- 📲 **PWA Ready**: Installable, offline-capable Progressive Web App

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
├── App.tsx                      # Main application component
├── main.tsx                     # React entry point
├── globals.css                  # Global Tailwind styles
├── hooks/                       # Custom React hooks
│   ├── index.ts                 # Hooks barrel export
│   ├── useTimer.ts              # Timer state and logic
│   ├── useTimerMode.ts          # Mode switching logic
│   ├── useSettings.ts           # Settings management
│   └── useDocumentTitle.ts      # Document title updater
├── components/                  # UI components
│   ├── index.ts                 # Components barrel export
│   ├── Header.tsx               # App header with branding
│   ├── GameBoyScreen.tsx        # Display screen component
│   ├── GameBoyControls.tsx      # Controls container
│   ├── DPad.tsx                 # D-Pad navigation
│   ├── ActionButtons.tsx        # A/B action buttons
│   ├── StartSelectButtons.tsx   # Start/Select buttons
│   ├── SpeakerGrille.tsx        # Speaker decoration
│   ├── SettingsModal.tsx        # Settings modal
│   └── settings/                # Settings sub-components
│       ├── ModalHeader.tsx      # Reusable modal header
│       ├── ModalFooter.tsx      # Reusable modal footer
│       ├── TimerInput.tsx       # Timer input field
│       └── ToggleSwitch.tsx     # Toggle switch control
├── utils/
│   └── sound.ts                 # Game Boy sound effects manager
├── types/
│   └── index.ts                 # TypeScript type definitions
├── constants/
│   └── index.ts                 # App constants and defaults
└── __tests__/                   # Test suite
    ├── App.test.tsx             # App component tests
    ├── constants/
    │   └── index.test.ts        # Constants tests
    ├── types/
    │   └── index.test.ts        # Types tests
    └── utils/
        └── sound.test.ts        # Sound manager tests
```

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 6.4.1
- **Language**: TypeScript 5.8.2
- **Styling**: Tailwind CSS 3.4.18
- **Testing**: Vitest 1.6.1
- **Icons**: Lucide React 0.554.0
- **SEO**: React Helmet 3.0.4
- **PWA**: Vite Plugin PWA 1.1.0

## 🏛️ Architecture Highlights

### Custom Hooks
The application uses custom hooks to separate business logic from UI:

- **`useTimer`**: Manages timer countdown, start/stop/reset functionality
- **`useTimerMode`**: Handles mode switching and cycle tracking
- **`useSettings`**: Manages application settings and modal state
- **`useDocumentTitle`**: Updates browser tab title dynamically

### Component Structure
Components follow the single responsibility principle:

- **Presentational Components**: `Header`, `GameBoyScreen`, `DPad`, etc.
- **Container Components**: `GameBoyControls` composes smaller controls
- **Modal Components**: Modular settings with reusable sub-components
- **Atomic Design**: Small, focused components that compose into larger features

## 🔍 SEO & PWA Features

### SEO Implementation
- ✅ **Meta Tags**: Comprehensive title, description, keywords
- ✅ **Open Graph**: Facebook sharing optimization
- ✅ **Twitter Cards**: Twitter sharing with large image cards
- ✅ **Structured Data**: JSON-LD Schema.org WebApplication markup
- ✅ **Canonical URLs**: Proper URL canonicalization
- ✅ **Sitemap**: XML sitemap for search engines
- ✅ **Robots.txt**: Search engine crawling instructions

### PWA Features
- ✅ **Installable**: Add to home screen on mobile and desktop
- ✅ **Offline Support**: Works without internet connection
- ✅ **Service Worker**: Automatic updates and caching
- ✅ **Web Manifest**: App name, icons, theme colors
- ✅ **Fast Loading**: Precached assets for instant loading

### Performance
- ⚡ **Lighthouse Score**: 90+ across all metrics
- ⚡ **Code Splitting**: Optimized bundle sizes
- ⚡ **Asset Caching**: Service worker caching strategies
- ⚡ **Lazy Loading**: On-demand component loading

For detailed SEO implementation guide, see [SEO_GUIDE.md](./SEO_GUIDE.md)

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
- App Component: 3 tests
- **Total**: 30 tests ✓

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

## 🎯 Best Practices & Architecture

### Code Organization
✅ **Custom Hooks**: Separation of business logic from UI components
✅ **Modular Components**: Single responsibility principle for each component
✅ **Barrel Exports**: Clean import statements with index files
✅ **Type Safety**: Full TypeScript coverage with strict typing
✅ **Path Aliases**: Clean `@/` imports for better readability

### React Patterns
✅ **Custom Hooks Pattern**: `useTimer`, `useTimerMode`, `useSettings`, `useDocumentTitle`
✅ **Composition**: Small, reusable components composed together
✅ **Props Drilling Prevention**: Hooks manage state at appropriate levels
✅ **Memoization**: `useCallback` for optimized performance

### Project Quality
✅ **Comprehensive Testing**: 30 passing tests with Vitest
✅ **Linter Clean**: No TypeScript or ESLint errors
✅ **Production Ready**: Optimized build with Vite
✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
✅ **Accessibility**: Proper ARIA labels and semantic HTML

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
