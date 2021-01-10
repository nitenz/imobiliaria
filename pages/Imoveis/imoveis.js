
import React, { Component } from 'react';
import CardGallery from '../../components/card_gallery/card_gallery'

class Imoveis extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: {},
      filters: {
        active: true,
        headerActive: false
      }
    };
  }

  componentDidMount() {
    // POST request using fetch with error handling
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ 
          email: this.email,
          pass: this.pass
      })
    };
    fetch('http://localhost:8080/imoveis', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }else{
                    if(data){
                        if (this.callback) {
                            this.callback( this.email)
                        }
                        this.setState({data: data})
                        
                    }else{
                        alert('fail!');
                    }  
                    
                }
            })
            .catch(error => {
                this.errorMessage = error;
                console.error('There was an error!', error);
            });
  }
  
  render() {
    return (
        <div className="page-imoveis">
           <CardGallery dataObj={this.state.data}/>
        </div>
    );
  }
}

export default Imoveis;