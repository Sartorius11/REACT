import logo from './logo.svg';
import './App.css';
import SumarNumeros from './components/SumarNumeros';
import SaludoHijo from './components/SaludoHijo';
import Matematicas from './components/Matematicas';
import Contador from './components/contador';
import Car from './components/Car';

function App() {




  // //QUEREMOS UN METODO EN PARENT QUE SEA 
  // //LLAMADO DESDE EL HIJO
  // const metodoPadre=(descripcion)=>{
  //   console.log("EY " + descripcion);
  // }

  // const tripleNumero=(n2)=>{
  //  console.log(n2*3)
        
  // }

 
  

  return (
    <div className="App">
      <h1>Componente App</h1>

      <Car Marca ="Audi" Modelo="Q4" Aceleracion="20"
        VelocidadMaxima="240"/>

      <Car Marca ="BMW" Modelo="R3" Aceleracion="40"
        VelocidadMaxima="280"/>







      {/* <Contador inicio="10"/>

      {/* ENVIAMOS EL METODO DEL PADRE AL HIJO CON 
      UN NOMBRE DE PROPS  */}

    {/* <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
    <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
    <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/> */}

    {/* <Matematicas numero="9" metodo={tripleNumero}/> */} 
    {/*ENVIAMOS  EL METODO DEL PADRE AL HIJO  NOMBRE DE PROPS */}



    
    </div>
  );



}

export default App;
