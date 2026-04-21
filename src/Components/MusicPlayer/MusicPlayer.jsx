import "./MusicPlayer.css";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

export default function MusicPlayer({ src, title = "Now Playing", specificStylePlayer }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // ▶️ Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };

  // ⏩ Avançar 10s
  const skipForward = () => {
    if (!audioRef.current || !duration) return;

    const newTime = Math.min(audioRef.current.currentTime + 10, duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // ⏪ Voltar 10s
  const skipBackward = () => {
    if (!audioRef.current) return;

    const newTime = Math.max(audioRef.current.currentTime - 10, 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // ⏱ Atualiza tempo atual
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  // 📦 Quando carrega metadata
  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  // 🎚 Seek manual (slider)
  const handleSeek = (e) => {
    const value = Number(e.target.value);
    if (!audioRef.current) return;

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // 🧹 Cleanup ao desmontar
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // 🕒 Formatação
  const formatTime = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className={`player ${specificStylePlayer}`}>
      <h3 className="player-title">{title}</h3>

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="controls">
        <button onClick={skipBackward}><FaBackward /></button>

        <button onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button onClick={skipForward}><FaForward /></button>
        
      </div>

      <div className="progress">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />

        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
