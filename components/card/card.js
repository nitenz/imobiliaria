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

  render() {
    return (
        <div>
            <a className={styles.card + ' card' }>
                <h3>{this.props.title} &rarr;</h3>
                <p>{this.props.text}</p>
            </a>
        </div>
    );
  }
}

export default Card;