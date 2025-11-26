/**
 * Game Boy Sound Effects Utility
 * Uses Web Audio API to generate authentic Game Boy-style beeps
 */

interface SoundConfig {
  frequency: number;
  duration: number;
  volume?: number;
  type?: OscillatorType;
}

class GameBoySound {
  private audioContext: AudioContext | null = null;

  private getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  /**
   * Play a single beep sound
   */
  playBeep(config: SoundConfig): void {
    const { frequency, duration, volume = 0.3, type = 'square' } = config;

    try {
      const ctx = this.getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;

      // Fade in and out for smooth sound
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration / 1000);
    } catch (error) {
      console.warn('Sound playback not supported:', error);
    }
  }

  /**
   * Play a sequence of beeps (for mode changes)
   */
  playModeChangeSound(): void {
    // Two ascending beeps
    setTimeout(() => this.playBeep({ frequency: 262, duration: 100, volume: 0.3 }), 0);
    setTimeout(() => this.playBeep({ frequency: 330, duration: 100, volume: 0.3 }), 120);
  }

  /**
   * Play button press sound (short, crisp)
   */
  playButtonSound(): void {
    this.playBeep({ frequency: 392, duration: 80, volume: 0.25 });
  }

  /**
   * Play timer complete sound (longer ascending sequence)
   */
  playTimerCompleteSound(): void {
    // Musical sequence: C - E - G - C (higher octave)
    const notes = [262, 330, 392, 523];
    notes.forEach((freq, index) => {
      setTimeout(
        () => this.playBeep({ frequency: freq, duration: 150, volume: 0.3 }),
        index * 180
      );
    });
  }

  /**
   * Play start/resume sound
   */
  playStartSound(): void {
    // Single ascending chirp
    this.playBeep({ frequency: 440, duration: 150, volume: 0.3 });
  }

  /**
   * Play stop/pause sound
   */
  playStopSound(): void {
    // Single descending chirp
    this.playBeep({ frequency: 330, duration: 120, volume: 0.25 });
  }

  /**
   * Play reset sound
   */
  playResetSound(): void {
    // Two quick descending beeps
    setTimeout(() => this.playBeep({ frequency: 392, duration: 80, volume: 0.25 }), 0);
    setTimeout(() => this.playBeep({ frequency: 262, duration: 80, volume: 0.25 }), 100);
  }
}

// Create singleton instance
export const soundManager = new GameBoySound();

