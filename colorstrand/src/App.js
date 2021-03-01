
import './App.css';
import Item from './Item';
import fakeData from './fakeData';
import {useState } from 'react';
import Posts from './components/Posts';
//this is a component that holds all the other componentsd
//if you want to use state, you need a class based component\
//however hooks are for function
function App() {
  const [todos, setTodos] = useState([
    {
      todos: fakeData,
    }
  ]);

  const [names,setName] = useState("name goes here");
 const datacomp= fakeData.map((d,index) => {
   return (<Item key={index} name={d.name} email={d.email} checked={d.checked}/>)
 });


 const addTodo = text =>{
  setName(text);
   const newTodos = [...todos, {text}];
   setTodos(newTodos);
 }

  const varss = "trisaaa";
  //use curly braces to use javascript variables in JSX
  const styles = {
    backgroundColor: "#d8dde6",
    width : "30%",
    margin: "auto"
    // if there is supposed to be a dash like background-color, change it to 
    //camelcase

    //pass in the setstate as props and access it in item
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {styles}>hello {varss} is me {names}</h1>
        <Item name="placeholder" lastname="kek"/> 
        {datacomp}

        {/* name is the 
        first prop */}

        <Posts addTodo={addTodo}/>
      </header>
    </div>
  );
}


// class App extends Component{
//   constructor(){
//     //initializes part of the class
//     super()
//     this.state = {
//       //write if statement here?
//       todos: fakeData,
//       answer: "yes",
//       isTrue: false
//     }
//   }
//   render()
//   {
//     var vafr = "";
//     if (this.state.isTrue === true){
//       vafr = "yes";
//     }
//     else{
//       vafr = "no";
//     }
//     const datacomp= this.state.todos.map(d => {
//       return (<Item name={d.name} email={d.email} checked={d.checked}/>)
//     })
   
   
//      const varss = "trisaaa";
//      //use curly braces to use javascript variables in JSX
//      const styles = {
//        backgroundColor: "#d8dde6",
//        width : "30%",
//        margin: "auto"
//        // if there is supposed to be a dash like background-color, change it to 
//        //camelcase
//      }
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Posts/>
//           <h1 style = {styles}>is {varss} going to learn react? hopefully {vafr}</h1>
//           <Item name="placeholder" lastname="kek"/> 
//           {datacomp}
//           {/* name is the first prop */}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
