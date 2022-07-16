//import React from 'react';
import logo from './aca.png';
import './App.css';
import React, {useState} from  'react';
import Answers from './feedback';

function App() {

  const question = [
    {
      questionText: "1. TypeScript is a ?",
      answerOptions: [
        {answerText: "A) strongly typed", isCorrect: false},
        {answerText: "B) object oriented", isCorrect: false},
        {answerText: "C) compiled language", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: true},
      
      ],
    },
    {
      questionText: "2. Which of the following are features of typeScript?",
      answerOptions: [
        {answerText: "A) TypeScript is just JavaScript", isCorrect: false},
        {answerText: "B) TypeScript supports other JS libraries", isCorrect: false},
        {answerText: "C) TypeScript is portable", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: true},
      
      ],
    },
    {
      questionText: "3. Extension of typescript is?",
      answerOptions: [
        {answerText: "A) .d.ty", isCorrect: false},
        {answerText: "B) .d.tp", isCorrect: false},
        {answerText: "C) .d.ts", isCorrect: true},
        {answerText: "D) .d.td", isCorrect: false},
      
      ],
    },
    {
      questionText: "4.  TypeScript supports Object Oriented Programming concepts like inheritance",
      answerOptions: [
        {answerText: "A) TRUE", isCorrect: true},
        {answerText: "B) FALSE", isCorrect: false},
        {answerText: "C) Can be true or false", isCorrect: false},
        {answerText: "D) Can not say", isCorrect: false},
      
      ],
    },
    {
      questionText: "5. How many components typescript has?",
      answerOptions: [
        {answerText: "A) 2", isCorrect: false},
        {answerText: "B) 3", isCorrect: true},
        {answerText: "C) 4", isCorrect: false},
        {answerText: "D) 5", isCorrect: false},
      
      ],
    },
    {
      questionText: "6. TypeScript is ?",
      answerOptions: [
        {answerText: "A) case-sensitive", isCorrect: true},
        {answerText: "B) Case-insensitive", isCorrect: false},
        {answerText: "C) depends on typescript version", isCorrect: false},
        {answerText: "D) Can not say", isCorrect: false},
      
      ],
    },
    {
      questionText: "7. TypeScript supports how many types of comments?",
      answerOptions: [
        {answerText: "A) 1", isCorrect: false},
        {answerText: "B) 2", isCorrect: true},
        {answerText: "C) 3", isCorrect: false},
        {answerText: "D) 4", isCorrect: false},
      
      ],
    },
    {
      questionText: "8. According to Grady Brooch, every object must have _________ features.",
      answerOptions: [
        {answerText: "A) 1", isCorrect: false},
        {answerText: "B) 2", isCorrect: false},
        {answerText: "C) 3", isCorrect: true},
        {answerText: "D) 4", isCorrect: false},
      
      ],
    },
    {
      questionText: "9. A ________ in terms of OOP is a blueprint for creating objects.",
      answerOptions: [
        {answerText: "A) constructor", isCorrect: false},
        {answerText: "B) method", isCorrect: false},
        {answerText: "C) function", isCorrect: false},
        {answerText: "D) class", isCorrect: true},
      
      ],
    },
    {
      questionText: "10. Semicolons are optional in TypeScript.",
      answerOptions: [
        {answerText: "A) Yes", isCorrect: true},
        {answerText: "B) No", isCorrect: false},
        {answerText: "C) Can be yes or no", isCorrect: false},
        {answerText: "D) Can not say", isCorrect: false},
      
      ],
    },
    {
      questionText: "11. Which of the following is true about Node.js?",
      answerOptions: [
        {answerText: "A) Node.js is an open source server environment.", isCorrect: false},
        {answerText: "B) Node.js allows you to run JavaScript on the server.", isCorrect: false},
        {answerText: "PC) Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: true},
      
      ],
    },
    {
      questionText: "12. Which of the following is false?",
      answerOptions: [
        {answerText: "A) Node.js can create, open, read, write, delete, and close files on the server", isCorrect: false},
        {answerText: "B) Node.js can generate static page content", isCorrect: true},
        {answerText: "C) Node.js can collect form data", isCorrect: false},
        {answerText: "D) Node.js can add, delete, modify data in your database", isCorrect: false},
      
      ],
    },
    {
      questionText: "13. Node.js files must be initiated in the?",
      answerOptions: [
        {answerText: "A) Command Prompt", isCorrect: true},
        {answerText: "B) nodejs Editor", isCorrect: false},
        {answerText: "C) Both A and B", isCorrect: false},
        {answerText: "D) None of the above", isCorrect: false},
      
      ],
    },
    {
      questionText: "14. Syntax to Initiate the Node.js File is?",
      answerOptions: [
        {answerText: "A) filename.js", isCorrect: false},
        {answerText: "B) javascript filename.js", isCorrect: false},
        {answerText: "C) node filename.js", isCorrect: true},
        {answerText: "D) node filename", isCorrect: false},
      
      ],
    },
    {
      questionText: "15. Which keyword is used to make properties and methods available outside the module file?",
      answerOptions: [
        {answerText: "A) import", isCorrect: false},
        {answerText: "B) module", isCorrect: false},
        {answerText: "C) exports", isCorrect: true},
        {answerText: "D) require", isCorrect: false},
      
      ],
    },
    {
      questionText: "16. Which method appends specified content to a file.",
      answerOptions: [
        {answerText: "A) fs.appendFile()", isCorrect: true},
        {answerText: "B) fs.open()", isCorrect: false},
        {answerText: "C) fs.writeFile()", isCorrect: false},
        {answerText: "D) None of the above", isCorrect: false},
      
      ],
    },
    {
      questionText: "17. Which of the following command will show version of Node?",
      answerOptions: [
        {answerText: "A) $ npm --version", isCorrect: false},
        {answerText: "B) $ npm getVersion", isCorrect: false},
        {answerText: "C) $ node getVersion", isCorrect: false},
        {answerText: "D) $ node --version", isCorrect: true},
      
      ],
    },
    {
      questionText: "18. What are the key features of Node.js?",
      answerOptions: [
        {answerText: "A) Real time Data intensive", isCorrect: false},
        {answerText: "B) Highly scalable servers for Web Applications", isCorrect: false},
        {answerText: "C) Builds fast and scalable network Applications", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: true},
      
      ],
    },
    {
      questionText: "19. which of the following areas, Node.js is not advised to be used?",
      answerOptions: [
        {answerText: "A) Single Page Applications", isCorrect: false},
        {answerText: "B) JSON APIs based Applications", isCorrect: false},
        {answerText: "C) CPU intensive applications", isCorrect: true},
        {answerText: "D) Data Intensive Realtime Applications (DIRT)", isCorrect: false},
      
      ],
    },
    {
      questionText: "20. The URL module splits up a web address into readable parts.",
      answerOptions: [
        {answerText: "A) TRUE", isCorrect: true},
        {answerText: "B) FALSE", isCorrect: false},
        {answerText: "C) Can be true or false", isCorrect: false},
        {answerText: "D) Can not say", isCorrect: false},
      
      ],
    },
    {
      questionText: "21. Which of the following is true about React?",
      answerOptions: [
        {answerText: "A) React is a JavaScript library for building user interfaces.", isCorrect: false},
        {answerText: "B) React is used to build single page applications.", isCorrect: false},
        {answerText: "C) React allows us to create reusable UI components.", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: true},
      
      ],
    },
    {
      questionText: "22. Which command is used Install create-react-app?",
      answerOptions: [
        {answerText: "A) npm install -g create-react-app", isCorrect: true},
        {answerText: "B) npm install create-react-app", isCorrect: false},
        {answerText: "C) npm install -f create-react-app", isCorrect: false},
        {answerText: "D) install -g create-react-app", isCorrect: false},
      
      ],
    },
    {
      questionText: "23. Initial Release to the Public (V0.3.0) was in ?",
      answerOptions: [
        {answerText: "A) 2011", isCorrect: false},
        {answerText: "B) 2012", isCorrect: false},
        {answerText: "C) 2013", isCorrect: true},
        {answerText: "MD) 2014", isCorrect: false},
      
      ],
    },
    {
      questionText: "24. A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword?",
      answerOptions: [
        {answerText: "A) constructor", isCorrect: true},
        {answerText: "B) class", isCorrect: true},
        {answerText: "C) object", isCorrect: false},
        {answerText: "D) dataObject", isCorrect: false},
      
      ],
    },
    {
      questionText: "25. To create a class inheritance, use the ________ keyword.",
      answerOptions: [
        {answerText: "A) create", isCorrect: false},
        {answerText: "B) inherits", isCorrect: false},
        {answerText: "C) extends", isCorrect: true},
        {answerText: "D) this", isCorrect: false},
      
      ],
    },
    {
      questionText: "26. In ES6, how many ways of defining your variables?",
      answerOptions: [
        {answerText: "A) 3", isCorrect: true},
        {answerText: "B) 4", isCorrect: false},
        {answerText: "C) 5", isCorrect: false},
        {answerText: "D) 6", isCorrect: false},
      
      ],
    },
    {
      questionText: "27. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any?",
      answerOptions: [
        {answerText: "A) createElement", isCorrect: false},
        {answerText: "B) appendChild", isCorrect: false},
        {answerText: "C) getElementById", isCorrect: false},
        {answerText: "D) Both A and B", isCorrect: true},
      
      ],
    },
    {
      questionText: "28. Does React creates a VIRTUAL DOM in memory.",
      answerOptions: [
        {answerText: "A) TRUE", isCorrect: true},
        {answerText: "B) FALSE", isCorrect: false},
        {answerText: "C) Can be true or false", isCorrect: false},
        {answerText: "D) Can not say", isCorrect: false},
      
      ],
    },
    {
      questionText: "29. Everything in react is a?",
      answerOptions: [
        {answerText: "A) Module", isCorrect: false},
        {answerText: "B) Package", isCorrect: false},
        {answerText: "C) Class", isCorrect: false},
        {answerText: "D) Component", isCorrect: true},
      
      ],
    },
    {
      questionText: "30. In React, component properties should be kept in an object called?",
      answerOptions: [
        {answerText: "A) component", isCorrect: false},
        {answerText: "B) super", isCorrect: false},
        {answerText: "C) state", isCorrect: true},
        {answerText: "D) props", isCorrect: false},
      
      ],
    },
    {
      questionText: "31. Which ReactJS command is used to set up everything you need to run a React Application?",
      answerOptions: [
        {answerText: "A) create-react-app", isCorrect: true},
        {answerText: "B) new-react-app", isCorrect: false},
        {answerText: "C) create-new-reactapp", isCorrect: false},
        {answerText: "D) react-app", isCorrect: false},
      
      ],
    },
    {
      questionText: "32. How to install create-react-app?",
      answerOptions: [
        {answerText: "A) npx create-react-app -new my-app", isCorrect: false},
        {answerText: "B) npx create-react-app -app my-app", isCorrect: false},
        {answerText: "C) npx new-react-app my-app", isCorrect: false},
        {answerText: "D) npx create-react-app my-app", isCorrect: true},
      
      ],
    },
    {
      questionText: "33. ES6 stands for ____.",
      answerOptions: [
        {answerText: "A) ECMAScript 6", isCorrect: true},
        {answerText: "B) Extended-JavaScript Version 6", isCorrect: false},
        {answerText: "C) Extensive-JavaScript 6", isCorrect: false},
        {answerText: "D) Expanded-JavaScript 6", isCorrect: false},
      
      ],
    },
    {
      questionText: "34. ECMAScript was created to standardize _____.",
      answerOptions: [
        {answerText: "A) TypeScript", isCorrect: false},
        {answerText: "B) Java", isCorrect: false},
        {answerText: "C) JSON", isCorrect: false},
        {answerText: "D) JavaScript", isCorrect: true},
      
      ],
    },
    {
      questionText: "35. In ES6 – A class is a type of ____.",
      answerOptions: [
        {answerText: "A) Basic datatype", isCorrect: false},
        {answerText: "B) Derived datatype", isCorrect: false},
        {answerText: "C) Variable", isCorrect: false},
        {answerText: "D) Function", isCorrect: true},
      
      ],
    },
    {
      questionText: "36. In ES6 – Which keyword is used to initiate a class?",
      answerOptions: [
        {answerText: "A) function", isCorrect: false},
        {answerText: "B) class", isCorrect: true},
        {answerText: "C) ReactClass", isCorrect: false},
        {answerText: "D) ReactClassJs", isCorrect: false},
      
      ],
    },
    {
      questionText: "37. In ES6 – Which keyword is used for class inheritance?",
      answerOptions: [
        {answerText: "A) extends", isCorrect: true},
        {answerText: "B) extend", isCorrect: false},
        {answerText: "C) inheritance", isCorrect: false},
        {answerText: "D) inheritances", isCorrect: false},
      
      ],
    },
    {
      questionText: "38. In ES6 – What is the correct syntax of class inheritance?",
      answerOptions: [
        {answerText: "A) class class1 extends class2{...}", isCorrect: true},
        {answerText: "B) class class1 extends | class2{...}", isCorrect: false},
        {answerText: "C) class class1 | extends class2{...}", isCorrect: false},
        {answerText: "D) class class1 | extends | class2{...}", isCorrect: false},
      
      ],
    },
    {
      questionText: "39. In ES6 – Which method refers to the parent class?",
      answerOptions: [
        {answerText: "A) parent()", isCorrect: false},
        {answerText: "B) super()", isCorrect: true},
        {answerText: "C) top()", isCorrect: false},
        {answerText: "D) main()", isCorrect: false},
      
      ],
    },
    {
      questionText: "40. In ES6 – Why arrow functions are used?",
      answerOptions: [
        {answerText: "A) To access pointer variable", isCorrect: false},
        {answerText: "B) To access variable of a class", isCorrect: false},
        {answerText: "C) Both A. and B.", isCorrect: false},
        {answerText: "D) Write shorter function syntax", isCorrect: true},
      
      ],
    },
    {
      questionText: "41. What is React.js?",
      answerOptions: [
        {answerText: "A) Open-source JavaScript back-end library", isCorrect: false},
        {answerText: "B) JavaScript front-end library to create a database", isCorrect: false},
        {answerText: "C) Free and open-source JavaScript front-end library", isCorrect: true},
        {answerText: "D) None of the mentioned", isCorrect: false},
      
      ],
    },
    {
      questionText: "42. Which of the following acts as the input of a class-based component?",
      answerOptions: [
        {answerText: "A) Class", isCorrect: false},
        {answerText: "B) Props", isCorrect: true},
        {answerText: "C) Factory", isCorrect: false},
        {answerText: "D) None of the mentioned", isCorrect: false},
      
      ],
    },
    {
      questionText: "43. React.js is written in which of the following language?",
      answerOptions: [
        {answerText: "A) C", isCorrect: false},
        {answerText: "B) C++", isCorrect: false},
        {answerText: "C) JavaScript", isCorrect: true},
        {answerText: "D) Java", isCorrect: false},
      
      ],
    },
    {
      questionText: "44. How many elements can a valid react component return?",
      answerOptions: [
        {answerText: "A) React doesn’t return element", isCorrect: false},
        {answerText: "B) 1 Element", isCorrect: true},
        {answerText: "C) More than 1 element", isCorrect: false},
        {answerText: "D) None of the mentioned", isCorrect: false},
      
      ],
    },
    {
      questionText: "45. In which of the following directory React Components are saved?",
      answerOptions: [
        {answerText: "A) Inside js/components/", isCorrect: true},
        {answerText: "B) Inside components/js/", isCorrect: false},
        {answerText: "C) Inside vendor/js/components/", isCorrect: false},
        {answerText: "D) Inside vendor/components/", isCorrect: false},
      
      ],
    },
    {
      questionText: "46. Which of the following command is used to Install create-react-app?",
      answerOptions: [
        {answerText: "A) npm install create-react-app", isCorrect: false},
        {answerText: "B) npm install -f create-react-app", isCorrect: false},
        {answerText: "C) npm install -g create-react-app", isCorrect: true},
        {answerText: "D) install -g create-react-app", isCorrect: false},
      
      ],
    },
    {
      questionText: "47. In which condition is the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?",
      answerOptions: [
        {answerText: "A) When the state of the component is updated", isCorrect: false},
        {answerText: "B) When a component is created for the first time", isCorrect: false},
        {answerText: "C) Both of the mentioned", isCorrect: true},
        {answerText: "D) None of the mentioned", isCorrect: false},
      
      ],
    },
    {
      questionText: "48. Which of the following is method is not a part of ReactDOM?",
      answerOptions: [
        {answerText: "A) ReactDOM.hydrate()", isCorrect: false},
        {answerText: "B) ReactDOM.destroy()", isCorrect: true},
        {answerText: "C) ReactDOM.createPortal()", isCorrect: false},
        {answerText: "D) All of the mentioned", isCorrect: false},
      
      ],
    },
    {
      questionText: "49. Which of the following is correct about prop in react?",
      answerOptions: [
        {answerText: "A) Can be changed inside another component", isCorrect: false},
        {answerText: "B) Can be changed inside the component", isCorrect: false},
        {answerText: "C) Cannot be changed in the component", isCorrect: true},
        {answerText: "D) All of the mentioned", isCorrect: false},
      
      ],
    },
    {
      questionText: "50. Which of the following is used to pass data to a component from outside in React?",
      answerOptions: [
        {answerText: "A) props", isCorrect: true},
        {answerText: "B) render with arguments", isCorrect: false},
        {answerText: "C) setState", isCorrect: false},
        {answerText: "D) PropTypes", isCorrect: false},
      
      ],
    },
    {
      questionText: "51. React is also known as _____.",
      answerOptions: [
        {answerText: "A) ReactJS", isCorrect: false},
        {answerText: "B) js", isCorrect: false},
        {answerText: "C) Both A. and B.", isCorrect: true},
        {answerText: "D) None of these", isCorrect: false},
      
      ],
    },
    {
      questionText: "52. React is a _________.",
      answerOptions: [
        {answerText: "A) Web development Framework", isCorrect: false},
        {answerText: "B) JavaScript Library", isCorrect: true},
        {answerText: "C) jQuery", isCorrect: false},
        {answerText: "D) Web Server", isCorrect: false},
      
      ],
    },
    {
      questionText: "53. Which ReactJS function renders HTML to the web page?",
      answerOptions: [
        {answerText: "A) render()", isCorrect: false},
        {answerText: "B) ReactDOM.render()", isCorrect: true},
        {answerText: "C) renders()", isCorrect: false},
        {answerText: "D) ReactDOM.renders()", isCorrect: false},
      
      ],
    },
    {
      questionText: "54. JSX stands for _____.",
      answerOptions: [
        {answerText: "A) JSON", isCorrect: false},
        {answerText: "B) JSON XML", isCorrect: false},
        {answerText: "C) JavaScript XML", isCorrect: true},
        {answerText: "D) JavaScript and AngularJS", isCorrect: false},
      
      ],
    },
    {
      questionText: "55. JSX allows us to write _____.",
      answerOptions: [
        {answerText: "A) jQuery in React", isCorrect: false},
        {answerText: "B) Angular Code in React", isCorrect: false},
        {answerText: "C) MySQL in React", isCorrect: false},
        {answerText: "D) HTML in React", isCorrect: true},
      
      ],
    },
    {
      questionText: "56. What is the correct syntax to write expression in JSX?",
      answerOptions: [
        {answerText: "A) [ expression ]", isCorrect: false},
        {answerText: "B) { expression }", isCorrect: true},
        {answerText: "C) {{ expression }}", isCorrect: false},
        {answerText: "D) _expression", isCorrect: false},
      
      ],
    },
    {
      questionText: "57. A class component must include the _______ statement.",
      answerOptions: [
        {answerText: "A) extends React.Component", isCorrect: true},
        {answerText: "B) extends React", isCorrect: false},
        {answerText: "C) extends Component", isCorrect: false},
        {answerText: "D) extends React.Component.All", isCorrect: false},
      
      ],
    },
    {
      questionText: "58. What are Props?",
      answerOptions: [
        {answerText: "A) Props are arguments passed into React components", isCorrect: true},
        {answerText: "B) Props are functions in the ReactJS", isCorrect: false},
        {answerText: "C) Props are used to returns multiple values from the function", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: false},
      
      ],
    },
    {
      questionText: "59. What does props stand for?",
      answerOptions: [
        {answerText: "A) Proper Arguments", isCorrect: false},
        {answerText: "B) Properties", isCorrect: true},
        {answerText: "C) Proper Return Values", isCorrect: false},
        {answerText: "D) All of the above", isCorrect: false},
      
      ],
    },
    {
      questionText: "60. Which ReactJS command is used to create a new application?",
      answerOptions: [
        {answerText: "A) create-react-app", isCorrect: true},
        {answerText: "B) new-react-app", isCorrect: false},
        {answerText: "C) create-new-reactapp", isCorrect: false},
        {answerText: "D) react-app", isCorrect: false},
      
      ],
    },
  ];
  
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
      // alert("oops! you have reached the end of the quiz....")
      setShowScore(true)
    }
    
  }

  return (
    <div className="App">
      {showScore ?(
        <div className="score-section"> You scored {score} out of  {question.length}</div>
       
      ) :

       (
      <>   
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
