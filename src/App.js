import logo from './logo.svg';
import './App.css';

export const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
    <h1> My name is {props.name}</h1>
    <h2> This is my first react app</h2>
    <h3> grosserylist </h3>
    
    {
      props.glistt.map(element=> <li> {element} </li>)
    }
    
      </header>
    </div>
  );
}

export function SecondComponent() {
  return (
    <div className="App">
      <header className="App-header">
    <h1> hello</h1>
    <h2> This is my first react app and I am using second component</h2>
      </header>
     {/* <App name="ram" glistt={["apple","Mango","grapes"]}/>*/}
    </div>
  );
}

 

