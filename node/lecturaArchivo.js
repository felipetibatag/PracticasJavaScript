const {readFile}=require("fs");
readFile("./escritura.txt","utf8",(error,datos)=>{
    error?console.log(`ocurrio un error ${error}`):console.log(`texto : ${datos}`);
});