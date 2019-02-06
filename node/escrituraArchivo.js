const {writeFile}=require("fs");
writeFile("escritura.txt","vamos a ver que escribe esta cosa",err=>{
    if(err){
        console.log(`ocurrio un error al escribir ${err}`);
    }else{
        console.log("Archivo listo");
    }
});