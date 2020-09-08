import React from 'react';
import { BallResizer } from "./Slider";

export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pageNumb: 0};

    // This binding is necessary to make `this` work in the callback
    this.nextButtonClick = this.nextButtonClick.bind(this);
    this.prevButtonClick = this.prevButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  nextButtonClick() {
    this.setState({pageNumb: this.state.pageNumb + 1});

  }
  
  prevButtonClick() {
    this.setState({pageNumb: this.state.pageNumb - 1});
  }

  handleChange(e) {
    const number = e.target.name; 
    const name = Number(e.target.value);
    if (typeof name === 'string' || name instanceof String || isNaN(name)) {
        const answer = e.target.value;
        this.props.onChangeName(number, answer);
    }
    else {
      const certainity = e.target.value - 150;
      this.props.onChangeName(number, certainity);
    }
  
  }

  handleChangeForCertainity(e) {
    const certainity = e.target.value - 150;
    const number = e.target.name; 

    console.log('certainity ' + certainity); 
    console.log('number ' + number); 
    this.props.onChangeName(number, null, certainity);
  }

  submit() {
    //to do: implement
  }

  render() {
    
    let allquestions = [
    {number: 1, questionTitle: 'Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?', answer1: 'Armando Dippet', answer2: 'Albus Dumbledore', answer3: 'Phineas Nigellus Black', answer4: 'Brutus Scrimgeour'},
    {number: 2, questionTitle: 'Which creatures pull the carriages that take students from the Hogwarts Express to the Castle?', answer1: 'Hippogriffs', answer2: 'Thestrals', answer3: 'Centaurs', answer4: 'Manticores'},
    {number: 3, questionTitle: 'How many staircases does Hogwarts have?', answer1: '142', answer2: '143', answer3: '152', answer4: '163'},
    {number: 4, questionTitle: 'What is the name of the room Harry uses to teach Dumpledore\'s Army?', answer1: 'The Restricted Section of the Library', answer2: 'The Girls Bathroom on the First Floor', answer3: 'The Perfect\'s Bathroom', answer4: 'The Room of Requirement'}, 
    {number: 5, questionTitle: 'What is the name of the book Hermione supposes Voldemore used to learn about Horcruxes?', answer1: 'Magik Moste Evil', answer2: 'Secrets of the Darkest Art', answer3: 'A guide to Medieval Socery', answer4: 'Moste Potente Potions'}, 
    {number: 6, questionTitle: 'Slughorn teaches his students that Amortentia smells different to each person. What food does Harry smell?', answer1: 'Pumpkin juice', answer2: 'Mrs. Weasley\'s Fudge', answer3: 'Lemon Drops', answer4: 'Treacle Tart'}
    ]; 

  const questions = allquestions.map(question => {
      return (
        <div>
            <div className="bar">
              {question.questionTitle}
            </div>
            <div>
            <input type="radio" id={question.answer1} name={question.number} value={question.answer1} onClick={this.handleChange}/>
            <label htmlFor={question.answer1}>{question.answer1} </label>
            <br />
            
            <input type="radio" id={question.answer2} name={question.number} value={question.answer2} onClick={this.handleChange}/>
            <label htmlFor={question.answer2}>{question.answer2} </label>
            <br />

            <input type="radio" id={question.answer3} name={question.number} value={question.answer3} onClick={this.handleChange}/>
            <label htmlFor={question.answer3}>{question.answer3} </label>
            <br />

            <input type="radio" id={question.answer4} name={question.number} value={question.answer4} onClick={this.handleChange}/>
            <label htmlFor={question.answer4}>{question.answer4} </label>
            </div>
            <br /><br />
            Level of certainity: 
            <div className="ballSlider" onChange={this.handleChange} >
              <BallResizer initialSize={150} minSize={150} maxSize={250} questNumb={question.number} />
              
            </div>
       </div>   
       
      );
    });

    return ( 
      <div>
            <nav>{questions[this.state.pageNumb]}</nav> 
            <br />
            <div class="buttons">
              { this.state.pageNumb > 0 ?  this.prevButton() : '' } 
              &nbsp;
              Page: {this.state.pageNumb + 1}
              &nbsp;
              {this.state.pageNumb < 5 ? this.nextButton() : this.submitButton()}
            </div>
      </div> 
    );
  }
  
  prevButton() {
      return (<button className="previous round" onClick={this.prevButtonClick}>
        &#8249;
      </button>); 

  }
  nextButton() {
      return (<button className="next round" onClick={this.nextButtonClick} >
        &#8250;
      </button>); 
  }
  submitButton() {
      return (<input type="submit" value="Submit" />); 
  }
 
}