import './App.css';
import AxiosGet from './AxiosGet.jsx'
import AxiosPost from './AxiosPost.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">SmolGPT</p>
        <AxiosGet/>
        <AxiosPost/>
      </header>
    </div>
  );
}

export default App;
