import logo from './logo.svg';
import Form from 'react-bootstrap/Form'

import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './App.css';

function App() {
  const [estado, setEstado] = useState('');
  return (
    <div class="container">
        <div class="row p-3 justify-content-center">
                    <div class=" p-3  bg-dark text-white text-center ">
                      <h3>Desafío 2 - Estado de los componentes y eventos</h3>
                    </div>
        </div>
        <div  class="row p-3 justify-content-center">
          <div  id="forms" class=" p-3  bg-dark text-white ">
              <div className="App">
              <Input estado={estado} setEstado={setEstado}/>
              {estado === "252525" && <Button>Ingresar</Button>}
              
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
