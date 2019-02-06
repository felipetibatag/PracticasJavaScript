(function(){
    let objetoJavaScript={
        nombre:"Felipe",
        apellido:"ZZZZZ",
        telefono:"310101010"
    }

    let objetoJson=JSON.stringify(objetoJavaScript); //convirtiendo un objeto javascript a Json
    document.getElementById("resObjeto").textContent=objetoJson;
    let objtoJavaSCript2=JSON.parse(objetoJson); // convirtiendo desde un Json a un objeto JavaSCript
    console.log(objtoJavaSCript2);
    

})();