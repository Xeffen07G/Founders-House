import React, { useState } from 'react';

/**
 * SoundToggle Component
 * Bottom-right floating yellow circular sound toggle.
 * Ambient audio (soft city/tram bell) is OFF by default.
 */
export const SoundToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
    // Web Audio synthesizer for ambient tram / city bell chime
    if (!isPlaying && typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 Bell
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.2);
      } catch (err) {
        // audio context handling
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {isPlaying && (
        <span className="hidden sm:inline-block font-mono text-[10px] font-bold text-white bg-[#E11D48] px-2.5 py-1 rounded border-2 border-black shadow-sticker">
          TRAM CHIME ON 🔔
        </span>
      )}
      <button
        type="button"
        onClick={toggleSound}
        className="w-12 h-12 rounded-full bg-[#E11D48] border-3 border-black text-white font-extrabold flex items-center justify-center shadow-sticker hover:bg-[#BE123C] hover:scale-110 active:scale-95 transition-all"
        aria-label="Toggle ambient Kolkata sound"
        title={isPlaying ? "Mute Ambient City Sound" : "Play Ambient City Sound (OFF by default)"}
      >
        {isPlaying ? (
          <span className="text-lg">🔔</span>
        ) : (
          <span className="text-lg opacity-60">🔕</span>
        )}
      </button>
    </div>
  );
};
