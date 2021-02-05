
import './App.css';
import Item from './Item';
//this is a component that holds all the other componentsd
function App() {
  const varss = "trisaaa";
  //use curly braces to use javascript variables in JSX
  const styles = {
    backgroundColor: "blue"
    // if there is supposed to be a dash like background-color, change it to 
    //camelcase
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {styles}>hello {varss} is me</h1>
        <Item name="placeholder" lastname="kek"/> 
        <Item name="diff"/>
        <Item name= "number23"/>
        {/* name is the first prop */}
      </header>
    </div>
  );
}

export default App;
