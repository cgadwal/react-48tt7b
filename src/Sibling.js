import React from 'react';

export class Sibling extends React.Component {
  

  render() {
    const name = this.props.name;
    const number = 1; 
    const certainity = 0; 
    return (<div>
        <p>Current answer selected: {name}</p>
       {/*<p>{number} - {name} with {certainity}%</p>*/}
    
    </div>);

  }
}

      