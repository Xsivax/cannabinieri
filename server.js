
var http = require('http');
const fs = require('fs');
var url = require('url');
var path = require('path');
var StringDecoder = require('string_decoder').StringDecoder;

var mimeTypes = {
     "html": "text/html",
     "jpeg": "image/jpeg",
     "jpg": "image/jpeg",
     "png": "image/png",
     "js": "text/javascript",
     "css": "text/css",
     "json": "text/plain",
     "svg":"image/svg+xml"
}; 

function writedata(data) {
    
    fs.appendFile('static/form.txt', data, (err) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("File written successfully\n"); 
      console.log("The written has the following contents:"); 
      console.log(fs.readFileSync("static/form.txt", "utf8")); 
    }
})};

// the following read funcitons are not asyncronous, that means they will block the process.. 
// for scalability this has to be changed in future
function readform() {
    var input = fs.readFileSync('static/form.txt', 'utf8')
//     console.log('input ooohyeah',input)
// //     var danodes = JSON.parse(input);
//     
//     const lines = input.split(/\r?\n/);
//     console.log('line numbaaa 1', lines, lines[1], lines[1].length)
//     var string = '';
//     var i;
//     
//     for (i = 0; i < (lines.length - 2); i++) {
//          string += '"data' + i.toString()   + '":' + lines[i] + ' ,'  ;
//     }; 
//     string += '"data' + lines.length.toString()   + '":' + lines[lines.length - 2]  ;
//     string = '{' + string + '}' ;
//     const jsonlines = JSON.parse(string)
//     
//     
//     let sortedlines = [];
//     sortedlines = [].slice.call(jsonlines).sort(function(a,b) {
//         var x = a.length;
//         var y = b.length;
//         if (x < y) {
//             return -1;
//         }
//         if (x > y) {
//             return 1;
//         }
//         return 0;
// 
//     });
//     console.log('daline1 in nodes', sortedlines)
    return input
};

     
     
http.createServer((request, response)=>{
    var pathname = url.parse(request.url).pathname;
    var filename;
    if(pathname === "/"){
        filename = "index.html";
    }
    else{
        filename = path.join(process.cwd(), pathname);
    }
    
    try{
        fs.accessSync(filename, fs.F_OK);
        var fileStream = fs.createReadStream(filename);
        var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
        response.writeHead(200, {'Content-Type':mimeType});
        fileStream.pipe(response);  
        
        
        if (mimeType === "text/plain"){
            // Get the payload,if any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    request.on('data', function(data) {
       buffer += decoder.write(data);
    });
    var theanswer = '';
    request.on('end', function() {
      buffer += decoder.end();
      if (buffer[3] === 'n') {
        
        
        writedata(buffer);
        theanswer = 'your changes were taken into the\n\nM A T R I X'
          
      }
    
      console.log(buffer[3])
      if (buffer[3] === 'e'){
        
          
          formData = readform();
          console.log('oleola', formData)
          theanswer = '{' + '\"edges\":' + edges + ',' +'\"nodes\":' +  nodes + '}'   
      }
      // Send the response

      console.log('Received Buffer',buffer);
      response.end(theanswer);

      // Log the request/response
      console.log('Payload received: ', buffer);
    });
        }
        
    }
    catch(e) {
            console.log('File not exists: ' + filename);
            
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('404 Not Found\n');
            response.end();
            return;
    }
    
    return;
    }
    
).listen(5000);


// const axios = require("axios");

// async function getCatFacts() {
// 	const response = await axios ({
// 	url: "http://localhost:5000",
// 	method: "GET"
// })

// console.log(response.data)
// }
// getCatFacts()




