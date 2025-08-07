
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface CustomVideoPlayerProps {
  src: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const videoElement = videoRef.current;
    const containerElement = containerRef.current;

    if (!videoElement || !containerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Try to play when it enters viewport
          videoElement.muted = false; // Unmute before playing
          videoElement.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            // Autoplay with sound was prevented. Mute and try again.
            // This is a common browser policy.
            videoElement.muted = true;
            videoElement.play().then(() => setIsPlaying(true));
          });
        } else {
          // Pause when it leaves viewport
          videoElement.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5, // Start playing when 50% of the video is visible
      }
    );

    observer.observe(containerElement);

    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, [isReady]); // Depend on isReady to ensure video can be played

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
      // Unmute on first manual interaction
      if (videoElement.muted) {
        videoElement.muted = false;
      }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full cursor-pointer" onClick={togglePlayPause}>
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        muted // Start muted to allow autoplay in most browsers
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
