import './App.css';
import Covid from './Components/Covid';
import livebutton from './livebutton.svg'

function App() {
  
  return (
    <div className='App'>
      <h3>Updating-Live</h3>
      <img src={livebutton} width={120} alt='live' />
      <h1>Covid 19 Karnataka Tracker</h1>
      <Covid/>
    </div>
  );
}
export default App;
