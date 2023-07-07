const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello world");
});

// module.exports = {
//     first_name:"Vikas",
//     last_name : "Gurav",
//     getFullName : function(){
//     return `$this{this.first_name} ${this.last_name}`
// }
// }
// server.listen(3000);

exports.myDateTime = function(){
    return Date()
}
server.listen(3000);
