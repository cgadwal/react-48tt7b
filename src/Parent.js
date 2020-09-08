import React from 'react';
import ReactDOM from 'react-dom';
import { Questions } from './Questions';
import { Sibling } from './Sibling';

//const answers = []; 
export class Parent extends React.Component {
  constructor(props) {
    super(props);

    /*answers.push({
            number: 1,
            choice: this.state.name, 
            certainity: 0
        });

    this.state = { answers };*/

    this.state = { number: 0, name: ' ', certainity: 0};
    this.changeName = this.changeName.bind(this);
    //this.changeCertainity = this.changeCertainity.bind(this);
  }

  changeName(newQuestionNumber, newNameCertainity) {
    if (typeof newNameCertainity === 'string' || newNameCertainity instanceof String || isNaN(newNameCertainity)) {
           this.setState({
            number: newQuestionNumber,
            name: newNameCertainity
          });
    } else {
          this.setState({
          number: newQuestionNumber,
          certainity: newNameCertainity
        });
    }
   
  }

  render() {
    return (
      <div>
        <Questions onChangeName={this.changeName} />
        <Sibling name={this.state.name} number={this.state.number} certainity={this.state.certainity}/>
      </div>
    );
  }
};