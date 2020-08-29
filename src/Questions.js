import React from 'react';
import { BallResizer } from "./Slider";

export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return {isToggleOn: state.isToggleOn + 1}
    });
  }
  
  handleClick2() {
    this.setState((state) => {
      return {isToggleOn: state.isToggleOn - 1}
    });
  }

  submit() {

  }

  render() {
    let allquestions = [
    {questionTitle: 'Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?', answer1: 'Armando Dippet', answer2: 'Albus Dumbledore', answer3: 'Phineas Nigellus Black', answer4: 'Brutus Scrimgeour'},
    {questionTitle: 'Which creatures pull the carriages that take students from the Hogwarts Express to the Castle?', answer1: 'Hippogriffs', answer2: 'Thestrals', answer3: 'Centaurs', answer4: 'Manticores'},
    {questionTitle: 'How many staircases does Hogwarts have?', answer1: '142', answer2: '143', answer3: '152', answer4: '163'},
    {questionTitle: 'What is the name of the room Harry uses to teach Dumpledore\'s Army?', answer1: 'The Restricted Section of the Library', answer2: 'The Girls Bathroom on the First Floor', answer3: 'The Perfect\'s Bathroom', answer4: 'The Room of Requirement'}, 
    {questionTitle: 'What is the name of the book Hermione supposes Voldemore used to learn about Horcruxes?', answer1: 'Magik Moste Evil', answer2: 'Secrets of the Darkest Art', answer3: 'A guide to Medieval Socery', answer4: 'Moste Potente Potions'}, 
    {questionTitle: 'Slughorn teaches his students that Amortentia smells different to each person. What food does Harry smell?', answer1: 'Pumpkin juice', answer2: 'Mrs. Weasley\'s Fudge', answer3: 'Lemon Drops', answer4: 'Treacle Tart'}
    ]; 
  
  const questions = allquestions.map(question => {
      return (
        <div>
            <div className="bar">
              {question.questionTitle}
            </div>
            <input type="radio" id={question.answer1} name={question[0]} value={question.answer1} />
            <label htmlFor={question.answer1}>{question.answer1} </label>
            <br />
            
            <input type="radio" id={question.answer2} name={question[0]} value={question.answer2} />
            <label htmlFor={question.answer2}>{question.answer2} </label>
            <br />

            <input type="radio" id={question.answer3} name={question[0]} value={question.answer3} />
            <label htmlFor={question.answer3}>{question.answer3} </label>
            <br />

            <input type="radio" id={question.answer4} name={question[0]} value={question.answer4} />
            <label htmlFor={question.answer4}>{question.answer4} </label>
            <br /><br />
            Level of certainity: 
            <div className="ballSlider">
              <BallResizer name={question[0]} initialSize={150} minSize={150} maxSize={250} />
            </div>
       </div>   
       
      );
    });

    return ( 
      <div>
            <nav>{questions[this.state.isToggleOn]}</nav> 
            <br />
            <div class="buttons">
              { this.state.isToggleOn > 0 ?  this.prevButton() : '' } 
              
              Page: {this.state.isToggleOn + 1}
                
              {this.state.isToggleOn < 5 ? this.nextButton() : this.submitButton()}
            </div>
      </div> 
    );
  }
  
  prevButton() {
      return (<button onClick={this.handleClick2}>
        Prev
      </button>); 
  }
  nextButton() {
      return (<button onClick={this.handleClick}>
        Next
      </button>); 
  }
  submitButton() {
      return (<input type="submit" value="Submit" />); 
  }
 
}