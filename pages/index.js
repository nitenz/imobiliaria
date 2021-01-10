import Head from 'next/head'
import styles from '../styles/global.module.css'
import NavBar from '../components/navbar/navbar'
import React, { Component } from 'react'
import About from '../pages/About/about'
import Imoveis from '../pages/Imoveis/imoveis'

class Index extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filters: {
        active: true,
        headerActive: false
      },
      activePage: '',
      imoveisData: [{}],
      user:{
        sessionId: '',
        userName: ''
      }
    };
  }
  componentDidMount() {
    this.setState({activePage:'destaques'})
  }
  
  handleMenuEvt(evt){
    this.setState({activePage: evt.currentTarget.hash.replace('#/', '').toLowerCase() });
  }

  handleLoginEvt(evt){

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        sessionId: 'ASDASDA221312312ASDADASDSADA231',
        userName: 'nitenz'
      }
    }),function(){
      console.log('user: ', this.state.user )
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Decisões Vibrantes</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"></link>
        </Head>

        <main className={styles.main}>
          <NavBar userName={this.state.user.userName} page={this.activePage} loginClick={this.handleLoginEvt.bind(this)} menuClickEvt={this.handleMenuEvt.bind(this)}/>
          {
           this.state.activePage === 'about' ? <About /> : <Imoveis />
          }
        </main>

        <footer className={styles.footer}>
          <a
            href="/destaques"
            rel="noopener noreferrer"
          >
            <span> © Decisoes Vibrantes 2021 </span>           
            
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="17.000000pt" height="17.000000pt" viewBox="0 0 110.000000 90.000000"
            preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
              fill="#d20b0b" stroke="none">
              <path d="M385 799 c-82 -38 -195 -91 -250 -116 -55 -26 -104 -51 -109 -55 -6
              -4 13 -8 42 -8 l52 0 0 -59 0 -59 77 37 c43 21 101 48 128 61 28 12 80 37 117
              55 112 56 68 65 377 -81 74 -35 136 -64 137 -64 2 0 4 25 4 55 l0 54 58 3 c51
              3 55 4 32 14 -27 13 -117 55 -275 129 -174 82 -225 105 -233 105 -4 -1 -74
              -32 -157 -71z"/>
              <path d="M435 505 c-105 -51 -325 -155 -372 -176 -36 -15 -44 -30 -16 -27 10
              1 30 0 46 0 l27 -2 0 -115 0 -115 420 0 420 0 0 115 c0 127 -4 122 73 116 15
              -1 27 1 27 6 0 10 -503 243 -522 242 -7 0 -53 -20 -103 -44z"/>
              </g>
            </svg>
            &nbsp;&#9679;&nbsp;
            <span>https://www.decisoesvibrantes.com/</span>
            &nbsp;&#9679;&nbsp;
            <span> Telefone: 291 290 617 </span>
          </a>
        </footer>
      </div>
    )
  }
}
export default Index;