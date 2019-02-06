const {createServer}=require("http");
createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/plain"});
    request.on("data",chunk=>response.write(chunk.toString().toUpperCase()));
    request.on("end",()=>response.end());
}).listen(8000);