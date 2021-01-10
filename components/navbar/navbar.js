import styles from '../../styles/global.module.css'
import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: 'home'
    }
  }

  render() {
    return (
      <div className={styles.nav_container}>
        <nav className={styles.navbar_dark + ' navbar navbar-expand-md bg-dark navbar-dark'}>
          
          <a className="navbar-brand" onClick={this.props.menuClickEvt} href="#/destaques">
            
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="34.000000pt" height="34.000000pt" viewBox="0 0 110.000000 90.000000" preserveAspectRatio="xMidYMid meet">
  
              <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"  fill="#d20b0b" stroke="none">
              <path d="M385 799 c-82 -38 -195 -91 -250 -116 -55 -26 -104 -51 -109 -55 -6
              -4 13 -8 42 -8 l52 0 0 -59 0 -59 77 37 c43 21 101 48 128 61 28 12 80 37 117
              55 112 56 68 65 377 -81 74 -35 136 -64 137 -64 2 0 4 25 4 55 l0 54 58 3 c51
              3 55 4 32 14 -27 13 -117 55 -275 129 -174 82 -225 105 -233 105 -4 -1 -74
              -32 -157 -71z"/>
              <path d="M435 505 c-105 -51 -325 -155 -372 -176 -36 -15 -44 -30 -16 -27 10  1 30 0 46 0 l27 -2 0 -115 0 -115 420 0 420 0 0 115 c0 127 -4 122 73 116 15
              -1 27 1 27 6 0 10 -503 243 -522 242 -7 0 -53 -20 -103 -44z"/>
              </g>
            </svg>
            <span>
              Decisões Vibrantes  
            </span>
          </a>
  
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a onClick={this.props.menuClickEvt} className="nav-link" href="#/about">Sobre</a>
              </li>
              <li className="nav-item">
                <a onClick={this.props.menuClickEvt} className="nav-link" href="#/imoveis">Imoveis</a>
              </li>
            </ul>
          </div>
          <span className={styles.username}>{this.props.userName}</span>
        </nav>
      </div>
    )
  }
}

export default NavBar;