import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Settings, TimerMode } from './types';
import { DEFAULT_SETTINGS, MODE_LABELS } from './constants';
import { SettingsModal } from './components/SettingsModal';
import { Battery, Volume2 } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(DEFAULT_SETTINGS.pomodoro * 60);
  const [isActive, setIsActive] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cycleCount, setCycleCount] = useState(1);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);

  const timerRef = useRef<number | null>(null);

  // Update document title
  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const modeText = mode === 'pomodoro' ? 'Focus' : mode === 'shortBreak' ? 'Break' : 'Long Break';
    document.title = `${formattedTime} - ${modeText}`;
  }, [timeLeft, mode]);

  const switchMode = useCallback((newMode: TimerMode) => {
    setMode(newMode);
    // Don't restart time if we are just updating settings but not switching
    const newDuration = settings[newMode] * 60;
    setTimeLeft(newDuration);
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [settings]);

  // Handle D-Pad Navigation for modes
  const handleNextMode = () => {
    if (mode === 'pomodoro') switchMode('shortBreak');
    else if (mode === 'shortBreak') switchMode('longBreak');
    else switchMode('pomodoro');
  };

  const handlePrevMode = () => {
    if (mode === 'pomodoro') switchMode('longBreak');
    else if (mode === 'shortBreak') switchMode('pomodoro');
    else switchMode('shortBreak');
  };

  const handleTimerComplete = useCallback(() => {
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);

    if (mode === 'pomodoro') {
      const newCompleted = pomodorosCompleted + 1;
      setPomodorosCompleted(newCompleted);
      
      const isLongBreak = newCompleted % settings.longBreakInterval === 0;
      const nextMode = isLongBreak ? 'longBreak' : 'shortBreak';
      
      if (settings.autoStartBreaks) {
        switchMode(nextMode);
        setIsActive(true);
      } else {
        switchMode(nextMode);
      }
    } else {
      if (settings.autoStartPomodoros) {
        switchMode('pomodoro');
        setIsActive(true);
        setCycleCount(c => c + 1);
      } else {
        switchMode('pomodoro');
        setCycleCount(c => c + 1);
      }
    }
  }, [mode, pomodorosCompleted, settings, switchMode]);

  useEffect(() => {
    if (isActive) {
      const startTime = Date.now();
      const initialTimeLeft = timeLeft;
      
      timerRef.current = window.setInterval(() => {
        const secondsPassed = Math.floor((Date.now() - startTime) / 1000);
        const newTimeLeft = initialTimeLeft - secondsPassed;
        
        if (newTimeLeft <= 0) {
          setTimeLeft(0);
          handleTimerComplete();
        } else {
          setTimeLeft(newTimeLeft);
        }
      }, 100);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, handleTimerComplete, timeLeft]); // Re-added timeLeft to dep array to keep logic clean, though typically handled via ref for tick.

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(settings[mode] * 60);
  };

  const handleSettingsSave = (newSettings: Settings) => {
    setSettings(newSettings);
    if (!isActive) {
      if (mode === 'pomodoro') setTimeLeft(newSettings.pomodoro * 60);
      else if (mode === 'shortBreak') setTimeLeft(newSettings.shortBreak * 60);
      else if (mode === 'longBreak') setTimeLeft(newSettings.longBreak * 60);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 font-pixel select-none">
      
      {/* Game Boy Case */}
      <div className="relative bg-gb-bg w-[320px] sm:w-[350px] h-[580px] rounded-t-xl rounded-bl-xl rounded-br-[60px] shadow-[15px_15px_0_rgba(0,0,0,0.15)] flex flex-col items-center p-6 border-r-4 border-b-4 border-black/10">
        
        {/* Top Groove Decoration */}
        <div className="absolute top-0 left-4 right-4 h-4 border-b-2 border-black/5 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-white/40 rounded-t-xl"></div>

        {/* Screen Bezel */}
        <div className="bg-gb-bezel w-full h-[240px] rounded-t-lg rounded-b-[40px] p-6 shadow-md relative mb-8 flex flex-col items-center">
          
          {/* Bezel Text */}
          <div className="w-full flex justify-between items-center text-[10px] text-[#b3b3b3] mb-1 px-2 font-sans font-bold tracking-wider">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_5px_rgba(255,0,0,0.8)]"></div>
              <span>BATTERY</span>
            </div>
          </div>

          {/* Actual Screen */}
          <div className="bg-gb-screen w-full h-full shadow-[inset_3px_3px_5px_rgba(0,0,0,0.2)] border-4 border-[#8bac0f] flex flex-col items-center justify-between p-4 relative overflow-hidden">
             
             {/* Pixel Grid Overlay (Optional effect) */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(15,56,15,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,56,15,0.05)_1px,transparent_1px)] bg-[size:3px_3px] pointer-events-none"></div>

             {/* Screen Content */}
             <div className="w-full flex justify-between items-end border-b-2 border-gb-pixel/30 pb-1 mb-2 z-10">
                <span className="text-gb-pixel text-xs">{MODE_LABELS[mode]}</span>
                <span className="text-gb-pixel text-[10px]">#{cycleCount}</span>
             </div>

             <div className="flex-1 flex flex-col items-center justify-center z-10 w-full">
                <div className="text-gb-pixel text-6xl tracking-widest leading-none font-bold">
                  {formatTime(timeLeft)}
                </div>
                <div className="mt-4 text-gb-pixel text-xs animate-pulse">
                  {isActive ? '► RUNNING' : '❚❚ PAUSED'}
                </div>
             </div>

             {/* Mode Indicators at bottom of screen */}
             <div className="w-full flex justify-between mt-2 z-10">
                <div className={`text-[8px] text-gb-pixel ${mode === 'pomodoro' ? 'bg-gb-pixel text-gb-screen px-1' : 'opacity-50'}`}>POMO</div>
                <div className={`text-[8px] text-gb-pixel ${mode === 'shortBreak' ? 'bg-gb-pixel text-gb-screen px-1' : 'opacity-50'}`}>SHORT</div>
                <div className={`text-[8px] text-gb-pixel ${mode === 'longBreak' ? 'bg-gb-pixel text-gb-screen px-1' : 'opacity-50'}`}>LONG</div>
             </div>

          </div>

          <div className="mt-2 text-[#999] text-xs font-serif italic tracking-wide">
            Nintendo <span className="font-bold">GAME BOY</span>
          </div>
        </div>

        {/* Controls Area */}
        <div className="w-full flex-1 relative">
          
          {/* Logo */}
          <div className="absolute top-2 left-2 text-[#303080] font-bold italic text-lg tracking-tight hidden">
            Pomodoro
          </div>

          {/* Main Controls Grid */}
          <div className="grid grid-cols-2 h-32 mt-4">
             {/* D-Pad */}
             <div className="relative flex items-center justify-center">
                <div className="w-[90px] h-[90px] relative">
                   {/* Horizontal */}
                   <div className="absolute top-[30px] left-0 w-full h-[30px] bg-gb-dark rounded-sm shadow-[2px_2px_0_rgba(0,0,0,0.2)]"></div>
                   {/* Vertical */}
                   <div className="absolute top-0 left-[30px] w-[30px] h-full bg-gb-dark rounded-sm shadow-[2px_2px_0_rgba(0,0,0,0.2)]"></div>
                   
                   {/* Middle Circle */}
                   <div className="absolute top-[35px] left-[35px] w-[20px] h-[20px] bg-gb-dark/80 rounded-full radial-gradient"></div>

                   {/* Click Areas */}
                   <button 
                    onClick={handlePrevMode}
                    className="absolute top-[30px] left-0 w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5"
                    aria-label="Previous Mode"
                   />
                   <button 
                    onClick={handleNextMode}
                    className="absolute top-[30px] right-0 w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5"
                    aria-label="Next Mode"
                   />
                   <button className="absolute top-0 left-[30px] w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5" />
                   <button className="absolute bottom-0 left-[30px] w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5" />
                </div>
             </div>

             {/* A/B Buttons */}
             <div className="relative flex items-center justify-center pl-4">
                <div className="bg-gray-200/50 rounded-full w-[110px] h-[60px] transform -rotate-12 flex justify-between items-center px-2">
                   <div className="flex flex-col items-center gap-1 mt-6">
                      <button 
                        onClick={resetTimer}
                        className="w-10 h-10 bg-gb-red rounded-full shadow-[2px_2px_0_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-transform"
                      ></button>
                      <span className="text-gb-dark font-bold text-xs">B</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 mb-6">
                      <button 
                        onClick={toggleTimer}
                        className="w-10 h-10 bg-gb-red rounded-full shadow-[2px_2px_0_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-transform"
                      ></button>
                      <span className="text-gb-dark font-bold text-xs">A</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Start / Select */}
          <div className="flex justify-center gap-6 mt-12 transform -rotate-12">
             <div className="flex flex-col items-center gap-1">
                <button 
                  onClick={() => setIsSettingsOpen(true)}
                  className="w-12 h-3 bg-gb-dark rounded-full shadow-[1px_1px_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-[1px] hover:bg-black"
                ></button>
                <span className="text-[10px] font-bold text-gb-dark tracking-widest">SELECT</span>
             </div>
             <div className="flex flex-col items-center gap-1">
                <button 
                   onClick={toggleTimer}
                   className="w-12 h-3 bg-gb-dark rounded-full shadow-[1px_1px_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-[1px] hover:bg-black"
                ></button>
                <span className="text-[10px] font-bold text-gb-dark tracking-widest">START</span>
             </div>
          </div>

          {/* Speaker Grille */}
          <div className="absolute bottom-[-10px] right-2 transform -rotate-12 flex gap-2">
             <div className="w-[6px] h-[40px] bg-black/10 rounded-full"></div>
             <div className="w-[6px] h-[40px] bg-black/10 rounded-full"></div>
             <div className="w-[6px] h-[40px] bg-black/10 rounded-full"></div>
             <div className="w-[6px] h-[40px] bg-black/10 rounded-full"></div>
             <div className="w-[6px] h-[40px] bg-black/10 rounded-full"></div>
             <div className="w-[6px] h-[40px] bg-black/10 rounded-full"></div>
          </div>

        </div>

      </div>

      <div className="fixed bottom-4 text-xs text-white/50 text-center w-full hidden sm:block">
        Controls: A/Start = Toggle | B = Reset | D-Pad = Change Mode | Select = Settings
      </div>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={handleSettingsSave}
      />
    </div>
  );
};

export default App;
