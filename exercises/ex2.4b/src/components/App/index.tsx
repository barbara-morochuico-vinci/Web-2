import User from '../User';
import './App.css'

function App() {

  const name1 = "Aurore";
  const age1 = 26;

  const name2 = "Léa";
  const age2 = 20;

  const name3 = "Jules";
  const age3 = 23;

  return (
    
    <div>
      <User name={name1} age={age1} isOnline={true}>
      </User> 
      <User name={name2} age={age2} isOnline={false}>
      </User>
      <User name={name3} age={age3} isOnline={true}>
      </User>
    
    </div>
  );
}

export default App
