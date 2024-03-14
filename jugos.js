/* 
Li Mei tiene una barra de jugos donde vende deliciosos jugos de frutas variados.
Eres un cliente frecuente de su tienda y te diste cuenta de que podías hacerle la vida más
fácil a tu amiga. Decides utilizar tus habilidades de codificación para ayudar a Li Mei con
su trabajo.
*/
//Funcion para el tiempo de preparacion
function timeToMixJuice(jugo) {
    switch(jugo) { //gracias profe :)
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
            return 1.5;
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}

//console.log(timeToMixJuice('Tropical Island'));

// 2_Reponer el suministro de rodajas de lima --------------------------------------------------------------------
const limasDisponibles = ["pequeña", "grande", "grande", "grande"];
const cantidadNecesaria = 30; //para el caso de 30 deberia dar 4
console.log(limesToCut(cantidadNecesaria, limasDisponibles)); 

function limesToCut(cantidadNecesaria, limasDisponibles) {
    let rodajasTotales = 0;
    let limasParaCortar = 0;

    for (let i = 0; i < limasDisponibles.length; i++) {
        const lima = limasDisponibles[i];
        let gajosPorLima;

        switch (lima) {
            case "pequeña":
                gajosPorLima = 6;
                break;
            case "mediana":
                gajosPorLima = 8;
                break;
            case "grande":
                gajosPorLima = 10;
                break;
            default:
                gajosPorLima = 0;
        }

        rodajasTotales += gajosPorLima;

        if (rodajasTotales >= cantidadNecesaria) { //romper ciclo cuando se alcancen las neceasrias
            limasParaCortar = i + 1;
            break;
        }
    }

    return limasParaCortar;
}



/*
Li Mei siempre trabaja hasta las 3 de la tarde. Luego su empleado Dmitry se hace cargo. A
menudo hay bebidas que se han pedido pero que aún no están preparadas cuando
termina el turno de Li Mei. Luego, Dmitry preparará los jugos restantes.
Para facilitar la entrega, implemente una función de pedidos restantes que toma la
cantidad de minutos que quedan en el turno de Li Mei y una variedad de jugos que se han
pedido pero que aún no se han preparado. La función debería devolver los pedidos que Li
Mei no puede empezar a preparar antes del final de su jornada laboral.
El tiempo restante en el turno siempre será mayor a 0. El arsenal de jugos a preparar nunca
estará vacío. Además, los pedidos se preparan en el orden en que aparecen en la matriz. Si
Li Mei comienza a mezclar cierto jugo, siempre lo terminará incluso si tiene que trabajar un
poco más. Si no quedan órdenes restantes de las que Dmitry deba encargarse, se debe
devolver una matriz vacía.*/


function jugosEnEspera(tiempoRestante, jugosRestantes)
{
    if (tiempoRestante <= 0 )
    {
        return "No se puede ejecutar esta función por un tiempo restante incongruente";
    }
    else if (jugosRestantes.length === 0)
    {
        return "No se puede usar esta función por un parametro de jugos restantes incongruente";
    }
    else
    {
        while(tiempoRestante > 0)
        {
            tiempoRestante = tiempoRestante - timeToMixJuice(jugosRestantes[0]);
            tiempoRestante.shift();
        }
        return jugosRestantes;
    }
} 

let jugosRestantes = ['All or Nothing', 'All or Nothing', 'Tropical Island', 'Energizer', 'Energizer', 'All or Nothing','Energizer','Energizer','Tropical Island','Pure Strawberry Joy'];
let turnoDmitri = jugosEnEspera(20,jugosRestantes);
