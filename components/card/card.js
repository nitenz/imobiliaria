import styles from '../../styles/global.module.css'
import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filters: {
        active: true,
        headerActive: false
      }
    };
  }

  componentDidMount() {
  }

  render() {
    var images = [];
    var that = this;

    this.props.images.map(function(value,idx){
      images.push(<img src={value} onClick={that.props.handleClick} key={idx} className={styles.img_size + ' img-fluid'}  alt="teste"></img>)
   })

    return (
        <div >
            <div id={this.props.id} className={styles.card_container} >
              <a className={styles.card + ' card' }>
                  <h3>Preço: {this.props.price}</h3>
                  
                  <p>Area: {this.props.area}m2</p>
                  <p>Quartos:{this.props.tipologia}</p>

                  <div>
                    {images}
                  </div>
              </a>
            </div>
        </div>
    );
  }
}

export default Card;