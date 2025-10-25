import './App.css';
import { Boton } from './Components/Boton';
import { Item1 } from './Components/Item1';
import { Item2 } from './Components/Item2';
import { Item3 } from './Components/Item3';
import { Item4 } from './Components/Item4';
import { Item5 } from './Components/Item5';
import { Item6 } from './Components/Item6';

function App() {
  const prod = { nombre: "Remera", precio: 4000, descripcion: "estoy aprendiendo", children};
  

  return (
    <>
      <div>
        <Boton texto= {"Enviar"} color={"blue"}/>
        <Boton texto= {"Cancelar"} color={"red"}/>
        <Item1 nombre= {prod.nombre} precio={prod.precio} descripcion={prod.descripcion}/>
        <Item2 item= {prod}/>
        <Item3 {...prod}/>
        <Item4 {...prod} destacado={false}/>
        <Item5>
          <h1>Este tiene Children</h1>
          <p>{prod.nombre}</p>
          <p>{prod.precio}</p>
          <p>{prod.descripcion}</p>
        </Item5>
        <Item6>
          <h1>Este también tiene Children</h1>
          <p>{prod.nombre}</p>
          <p>{prod.precio}</p>
          <p>{prod.descripcion}</p>
        </Item6>

      </div>
     
    </>
  )
}

export default App
