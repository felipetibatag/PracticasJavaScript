/**
 * \d	Any digit character
 * \w	An alphanumeric character (“word character”)
 * \s	Any whitespace character (space, tab, newline, and similar)
 * \D	A character that is not a digit
 * \W	A nonalphanumeric character
 * \S	A nonwhitespace character
 * .	Any character except for newline
 * ^    Para indicar inicio de cadena     /^\d+$/  -> indica que la cadena entera puede tener 1 o más digitos
 *      /^!/ indica que la cadena EMPIEZA con un signo de admiración.
 * $    Para indicar el fin de una cadena /^\d+$/  -> indica que la cadena entera puede tener 1 o más digitos
 * \d+  Encuentra uno o más dígitos
 * \d*  Encuentra 0 o más dígitos.
 * ?    Comodín para indicar que algo puede o no aparecer, una o cero veces. let nombre=/felipe?/;
 * {n}  Donde n específica cuantas veces debe aparecer para que sea verdadero, no que sea el mismo número o letra, si no 
 *      la cantidad de digitos si se usa \d o letras si se usa \w
 * {min,max} Igual que el anterior solo que se especifica cuánto es lo mínimo que puede aparecer y cuanto es lo 
 *           máximo que pude aparecer, aunque en la practica controla más el minimo que el maximo
 * {n,} Lo mismo que el anterior solo que ahora solo se pide un numero minimo de ocurrencias el maximo se deja abierto
 * i   Ubicandola al final de una expresión después del cierre /xx/i indicaría que se busca algo sin tener en cuenta si esta en mayúsculas o minúsculas
 * g    Ubicandolo al final se indica que se busca el patro de forma global no solo en la primera coincidencia, usado con el método replace de cadenas
 * /b   Limitar la salida, por ejemplo que solo TIENE que ser de 3 caracteres /\b \D{3}\b/
 */

let fechaNacimiento=/\d\d-\d\d-\d\d\d\d/;
console.log(fechaNacimiento.test("22-02-2003"));
let filtroNumero=/[123]/;
console.log(filtroNumero.test("80926390"));

let espaciosEnString=/\s/;
console.log(espaciosEnString.test("Vamos a ver"));

let cadena2=/[^aeiou]/; //encontrar cualquier caracter menos los que estan despues del ^
console.log(cadena2.test("v"));

let nombre=/felipe?/;
console.log(nombre.test("felip"));

let numero2=/\d{3}/;  //\d{n} indica que debe tener 3 numero para que sea verdadero
console.log(numero2.test("123"));

let numero3=/\d{3,4}/
console.log(numero3.test("21097"));

let nombreCompleto=/ala+(tibata+)+/i;
console.log(nombreCompleto.test("Alatibatadddddddd"));

//Ahora con exec ejecutar el test, para no usar la funcion .test
let numeroExec=/\d+/.exec("numero 100");
console.log(numeroExec);

console.log(/\b\D{3}\b/.test("Fed"));


console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
      .replace(/(\w+), (\w+)/g, "$2 $1"));
    // → Barbara Liskov
    //   John McCarthy
    //   Philip Wadler


/**
 * /abc/	A sequence of characters
 * /[abc]/	Any character from a set of characters 
 * /[^abc]/	Any character not in a set of characters 
 * /[0-9]/	Any character in a range of characters 
 * /x+/	One or more occurrences of the pattern x 
 * /x+?/	One or more occurrences, nongreedy 
 **/
 ///x*/	Zero or more occurrences 
 /**
  * /x?/	Zero or one occurrence 
  * /x{2,4}/	Two to four occurrences
  * /(abc)/	A group
  * /a|b|c/	Any one of several patterns
  * /\d/	Any digit character
  * /\w/	An alphanumeric character (“word character”)
  * /\s/	Any whitespace character
  * /./	Any character except newlines
  * /\b/	A word boundary
  * /^/	Start of input
  * /$/	End of input
 */