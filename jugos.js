/* 
Li Mei tiene una barra de jugos donde vende deliciosos jugos de frutas variados.
Eres un cliente frecuente de su tienda y te diste cuenta de que podías hacerle la vida más
fácil a tu amiga. Decides utilizar tus habilidades de codificación para ayudar a Li Mei con
su trabajo.
*/
//1_ Funcion para el tiempo de preparacion---------------------------------------------------------------------
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
