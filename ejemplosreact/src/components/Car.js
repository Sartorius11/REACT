import{useState} from 'react';

function Car(props){
    //TENDREAMOS UNA VARIABLE PARA AVERIGUAR SI EL COHE 
    //ESTA ARRANCADO O NO...
    const[estado,setEstado]= useState(false);
    //TENDREMOS OTRA VARIABLE PARA VISUALIZA LA VELOCIDAD
    //DEL VEHICULO
    const [velocidad,setvelocidad]=useState(0);



    //VAMOS A CREAR UN OBJETO QUE CONTENGA
    //LAS PROPS QUE HEMOS RECIBIDO

    var coche={
        marca: props.Marca,
        modelo: props.modelo,
        aceleracion: parseInt(props.Aceleracion),
        velocidadMaxima: parseInt(props.VelocidadMaxima)
    };

    //CREAMOS UN METODO PARA DEVOLVER EL ESTADO DEL COCHE 
    //CON UN DIBUJO HTML

    const comprobarEstado=()=>{
        if(estado==true){
            return(<h1 style={{color:"green"}}>Arrancado</h1>);
        }else{
            return(<h1 style={{color:"red"}}>Detenido</h1>);
        }
    }

    //VAMOS A REALIZAR UN METODO PARA ACELERAR EL VEHICULO
    const aceleracionCoche=()=>{
        if(estado==false){
            alert("El coche esta detenido");
            setvelocidad(0);
        }else{
            if(velocidad>= coche.velocidadMaxima){
                setvelocidad(coche.velocidadMaxima);
            }else{
                setvelocidad(velocidad+ coche.aceleracion);
            }
        }
    }


    return(<div>
        <h1 style={{color: "fuchsia"}}>Component Car {coche.marca},{coche.modelo}</h1>
        <div>
            {comprobarEstado()}
        </div>

        <h1> Velocidad actual {velocidad}km/hora</h1>

       <button onClick={ () =>{
        setEstado(!estado);
       }}>
            Arrancar/Detener
        </button>


       <button onClick={  () => aceleracionCoche()}>
             Acelerar Coche
       </button>





    </div>)
}
export default Car;