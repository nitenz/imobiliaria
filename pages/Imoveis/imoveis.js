
import React, { Component } from 'react';
import CardGallery from '../../components/card_gallery/card_gallery'

class Imoveis extends Component {
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
        <div className="page-imoveis">
          <span>Imoveis</span>
          <CardGallery /> 
        </div>
    );
  }
}

export default Imoveis;