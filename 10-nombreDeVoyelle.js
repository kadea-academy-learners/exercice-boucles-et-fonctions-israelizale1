/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  return 0;
  function nombreDeVoyelles(phrase) {
    let nombreDeVoyelle = 0;
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] == "a"){
        nombreDeVoyelle = nombreDeVoyelle + 1;
      } else if (phrase[i] == "e"){
        nombreDeVoyelle = nombreDeVoyelle + 1;
      } else if (phrase[i] == "i"){
        nombreDeVoyelle = nombreDeVoyelle + 1;
      } else if (phrase[i] == "o"){
        nombreDeVoyelle = nombreDeVoyelle + 1;
      } else if (phrase[i] == "u"){
        nombreDeVoyelle = nombreDeVoyelle + 1;
      } else if (phrase[i] == "y"){
        nombreDeVoyelle = nombreDeVoyelle + 1;
      }
    }
    return nombreDeVoyelle;
}

}
console.log(nombreDeVoyelles("Bonjour izale"));

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
