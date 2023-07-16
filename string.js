// 1
let miRefran;
// 2
miRefran = "El que no madruga con el sol no goza del dia";
console.log(miRefran);
// 3 
let longitudRefran =  miRefran.length;
console.log(longitudRefran);

let novenaLetra = miRefran[8];
console.log(novenaLetra);
// Asignar la letra numero 9 o charAt [8]
let ultimaLetra = miRefran [longitudRefran-1];
console.log(ultimaLetra);
// Restarle 1 para que me ubique en la ultima posicion 
let indicePalabra = miRefran.indexOf("que");
console.log(indicePalabra);
// Tener un indice en string
miRefran = miRefran.replace("que","xxx");
console.log(miRefran);
// let retorno = miRefran.replace
miRefran = miRefran.toUpperCase();
console.log(miRefran);

//
let variable = "la casa es bonita";
let array;
array = variable.split (" ")
//Me separa cada palabra 

// array = Array.from(variable); Me separa cada letra y espacio

console.log(array);
//CONVERTIRLO EN ARRAY 


// AQUELLAS PALABRAS QUE TENGAN TAMAÑO DE DOS MUESTRE LA PALABRA DE LO CONTRARIO FALSE 
let returnMap = array.map((item) =>{
  console.log(item);
  if (item.length == 2) {
    return item;
  } else {
    return;
  }
  });
console.log(returnMap);
//antes de que map se ejecute, se va a retornar un valor

let find = array.find((item) => item === "es");
console.log(find);


let filter = array.filter((item) => item === "es");
console.log(filter);