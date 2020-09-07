import React from 'react';
import ReactDOM from 'react-dom';
import { Questions } from './Questions';
import { Sibling } from './Sibling';

const answers = []; 
export class Parent extends React.Component {
  constructor(props) {
    super(props);

    /*answers.push({
            number: 1,
            choice: this.state.name, 
            certainity: 0
        });

    this.state = { answers };*/

    this.state = { name: ' ' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Questions onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
};