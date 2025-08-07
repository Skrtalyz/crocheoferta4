
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface CustomVideoPlayerProps {
  src: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
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
          videoElement.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            setIsPlaying(false);
          });
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (isReady) {
      observer.observe(containerElement);
    }

    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, [isReady]);

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

  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
        videoElement.muted = !videoElement.muted;
        setIsMuted(videoElement.muted);
    }
  };


  return (
    <div ref={containerRef} className="relative w-full h-full cursor-pointer" onClick={togglePlayPause}>
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        muted={isMuted}
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="auto"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
      {isReady && (
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
           <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors focus:outline-none"
            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
