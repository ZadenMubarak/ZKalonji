import logo from './logo.svg';
import './App.css';

function publish_book(){
  return(
    <div className="Publish">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*buttons for the main window*/}
        <button class="Publish" onclick="alert('published')" >Publish-Book</button>
        <p>
          Edit <code>Reach-Library-App</code> and save to reload.
        </p>
        <a>
          
        </a>
      </header>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <title>Library Application-Dashboard</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*buttons for the main window*/}
        <button></button>
        <p>
          Edit <code>Reach-Library-App</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
