// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  //otra opcion: let matrizResultante = Object.entries(objeto);
  //return matrizResultante;

  // PREGUNTA, HACE FALTA PUSHEAR TODO JUNTO Y COMO?

  var nuevaMatriz= [];

  for(key in objeto){
   // var matrizInterna = [];
    //matrizInterna.push(objeto.key);
   // matrizInterna.push(objeto['key']);
    //nuevaMatriz.push(matrizInterna);
  }

  return nuevaMatriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  //1.recorrer el string con un for
  //2.hacer un contador y acumulador por cada letra (string[i]) dentro del for 
  //3. contruir un objeto vacio
  //4.asignar el strig[i] como key y el acumulador como valor en el objeto

  ///CORREGIR CON UN IF PARA SI TIENE O NO
  
  //var numeroCaracteres = 0;
  var objeto = {};

  for(let i = 0; i < string.lenght; i++){
    //objeto.key = string[i];
   // numeroCaracteres = string[i] + numeroCaracteres;
    //objeto['key'] = numeroCaracteres;
  }

  return objeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  //usar metodo sort
  // identificar letras mayusculas
  //reordenar mayus y minus
  // crear dos variables  y acumular dentro y luego concatenar


  for(let i = 0; i < s.lenght; i ++ ){    
    if(s[i] === s[i].toUpperCase){
    // s.sort();
    }
  }
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //usar un bucle for decreciente
//for(let i = str.lenght; i > 0; i--){
   // var letra = string[i]
   // return letra; 
  //}

let frase = str.split(" ").map(function(palabra){
  return palabra.split("").reverse().join("")
}).join(" ");
 return frase;
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí


  var string = numero.toString;
  var stringInvertida = string.split("").reverse().join("");

  if(string === stringInvertida){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }


  /// REVISAR ////
  //var auxiliar = 0;

  //while(numero > 0){
    //var digito = numero % 10;
    //numero = Math.trunc(numero/10);
   // auxiliar = auxiliar * 10 + digito

  //}

  //if(auxiliar = numero){
    //return 'Es capicua';
  //}else{
    //return 'No es capicua';
  //}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
//PROBAR A LA INVERSA DEJANDO LAS letras que NO SON ABC, dentro de una nv variale vacia;

  var validacion = cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] || 'c';

  for(let i =0; i < cadena.lenght; i++){
    if(validacion){
      var letrasPararEliminar = cadena[i];
      cadena.pop(letrasPararEliminar);
    }
  }

  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //comprobar longitude de cadena
  //comparar con un for todas las cadenas
  //ordenarlas de menor a mayor

 // var palabraMasLarga = "";
 var recorrido = true;
while(recorrido){
  recorrido = false;
  for(let i = 0; i < arr.lenght-1; i ++ ){
    if(arr[i].lenght > arr[i+1].lenght){
     var  palabraMasLarga = arr[i];
    // arr[i] = arr[i+1]
     //arr[i+1] = palabraMasLarga;
     recorrido = true;
    }
  }
}

  //arr.sort(y aca que!!??);

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  


  // iterar ambos arrays
  // comparar elementos y encontrar iguales
  //crear condicional 
  //crear un array con elementos en comun o vacio

  var nuevoArray= [];

  for(let i = 0; i < arreglo1.length; i++){
    for(let j = 0; j < arreglo2.length; j ++){
      if( arreglo1[i] === arreglo2[j]){
       nuevoArray.push(arreglo1[i]);
      }
    }
  }
  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

