import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/button/button.component'

import './landing-page.styles.scss';

const LandingPage = () => (
  <div className="landing-page">
    <section className="welcome">
      <div className="welcome-left">
        <h1 className="slogan"><span className="highlight">Superpoders</span> per a mestres creatius</h1>
        <p className="description">Totes les eines que necessites per dinamitzar i planificar les teves classes.</p>
        <p className="description">Ara en un sol lloc i sense anuncis.</p>
        <Link className="enter-button" to="/dashboard"><Button color="green">Entra a DiverTeach</Button></Link>
      </div>
      <div className="welcome-right">
        
      </div>
      
    </section>
    <section className="team"></section>
  </div>
);

export default LandingPage;
