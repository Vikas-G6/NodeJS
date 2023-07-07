var http=require('http')
var fs=require('fs')
server=http.createServer((req,res) =>{
res.writeHead(200,{'Content-Type':'text/html'});
fs.readFile('./index.html',(err,file) =>{
res.end(file);
})
})
server.listen(3000)
