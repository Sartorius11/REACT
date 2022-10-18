function SaludoHijo(props){

    //INVENTAMOS UN NOMBRE DE VARIABLE PARA EL METODO
    //Y PARA LA RECEPCION DEL idhijo
    
    const {idhijo,metodoPadre}=props;


    return(<div>
        <h1>Eventos del Hijo ---- al Padre{idhijo}</h1>
        <button onClick ={()=> metodoPadre("soy el HIJO " + idhijo)}>
            LLamar metodo Padre
        </button>
    </div>)
}

export default SaludoHijo;