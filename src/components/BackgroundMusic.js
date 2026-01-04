import React, { useEffect, useRef, useState } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const hasTriedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || hasTriedRef.current) return;

    audio.volume = 0.3;
    
    // Fonction pour démarrer la musique
    const playMusic = async () => {
      if (hasTriedRef.current) return;
      
      try {
        await audio.play();
        setIsPlaying(true);
        hasTriedRef.current = true;
        return true;
      } catch (error) {
        return false;
      }
    };

    // Essayer de démarrer automatiquement
    const tryAutoPlay = async () => {
      if (hasTriedRef.current) return;
      
      // Attendre que l'audio soit prêt
      if (audio.readyState >= 2) {
        await playMusic();
      } else {
        audio.addEventListener('canplay', playMusic, { once: true });
        audio.addEventListener('loadeddata', playMusic, { once: true });
      }
    };

    // Essayer plusieurs fois
    tryAutoPlay();
    setTimeout(tryAutoPlay, 100);
    setTimeout(tryAutoPlay, 500);
    
    // Masquer l'overlay après 5 secondes et forcer le démarrage
    const autoStartTimer = setTimeout(() => {
      setShowOverlay(false);
      if (!hasTriedRef.current) {
        // Forcer le démarrage en simulant un clic
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        document.body.dispatchEvent(clickEvent);
        playMusic();
      }
    }, 5000);

    // Handler pour les interactions - plus simple et direct
    const handleUserAction = async () => {
      if (hasTriedRef.current) return;
      
      const success = await playMusic();
      
      if (success) {
        // Retirer tous les listeners si ça a fonctionné
        window.removeEventListener('mousemove', handleUserAction);
        window.removeEventListener('click', handleUserAction);
        window.removeEventListener('touchstart', handleUserAction);
        window.removeEventListener('scroll', handleUserAction);
        window.removeEventListener('keydown', handleUserAction);
        document.removeEventListener('mousemove', handleUserAction);
        document.removeEventListener('click', handleUserAction);
      }
    };

    // Ajouter les listeners avec capture pour être sûr de les attraper
    const options = { once: true, passive: true, capture: true };
    
    window.addEventListener('mousemove', handleUserAction, options);
    window.addEventListener('click', handleUserAction, options);
    window.addEventListener('touchstart', handleUserAction, options);
    window.addEventListener('scroll', handleUserAction, options);
    window.addEventListener('keydown', handleUserAction, options);
    document.addEventListener('mousemove', handleUserAction, options);
    document.addEventListener('click', handleUserAction, options);
    document.body?.addEventListener('mousemove', handleUserAction, options);
    document.body?.addEventListener('click', handleUserAction, options);

    // Gérer la fin pour la relancer en boucle
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    });

    return () => {
      window.removeEventListener('mousemove', handleUserAction);
      window.removeEventListener('click', handleUserAction);
      window.removeEventListener('touchstart', handleUserAction);
      window.removeEventListener('scroll', handleUserAction);
      window.removeEventListener('keydown', handleUserAction);
      document.removeEventListener('mousemove', handleUserAction);
      document.removeEventListener('click', handleUserAction);
      clearTimeout(autoStartTimer);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            hasTriedRef.current = true;
          })
          .catch((error) => {
            console.log('Impossible de jouer la musique');
          });
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/music/alphabet (mp3cut.net).mp3`}
        loop
        preload="auto"
      />
      {/* Overlay de démarrage - disparaît automatiquement après 2 secondes */}
      {showOverlay && !isPlaying && (
        <div 
          className="music-start-overlay"
          onClick={() => {
            toggleMusic();
            setShowOverlay(false);
          }}
        >
          <div className="music-start-content">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8"/>
            </svg>
            <p>Lire récitation alphabet</p>
          </div>
        </div>
      )}
      {/* Bouton de contrôle toujours visible en bas à droite */}
      <button 
        className="music-toggle" 
        onClick={toggleMusic}
        aria-label={isPlaying ? "Arrêter la récitation" : "Lire récitation alphabet"}
        title={isPlaying ? "Arrêter la récitation" : "Lire récitation alphabet"}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
