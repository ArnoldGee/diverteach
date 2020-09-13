import React from 'react';
import {Link} from 'react-router-dom';




import Button from '../../components/button/button.component';
import InfoLabel from '../../components/info-label/info-label.component';
import Footer from '../../components/footer/footer.component';

import './landing-page.styles.scss';

const LandingPage = () => (

  <div className="landing-page">
    <section className="welcome">
      <div className="welcome-left">
        <h1 className="slogan">
          <span className="highlight">Superpoders</span> per a mestres creatius
        </h1>
        <p className="description">
          Totes les eines que necessites per dinamitzar i planificar les teves
          classes.
        </p>
        <p className="description">Ara en un sol lloc i sense anuncis.</p>
        <Link className="enter-button" to="/dashboard">
          <div className="emoji-before-button">
            <span role="img" aria-label="finger pointing to the button">
              👉
            </span>
          </div>
          <Button color="green">Entra a DiverTeach</Button>
        </Link>
      </div>
      <div className="welcome-right">
        <img
          className="superhero-img"
          src={require('./superhero.png')}
          alt="Superhero teacher"
        />
      </div>
    </section>

    <section className="features">
      <h2 className="section-title">Què hi ha a DiverTeach?</h2>
      <h3>Classes inoblidables</h3>
      <ul className="feature-list">
        <li>
          <span className="list-icon" role="img" aria-label="">
            ⏰
          </span>
          Temporitzador amb sons <InfoLabel />
        </li>
        <li>
          <span className="list-icon" role="img" aria-label="">
            🎨
          </span>
          Pissarra digital <InfoLabel />
        </li>
        <li>
          <span className="list-icon" role="img" aria-label="">
            👥
          </span>
          Creador de grups automàtic <InfoLabel />
        </li>
        <li>
          <span className="list-icon" role="img" aria-label="">
            🤫
          </span>
          Mesurador de silenci <InfoLabel />
        </li>
      </ul>
      <h3>Programacions més entretingudes</h3>
      <ul>
        <li>
          <span className="list-icon" role="img" aria-label="">
            🧠
          </span>
          Planificador creatiu de seqüències didàctiques
          <InfoLabel />
        </li>
        <li>
          <span className="list-icon" role="img" aria-label="">
            💪
          </span>
          Els millors recursos per a les oposicions
          <InfoLabel />
        </li>
      </ul>
    </section>

    <section className="team">
      <h2 className="section-title">Qui som?</h2>
      <div className="team-cards">
        <div className="team-card">
          <img
            className="team-img"
            src={require('./foto-arnau.png')}
            alt=""
          />
          <h3>
            Arnau{' '}
            <span role="img" aria-label="">
              👨🏻‍💻
            </span>
          </h3>
          <p>Mestre i desenvolupador</p>
          <a href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/">
            <Button color="navy">
              Contracta'm a <i class="fa fa-linkedin" aria-hidden="true"></i>
            </Button>
          </a>
        </div>
        <div className="team-card">
          <img
            className="team-img"
            src={require('./foto-bea.jpeg')}
            alt=""

          />
          <h3>
            Bea{' '}
            <span role="img" aria-label="">
              🦸🏻‍♀️
            </span>
          </h3>
          <p>Mestra i dissenyadora</p>
          <a href="https://www.linkedin.com/in/beatriz-c%C3%B3rdoba-cruz-236080168/">
            <Button color="navy">
              Contracta'm a <i class="fa fa-linkedin" aria-hidden="true"></i>
            </Button>
          </a>
        </div>
        <div className="team-card">
          <img
            className="team-img"
            src={require('./foto-carla.png')}
            alt=""
          />
          <h3>
            Carla
            <span role="img" aria-label="">
              👩🏻‍🎨
            </span>
          </h3>
          <p>Mestra i il·lustradora</p>
          <a href="https://www.instagram.com/carlagamezalarcon/">
            <Button color="navy">
              Contracta'm a <i class="fa fa-instagram" aria-hidden="true"></i>
            </Button>
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default LandingPage;
