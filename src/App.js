import React, {useState} from 'react';

function App(props) {
  const currDate = new Date();
  const [counter, setCounter] = useState(0);

  let incrementCounter = ()=> {
    setCounter(counter+1);
  }
  let colorStyle = {color:props['color'],fontSize:props['size']}



  return (

  <div>
    <div>
      <h1>Hello, world!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      <h2>The date today is {currDate.toLocaleDateString() }.</h2>
    </div>

    <div style={colorStyle}>
        React Component
        <br /><br />
        <button onClick={incrementCounter}>Click Me!</button>
        <br /><br />
        {counter}
      </div>
  </div>


  );
}

export default App;

