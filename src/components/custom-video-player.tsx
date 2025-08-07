
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface CustomVideoPlayerProps {
  src: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlay = () => {
        setIsReady(true);
      };
      
      videoElement.addEventListener('canplay', handleCanPlay);

      // Try to play muted on load
      videoElement.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        // Autoplay was prevented.
        setIsPlaying(false);
      });

      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [src]);

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full h-full cursor-pointer" onClick={togglePlayPause}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="auto"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
      {isReady && (
        <div className="absolute bottom-2 left-2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent container click from firing
              togglePlayPause();
            }}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors focus:outline-none"
            aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
