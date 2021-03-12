var axios = require('axios')
var http = require('http');


function getDataPromise() {
    return axios({
            method: 'get',
            timeout: 8000,
        })
       .then(res => res.data)
       .catch (err => console.error(err))
    }


http.createServer((request, response)=>{
    getDataPromise()
    .then(res => console.log(res));
    
    console.log(response.data)
    }).listen(8000);
    
