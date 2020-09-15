import React from 'react';

import InfoLabel from '../info-label/info-label.component'

import './dashboard-menu.styles.scss'

const DashboardMenu = (props) => {
  return(
  <div className="dashboard-menu">
    <div className="dashboard-item" onClick={() => props.addTool("timer")}>
      <div className="dashboard-icon" ><span role="img" aria-label="">⏰</span></div>
      <div className="dashboard-description">Temporitzador</div>
    </div>
    <div className="dashboard-item" >
      <div className="dashboard-icon"><span role="img" aria-label="">🎨</span></div>
      <div className="dashboard-description">{/*Pissarra*/} <InfoLabel /></div>
    </div>
    <div className="dashboard-item" >
      <div className="dashboard-icon"><span role="img" aria-label="">👥</span></div>
      <div className="dashboard-description">{/*Creador de grups*/}<InfoLabel /></div>
    </div>
    <div className="dashboard-item" onClick={() => props.addTool("silence")}>
      <div className="dashboard-icon"><span role="img" aria-label="">🤫</span></div>
      <div className="dashboard-description">Silenci</div>
    </div>
    <div className="dashboard-item" onClick={() => props.addTool("notes")}>
      <div className="dashboard-icon"><span role="img" aria-label="">📝</span></div>
      <div className="dashboard-description">Notes</div>
    </div>
  </div>
)}

export default DashboardMenu;