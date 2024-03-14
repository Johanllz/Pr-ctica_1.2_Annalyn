function determinarAcciones(caballeroDurmiendo, arqueroDormido, prisioneroDespierto, perroPresente) {
    let accionesPosibles = [];

    if (caballeroDurmiendo) {
        accionesPosibles.push("Ataque rápido - le toma tiempo ponerse la armadura, por lo que es vulnerable.");
    }

    if (!caballeroDurmiendo || !arqueroDormido) {
        accionesPosibles.push("Espía - ya que al menos uno de ellos está despierto. ");
    }

    if (prisioneroDespierto && arqueroDormido) {
        accionesPosibles.push("Señalizar al prisionero - se puede señalar al prisionero con sonidos de pajaros, como claves secretas");
    }

    if (perroPresente) {
        if (arqueroDormido) {
            accionesPosibles.push("Rescate del prisionero - El caballero le teme al perro, y el arquero esta mimiendo");
        }
    } else { //No hay perro
        if (prisioneroDespierto && !caballeroDurmiendo && !arqueroDormido) {
            accionesPosibles.push("Rescate del prisionero - Hay que ser astutos");
        }
    }

    return accionesPosibles;
}

const accionesDisponibles = determinarAcciones(true, true, true, true);
console.log(accionesDisponibles); 
// Parece que todas las acciones estan hechas, aunque tal vez me faltan mas acciones con el perro