import './App.css';
import DisplayHeader from './Components/Header';
import DisplayHelp from './Components/Help';
import Game from './Components/Game';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <DisplayHeader />
      </div>

      <div className='game'>
        <Game />
      </div>

      <div className='help'>
        <DisplayHelp />
      </div>

    </div>
  );
}

export default App;
