import React, {Component} from 'react';



import Button from '../../components/button/button.component';
import Footer from '../../components/footer/footer.component';

import OPOS_LINKS from './opos.data'

import './opos.styles.scss' 

export default class Opos extends Component {
  constructor(props){
    super(props)
    this.state = OPOS_LINKS;
  }
  render(){
    return(
        <div className="opos">
          <section className="welcome">
            <div className="welcome-left">
              <h1 className="slogan">
                <span className="highlight ">Tu pots</span> <br/>amb les oposicions!
              </h1>
              
              <p className="description">
                Estem preparant un <span className="highlight">currículum de recursos gratuïts</span> per orientar-te, pas a pas, vers el teu objectiu.
              </p>
              <p className="description"> 
                Nosaltres posem el camí, tu hi posis les ganes! Amb gust per aprendre i una mica de dedicació diària, no hi ha dubte que ho aconseguiràs.
              </p>
              <a href="mailto:diverteach.xarxes@gmail.com" target="_blank" rel="noopener noreferrer" className="enter-button" to="/dashboard">
                <div className="emoji-before-button">
                  <span role="img" aria-label="finger pointing to the button">
                    👉
                  </span>
                </div>
                <Button color="green">Proposa'ns un recurs</Button>
              </a>
            </div>
            <div className="welcome-right">
              <img
                className="study-img"
                src={require('./Captura de Pantalla 2020-09-08 a les 23.27.05.png')}
                alt="Teacher studying"
              />
            </div>

          </section>
          <section>
          <h2 className="section-title">Currículum</h2>
          <ol>
            {
              this.state.map(item => (
              <li key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.description} 
                  <span className="list-icon" role="img" aria-label="">
                    🔗
                  </span>
                </a>
                <input type="checkbox" name="completed" id=""/>
              </li>
              ))
            }
          </ol>
          </section>
          <Footer />
        </div>
    )
  }
}