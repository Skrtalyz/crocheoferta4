
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
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [src]);

  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        // Unmute on play
        videoElement.muted = false;
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
        playsInline
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="auto"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
      {isReady && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause();
            }}
            className="p-4 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors focus:outline-none"
            aria-label={'Reproduzir'}
          >
            <Play size={40} className="ml-1" />
          </button>
        </div>
      )}
      {isReady && isPlaying && (
         <div className="absolute bottom-2 left-2 flex items-center gap-2">
         <button
           onClick={(e) => {
             e.stopPropagation();
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
