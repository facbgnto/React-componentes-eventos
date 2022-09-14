import react from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Input = ({estado, setEstado}) =>{
    return (

        <Form>
        <Form.Group className="mb-3"  controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text"  placeholder="Ingrese Nombre"/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese Contraseña"  onChange={(e) => setEstado(e.target.value)} value={estado}/>
        </Form.Group>
   
        
      </Form>
)


    
}

export default Input;
