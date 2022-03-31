// Main.js par LAUDE Thibault 
"use strict";

// On ajoute le Array datas et ses sous-Array au balise select de la balise form
var suspects = document.getElementById("suspects"); // On va modifie le select de suspects
// Boucle For qui va ajouter toutes les données une par une
for (let i = 0; i < datas.suspects.length; i++) {
    var option = document.createElement("option");
    option.text = datas.suspects[i];
    suspects.add(option, suspects[i]);
}

var weapons = document.getElementById("weapons");// On va modifie le select de room
// Boucle For qui va ajouter toutes les données une par une
for (let i = 0; i < datas.weapons.length; i++) {
    var option = document.createElement("option");
    option.text = datas.weapons[i];
    weapons.add(option, weapons[i]);
}

var rooms = document.getElementById("rooms");// On va modifie le select de room
// Boucle For qui va ajouter toutes les données une par une
for (let i = 0; i < datas.rooms.length; i++) {
    var option = document.createElement("option");
    option.text = datas.rooms[i];
    rooms.add(option, rooms[i]);
}

// Fonction qui va resortir une données aléatoire d'un tableau
function randomDatas(datas) {
    var data = datas[Math.round(Math.random() * (datas.length - 1))];
    return data;
}


var suspect = randomDatas(datas.suspects); // On va retourner le suspect
var weapon = randomDatas(datas.weapons); // On va retourner l'arme
var room = randomDatas(datas.rooms); // On va retourner la salle

// Lorsqu'on click sur "J'accuse !", la fonction s'active
var accuse = document.getElementById("accusation");
accuse.addEventListener("click", showResult);

// Fonction qui va afficher le résultat avec les choix de l'utilisateur
function showResult() {
    // console.log("Le tueur est " + suspect + " avec le/la " + weapon + " dans le/la " + room);

    document.querySelector("form").hidden = true; // On cache le formulaire envoyé
    // On va afficher en HTML le résultat du meutre
    document.querySelector("body").innerHTML +=
        "<p> Vous accusez " + document.querySelector("#suspects").value +
        " d'avoir tué le Docteur LENOIR avec la/la " + document.querySelector("#weapons").value +
        " dans la/le " + document.querySelector("#rooms").value + "</p>";

    // Affichage du tableau pour savoir ce qui est vraie
    document.querySelector("body").innerHTML +=
        "<table> <tr> Coupable <td>" + document.querySelector("#suspects").value +
        "</td></tr> <tr> <td>" + "?" + "</td> </tr>" +
        "<tr> Arme <td>" + document.querySelector("#weapons").value +
        "</td> </tr><tr><td>" + "?" + "</td>  </tr>" +
        "<tr> Pièce  <td>" + document.querySelector("#rooms").value +
        "</td> </tr> <tr> <td>" + "?" + "</td>  </tr> </table>";

    // Condition if si les valeurs sont les bonnes
    if ((suspect == document.querySelector("#suspects")) || (weapon == document.querySelector("#weapons")) || (room == document.querySelector("#rooms"))) {
        // console.log("Bravo vous avez réussi !");
        document.querySelector("body").innerHTML += "<h2>Et vous avez vu juste ! BRAVO !</h2>";
    }
    else { // Else si les valeurs ne sont pas correctes
        // console.log("Vous avez raté !");
        document.querySelector("body").innerHTML += "<h2>Et c'est raté</h2>";
        document.querySelector("body").innerHTML +=
            "<p>C'est " + suspect + " qui a tué le Docteur LENOIR avec la/le " + weapon + " dans la/le " + room + "</p>";
    }
}
