import styles from '../../styles/global.module.css'
import React, { Component } from 'react';
import CardGallery from '../../components/card_gallery/card_gallery'
class About extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filters: {
        active: true,
      }
    };
  }

  render() {
    return (
        <div className="page-about">
           <span>about</span>
           <CardGallery />
        </div>
    );
  }
}

export default About;