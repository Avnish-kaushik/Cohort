import React from 'react'
import MacWindow from './MacWindow.jsx'
import './spotify.scss'

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow width="25vw" windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/4YRxDV8wJFPHPTeXepOstw?utm_source=generator&theme=0&si=7d19a92ca3574db7"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify
