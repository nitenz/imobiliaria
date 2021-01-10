import styles from '../../styles/global.module.css'
import React, { Component } from 'react';

class Corousel extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        page: ''
      }
    }
    handleClick(){
        document.getElementById('openModal').click();
    }
    render(){
       var images = [];
       if( this.props.data && this.props.data.img ){
        this.props.data.img.map(function(photo,i){
            images.push(<div key={i} className={`${ i  <= 0 ? 'active ' : ' ' } carousel-item`} > <img className="d-block w-100" src={photo} alt="First slide"/></div>)
        });
       }
        
        return (
            <div id="carouselExampleControls" className={styles.dialog_styles + " carousel slide"} data-ride="carousel">
                <div className="carousel-inner">
                    {images}
                </div>
                <span aria-hidden="true" className={styles.close_btn_dialog} onClick={this.handleClick}>×</span>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                
            </div>
        )
    }
}
export default Corousel;