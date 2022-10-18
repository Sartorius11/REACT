import gollum from'./../assets/gollum.jpg';


function SumarNumeros(props) {

var imageSize={
    with:"150px", height:"150px"
}

const SumarNumeros = (n1,n2) => {
var n1 = parseInt(props.numero1);
var n2 = parseInt(props.numero2);
  // var n1 = numero;
  // var n2 = numero2;
   var suma = n1 + n2;
  console.log(suma);

};

return (
  <div>

    <h1> La suma de numeros </h1>

    <button onClick={() => SumarNumeros()}>La suma  de 3 + 8 =(mire la consola)</button>{" "}
    <br></br>
    <br></br>
    <img src={gollum}/>
  </div>
);
}

export default SumarNumeros;