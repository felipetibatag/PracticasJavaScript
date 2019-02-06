function promptDirection(question) {
    let result = question;
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Direccion invalida: " + result);
  }
  
  try {
    promptDirection("ss");
  } catch (error) {
    console.log("Algo malo paso: " + error);
  }