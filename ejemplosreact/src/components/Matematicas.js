function Matematicas(props){

    const {numero,metodo}=props;


    const dobleNumero=(n1)=>{
        console.log(n1*2);
    }



    return(
        
        <div>
            <h1> Matematicas {numero}</h1>
            <h2> Matematicas2 {numero}</h2>
            <button onClick ={()=>dobleNumero(numero)}>
                LLamar matematicas *2
            </button>

            <button onClick ={()=>metodo(numero)}>
                LLamar matematicas *3
            </button>
        </div>

    );
}

export default Matematicas;