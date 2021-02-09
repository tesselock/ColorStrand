
import './App.css';
import Item from './Item';
import fakeData from './fakeData';
//this is a component that holds all the other componentsd
function App() {
 const datacomp= fakeData.map(d => {
   return (<Item name={d.name} email={d.email} />)
 })


  const varss = "trisaaa";
  //use curly braces to use javascript variables in JSX
  const styles = {
    backgroundColor: "#d8dde6",
    width : "30%",
    margin: "auto"
    // if there is supposed to be a dash like background-color, change it to 
    //camelcase
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {styles}>hello {varss} is me</h1>
        <Item name="placeholder" lastname="kek"/> 
        {datacomp}
        {/* name is the first prop */}
      </header>
    </div>
  );
}

export default App;
