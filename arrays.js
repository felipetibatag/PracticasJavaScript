function reverseArray(arreglo){
    let arregloNuevo=[];
    let tam=arreglo.length;
    console.log("Tam ="  + tam);
    while(tam>0){
        arregloNuevo.push(arreglo.pop());
        tam--;
    }
    return arregloNuevo;
}


function reverseArrayInPlace(arreglo){
    let limite=Math.floor(arreglo.length/2);
    for(let i=0;i<limite;i++){
        let temp=arreglo[i];
        arreglo[i]=arreglo[arreglo.length - i -1];
        arreglo[arreglo.length - i -1]=temp;
        //console.log(i);
    }
    return arreglo;
}



console.log(reverseArray(["1","2","3","4","5"]));
console.log(reverseArrayInPlace(["1","2","3","4","5"]));