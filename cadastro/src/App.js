import logo from './logo.svg';
import './App.css';
import Cadastro from './Cadastro';

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="box_left">
          <div className="box_cadastro">
            <Cadastro/>
          </div>
          
        </div>
        <div className="box_right">

          <div className="box_logo">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <h1>App React</h1>

        </div>

      </div>

    </div>
  );
}

export default App;
