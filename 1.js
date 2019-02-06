function range(start,end,step){
    let arreglo=[];
    let tam=Math.abs((Math.abs(end) - Math.abs(start))/Math.abs(step));
    console.log("Tama = " + tam);
    for(i=0;i<=tam;i++){
        arreglo[i]=start;
            start+=step;
    }
    return arreglo;
}

function sum(arreglo){
    let total=0;
    for(numero of arreglo){
        total=total+numero;
    }
    return total;
}
console.log(range(1, 10,1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10,1)));
// → 55
console.log(range(5, 2, -1));