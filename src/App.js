import Button from './components/Boton';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const emptyInput = (name === '' && pass === '');
  const dataValidate = (e) => {
      e.preventDefault();
      if(emptyInput){
        setError(true)
        return
      }
      setError(false)
      setName('');
      setPass('');
  };
  
  return (
        <>
            <h1 className='m-5'>Log In - App</h1>
            <form className="m-5 w-25" onSubmit={(e) => dataValidate(e)}>
            {error ? <p>Todos los campos son obligatorios</p> : null}
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}
                    value={name}/>      
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="text" className="form-control" onChange={(e) => setPass(e.target.value)}
                    value={pass}/>
                </div>
                <div className='mt-2'>
                  <Button text="Iniciar sesión"/>
                </div>
            </form>
            <div className='h2 m-5'>{name} - {pass}</div>
        </>
  );
}

export default App;
