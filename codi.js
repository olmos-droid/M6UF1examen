/*Prova escrita de programació en Javascript sintaxi bàsica
Fer el següent programa en Javascript. Posar l'algoritme en pseudocodi com comentari multilinea al principi del codi Javascript.

Un vigilant de seguretat d'un museu fa una ronda de vigilància cada hora passant per les 12 sales del museu.

La seva jornada de treball és de 8 hores.

Al final ha de generar un informe d'incidències hora a hora des de la seva hora d'entrada fins la sortida amb aquest aspecte:

Resum incidències

-------------------------

Hora 3:00 Sense incidències.

Hora 4:00 Sense incidències.

Hora 5:00

Sala 3 Localitzat objecte

Sala 5 Finestres obertes

Hora 6:00 Sense incidències

Hora 7:00

Sala 12 Objecte sospitós

Hora 8:00 Sense incidències

Hora 9:00 Sense incidències

Hora 10:00 Sense incidències

Les incidències son fenòmens aleatoris amb les següents possibilitats

Per cada 100 vegades que visita una sala es troba de manera aleatòria amb les següents probabilitats:

1 vegada Finestres obertes

1 vegada Brutícia a la sala

1 vegada Objecte perdut

1 vegada Objecte sospitós

96 vegades cap incidència

1 Cada 10.000 vegades es troba un robatori

Quan es troba amb un robatori la ronda acaba en aquell mateix moment i dispara la alarma.

Resum incidències

-------------------------

Hora 3:00 Sense incidències.

Hora 4:00 Sense incidències.

Hora 5:00

Sala 5 Finestres obertes

Hora 6:00 Sense incidències

Hora 7:00

Hora 8:00 Sense incidències

Hora 9:00 Sense incidències

Sala 12 Objecte sospitós

Sala 13 ROBATORI!!!

ALARMA ALARMA ALARMA*/

//aquesta funcio tira el dau oi li passa per parametre el jugador que tira el dau
/*
faig un bucle que pasi per cada hora de les que treballa
dins les hores un bucle que pasa per totes les sales
dins les sales miro si hi ha hagut un robatori o no .
sino hi ha robatori miro la incidencia
si hi ha hagut robatori salta la alarma







*/

const minPo = 0; //
const maxPo = 100; //
const minRob = 0; //
const maxRob = 10000; //
const horaEntrada = 2;
const horaSortida = 10;
const minSales = 1;
const maxSales = 12;
function generarPosibilitat(numMax, numMin) {
    let resul = Math.random() * (numMax - numMin) + numMin;

    return Number.parseInt(resul);
}
function mirarRobatori() {
    var numRobatori = generarPosibilitat(minRob, maxRob);
    if (numRobatori == minRob) {
        return true;
    }
    return false;
}

function generarInforme() {
    var robatori = false;
    for (let hora = horaEntrada; hora < horaSortida; hora++) {
        if (!robatori) {
            var incidencia = false;
            console.log("Hora:" + hora);
            for (let sala = minSales; sala < maxSales; sala++) {
                var numIncidencia = generarPosibilitat(minPo, maxPo);

                if (!mirarRobatori()) {
                    switch (numIncidencia) {
                        case 1:
                            console.log("Sala: " + sala + " Finestres obertes");
                            incidencia = true;
                            break;
                        case 2:
                            console.log(
                                "Sala: " + sala + " Brutícia a la sala"
                            );
                            incidencia = true;
                            break;
                        case 3:
                            console.log("Sala: " + sala + " Objecte perdut");
                            incidencia = true;
                            break;

                        case 4:
                            console.log("Sala: " + sala + " Objecte sospitós");
                            incidencia = true;
                            break;
                    }
                } else {
                    robatori = true;
                    console.log("ALARMA ALARMA");

                    
                }
                
            }
            if (!incidencia && !robatori) {
                
                console.log(" Sense insidencies");
            }
        }
    }
}

function comprovaAlarma(params) {}
