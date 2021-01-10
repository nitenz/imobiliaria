import styles from '../../styles/global.module.css'
import Card from '../card/card'
import Corousel from '../corousel/corousel';
import React, { Component } from 'react';

class CardGallery extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        zoomElement: false,
        activeElement: {},
        elementData:{},
      filters: {
        active: true,
        headerActive: false
      }
    };
  }

  handleClick(evt){
    var target= '';
    
    target = evt.target.cloneNode(true)

    target.id= 'teste';
    target.classList.add('teste');
    document.getElementById('openModal').click();

    this.setState({activeElement: target},function(){
      this.setState({elementData: this.props.dataObj[evt.target.parentElement.parentElement.parentElement.getAttribute('id')-1] })
    })
  }
  
  render() {
    var cardList = [];
    var that = this;

    if(this.props && this.props.dataObj && this.props.dataObj.length > 0){
        this.props.dataObj.map(function(item,idx){
            cardList.push(<Card key={item.id} id={item.id} handleClick={that.handleClick.bind(that)} price={item.price}  area={item.area} tipologia={item.tipologia} images={item.img} />);
        })
    }

    return (
        <div className="card_gallery">
            <div  className={styles.card_gallery}>
                <div className={styles.grid + ' grid'}>
                    {cardList}
                </div>
            </div>
            <div>
                <input id="openModal" type="hidden"  data-toggle="modal" data-target="#myModal" />
                
                <div className="modal" id="myModal">
                  {
                    this.state.activeElement ?  <Corousel data={this.state.elementData} /> : ''
                  }
                </div>
            </div>
        </div>
        
    );
  }
}

export default CardGallery;