import styles from '../../styles/global.module.css'
import React, { Component } from 'react';
import CardGallery from '../../components/card_gallery/card_gallery'

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filters: {
        active: true,
        headerActive: false
      }
    };
  }

  render() {
    return (
        <div className="page-home">
           <span>home</span>
           <CardGallery />
        </div>
    );
  }
}

export default Home;