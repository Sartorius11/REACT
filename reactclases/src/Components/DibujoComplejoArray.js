import { Component } from "react";

class DibujosComplejosArray extends Component{
    //ALMACENAMOS DENTRO DEL state UN ARRAY
    // DE String (nombres)

    state ={
        nombres: ["Lucia", "Diana", "Adrian", "Marcos","Carlos"]

    }

    nuevoNombre = () => {
        //COMO ANADIMOS ELEMENTOS A UNA ARRAY?
        //CON EL PUSH!!

        this.state.nombres.push("Nuevo Nombre");

        //se actualiza la tabla
        this.setState({
            nombres: this.state.nombres
        });
    }


    render(){
        return (<div>
            <h1>Dibujo Complejos Array</h1>

            <button onClick={this.nuevoNombre}>
                Crear nombre
            </button>
            {
                // codigo logico con LENGUAJE REACT
                this.state.nombres.map((name,index)=>{
                    //ESTE CODIGO SE EJECUTA POR CADA ELEMENTO 
                    //NUNCA PODEMOS DEJARLO VACIO
                    //SIEMPRE DEBE DEVOLVER UN return
                    return (<h3 style={{color:"red"}} key={index}>
                        {name}
                    </h3>)
                })
            }
        </div>)
    }
}
 export default DibujosComplejosArray;