import Boton from './components/Boton';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [correctInfo, setCorrectInfo] = useState(false);
  const [incorrectInfo, setIncorrectInfo] = useState(false)
  const userInfo = {name: "ADL", pass: "252525"};
  const dataValidate = (e) => {
      e.preventDefault();
      if (name === userInfo.name && pass === userInfo.pass){
        setCorrectInfo(true)
      } else {
        setIncorrectInfo(true)
      }
      setName('');
      setPass('');
  };

  return (
        <>
            <h1 className='m-5'>Log In - App</h1>
            {correctInfo && <Alert className='m-5 w-25' key='success' variant='success'>
              Informacion correcta, iniciando sesion...
            </Alert>}
            {incorrectInfo && <Alert className='m-5 w-25' key='danger' variant='danger'>
            Datos incorrectos.
            </Alert>}
            <form className="m-5 w-25" onSubmit={(e) => dataValidate(e)}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}
                    value={name}/>      
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" onChange={(e) => setPass(e.target.value)}
                    value={pass}/>
                </div>
                <div className='mt-2' >
                {name !== '' && pass !== '' && <Boton text="Iniciar sesión"/>}
                </div>
            </form>
        </>
  );
}

export default App;


