import React, { Component } from 'react';
class About extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: {},
      filters: {
        active: true,
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
    fetch('http://localhost:8080/about', requestOptions)
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
    var quotes = [];
    if(this.state.data.quote && this.state.data.quote.length > 0){
      this.state.data.quote.map(function(item,idx){
        quotes.push(<span key={idx} >{item}</span>);
        quotes.push(<br/>)
      })
    }
    

    return (
        <div className="page-about">
           <h2>{this.state.data.title}</h2><br/>
           {quotes}
           <br/><br/>
           <h3>{this.state.data.name}</h3>
           <br/>
           <span><b>Ami:</b> {this.state.data.ami}</span> <br/>
           <span><b>Morada:</b>{this.state.data.place}</span><br/>
           <span><b>Código Postal:</b> {this.state.data.postal_code}</span><br/>
           <span><b>Phone Number:</b> {this.state.data.phone_number}</span><br/>
        </div>
    );
  }
}
export default About;
