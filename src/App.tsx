//import React from 'react';
import './App.css';
import './index.css';
import React, {useState} from  'react';
import ReactDOM from 'react-dom/client';
import question from './Components/Questions';
import Results from './Components/Results';


function App() 
{
  const [curentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect: boolean) =>{
    if(isCorrect===true){
      // alert("Correct answer")
      setScore(score + 1)
    }
    const nextQuetsion = curentQuestion + 1;
    if(nextQuetsion < question.length){
      setCurrentQuestion(nextQuetsion);
    }else{
      // alert(" you have reached the end of the quiz....")
      setShowScore(true)
    } 
  }
  return (
    <div className="App"> 
      {showScore ?(
        <div className="score-section"> You scored {score} out of  {question.length}        
          <Results/>
       </div>             
      ) :(
      <>   
        <div style={{textAlign: "center"}}>
          <span >REACT QUIZ</span>
        </div>
        <div className="question-section">
          <span>Question {curentQuestion + 1}</span>/{question.length}
        </div>
        <div className="question-text"> {question[curentQuestion].questionText}</div>
        
        <div className="answer-section">
          {/* <button> Answer A</button>
          <button> Answer B</button>
          <button> Answer C</button>
          <button> Answer D</button> */}  
          {question[curentQuestion].answerOptions.map((answerOptions)=> 
          <button onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
        </div>        
      </>)}
    </div> 
  );
}
export default App;
