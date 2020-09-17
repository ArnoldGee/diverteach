import React from 'react'

import './welcome-message.styles.scss'

export default function WelcomeMessage() {
  return (
    <div className="dashboard-welcome-message">
      <p className="welcome-icon"><span  role="img" aria-label="">👩‍🏫 👨‍🏫 ✨</span></p>
      <h2>
        Tan fàcil que sembla un joc!
      </h2>
      <ol>
        <li><span className="list-icon" role="img" aria-label="">👉</span> Clica les icones del menú i afegeix tantes eines com vulguis</li>
        <li><span className="list-icon" role="img" aria-label="">👋</span> Arrossega cada eina per moure-la <span  role="img" aria-label="">↕️</span> <span  role="img" aria-label="">↔️</span></li>
      </ol>
    </div>
  )
}
