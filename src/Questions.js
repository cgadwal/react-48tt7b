import React from 'react';

export class Questions extends React.Component {
  render() {
    const question1 = ['question1', 'answer1', 'answer2', 'answer3', 'answer4']
  const question2 = ['question2', 'answer1', 'answer2', 'answer3', 'answer4']
  const questions = [question1, question2]
  
  const questions = questions.map(question => {
      return (
        <div>
            <p>{question[0]}</p>
            <input type="radio" id={question[1]} name={question[0]} value={question[1]} />
            <label for={question[1]}>{question[1]} </label>
            <br />
            
            <input type="radio" id={question[2]} name={question[0]} value={question[2]} />
            <label for={question[2]}>{question[2]} </label>
            <br />

            <input type="radio" id={question[3]} name={question[0]} value={question[3]} />
            <label for={question[3]}>{question[3]} </label>
            <br />

            <input type="radio" id={question[4]} name={question[0]} value={question[4]} />
            <label for={question[4]}>{question[4]} </label>
            <br />
       </div>   
       
      );
    });

    return ( 
      <div>
          <form action="/submit.php">
            <nav>{questions}</nav> 
            <br />
            <input type="submit" value="Submit" />
          </form>
      </div> );

  }
}