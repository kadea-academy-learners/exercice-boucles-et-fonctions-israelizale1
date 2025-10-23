/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  // Vérifier le nombre d'arguments
  if (arguments.length !== 2) 
  return undefined;


  // Vérifier les types
   else if (typeof a !== "number" || typeof b !== "number") 
  return undefined;
  else if (typeof a === "number" && typeof b === "number" ) 

  return a * b;
}



// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }

multiplication(3, 4);