let personas=new Map();
personas.set("Felipe",33);
personas.set("Felicia",43);
personas.set("Feliciano",53);
personas.set("Drui",63);
console.log(personas.get("Felipe"));
console.log(personas.has("Farkantos"));

//para validar si en un objeto existe una propiedad específica se puede usar .hasOwnProperty("nombrePropiedad")

console.log({x:1}.hasOwnProperty("x"));
