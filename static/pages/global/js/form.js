

const btn = document.getElementById('sub_btn');

console.log(btn);

let allData = [];

const addData = (event) => {
    event.preventDefault();

    let data = { 
        name : document.getElementById('username').value,
        mail: document.getElementById('mail').value,
        phone : document.getElementById('phone').value,
        subject : document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

    allData.push(data);
    document.forms[0].reset();

   console.warn( 'added', {allData});
   let jsonData = JSON.stringify(allData);
   console.log('Data:',jsonData);
   console.log(jsonData); //gives json object

   
   //send data to server

  

    var xhr = new XMLHttpRequest(); 

    xhr.open('POST', '../../static/data.json', true); //prepared request to be sent; 3 arguments: method, destination, data
    xhr.send(jsonData);
    xhr.onload = () => {

            if (xhr.readyState == 4) {

                // put form.value to none


            
                console.log('Data passed into file', jsonData);  

            };

};

xhr.onload();

};

   

btn.addEventListener("click", (event) => {
    addData(event);
});