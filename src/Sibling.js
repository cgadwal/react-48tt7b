import React from 'react';

export class Sibling extends React.Component {
  

  render() {
    const name = this.props.name;
    const number = this.props.number; 
    const certainity = this.props.certainity; 

    return (<div>
       
        <p>Selected answer: {number} - {name} with {certainity}%</p>
    
    </div>);

  }
}

      