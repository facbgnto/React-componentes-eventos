import {useState} from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState(false);

    const validarInput = (e) => {
        e.preventDefault();
        if (nombre === '' || apellido === '' || edad === '' || email === ''){
            setError(true)    
           return
        }
        setError(false)
    }

    return (
            <form onSubmit={validarInput}>
                 {error ? <p className="error">Debes ingresar tu nombre</p> :null}
                <h3>{nombre}</h3>
               

                <div className="form-group">
   
                    <label>Nombre</label>
                    <input type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </div>
                    <div className="form-group">
                    <label>Apellido</label>
                    <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                    />
                    </div>
                    <div className="form-group">
                    <label>Edad</label>
                    <input
                    type="text"
                    name="edad"
                    className="form-control"
                    onChange={(e) => setEdad(e.target.value)}
                    value={edad}
                    />
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                    </div>
                    <button className="btn btn-dark mt-3" type="submit">Enviar</button>
                
               
            </form>
            )
    }
export default Formulario;