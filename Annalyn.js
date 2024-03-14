function determinarAcciones(caballeroDurmiendo, arqueroDormido, prisioneroDespierto, perroPresente) {
    let accionesPosibles = [];

    if (caballeroDurmiendo) {
        accionesPosibles.push("Ataque rápido - le toma tiempo ponerse la armadura, por lo que es vulnerable.");
    }

    if (!caballeroDurmiendo || !arqueroDormido) {
        accionesPosibles.push("Espía - ");
    }

    if (prisioneroDespierto && arqueroDormido) {
        accionesPosibles.push("Señalizar al prisionero");
    }

    if (perroPresente) {
        if (arqueroDormido) {
            accionesPosibles.push("Rescate del prisionero");
        }
    } else {
        if (prisioneroDespierto && !caballeroDurmiendo && !arqueroDormido) {
            accionesPosibles.push("Rescate del prisionero");
        }
    }

    return accionesPosibles;
}

const accionesDisponibles = determinarAcciones(true, true, true, true);
console.log(accionesDisponibles); 
// Parece que todas las acciones estan hechas, aunque tal vez me daltan mas acciones con el perro