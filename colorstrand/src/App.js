
import './App.css';
//this is a component that holds all the other componentsd
function App() {
  const varss = "trisaaa";
  const styles = {
    backgroundColor: "blue"
    // if there is supposed to be a dash like background-color, change it to 
    //camelcase
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {styles}>hello {varss} is me</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
