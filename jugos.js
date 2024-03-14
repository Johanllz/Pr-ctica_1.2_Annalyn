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

