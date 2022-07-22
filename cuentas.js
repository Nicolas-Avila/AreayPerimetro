var perimetro = (lado) => lado * 4;

function CalculaPerimetro() {
    let input = document.getElementById('cuadrado')
    let valor = Number(input.value)

    const resultado = `El perimetro del cuadrado es de ${perimetro(valor)} cm`;
    document.getElementById('resultado').innerText= resultado ;

}
var area = (lado) => lado*lado;
function CalcularArea() {
    let input = document.getElementById(`cuadrado`);
    let valor = Number(input.value);

    const resultado = `El area del cuadrado es de ${area(valor)} cm2`
    document.getElementById(`resultado`).innerText=resultado;
}

//rectangulo
function PeriRectangulo() {
    var lado1 = Number(document.getElementById(`medida1`).value);
    var lado2 = Number (document.getElementById(`medida2`).value);
    let Cuenta= lado1*2+lado2*2;
    const Respuesta = `El perimetro del rectangulo es de ${Cuenta} cm`
    document.getElementById(`Resultado-Rectangulo`).innerText=Respuesta;
    }
    function AreaRectangulo() {
    var lado1 = Number(document.getElementById(`medida1`).value);
    var lado2 = Number (document.getElementById(`medida2`).value);
    let Cuenta= lado1*lado2;
    const Respuesta= `El area del rectangulo es de ${Cuenta} cm2`
    document.getElementById(`Resultado-Rectangulo`).innerText=Respuesta;
    }

    //triangulo
    function PerimetroTriangulo() {
        var lado = Number(document.getElementById(`lado1`).value)
        var lado2 = Number(document.getElementById(`lado2`).value)
        var lado3 = Number(document.getElementById(`lado3`).value)
        const Respuesta =`El perimetro del cuadrado es de ${lado+lado2+lado3} cm`
        document.getElementById(`Resultado-Triangulo`).innerText=Respuesta
    }

    function AreaTriangulo() {
        var lado = Number(document.getElementById(`lado4`).value)
        var lado2 = Number(document.getElementById(`lado5`).value)
        const Respuesta =`El perimetro del cuadrado es de ${lado*lado2} cm`
        document.getElementById(`Area`).innerText=Respuesta

    }