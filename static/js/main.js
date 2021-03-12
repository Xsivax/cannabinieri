
  
// this function shows an element by id

function show() {
    var x= document.getElementById("information");
    if (x.style.display === "none") {
        x.style.display = "flex"; }
        else {
            x.style.display ="none";
        }
    }
//this function shows element2 by id -to be generalized

function display() {
    var x= document.getElementById("footer-links");
    if (x.style.display === "none") {
        x.style.display = "flex";}
        else {
            x.style.display ="none";
        }
    }

    function menu() {
        var x= document.getElementById("mobile-dropdown");
        if (x.style.display === "none") {
            x.style.display = "block";}
            else {
                x.style.display ="none";
            }
        }
    

        function menu2() {
            var x= document.getElementById("down");
            if (x.style.display === "none") {
                x.style.display = "block";}
                else {
                    x.style.display ="none";
                }
            }

            function menu3() {
                var x= document.getElementById("down1");
                if (x.style.display === "none") {
                    x.style.display = "block";}
                    else {
                        x.style.display ="none";
                    }
                }

                function menu4() {
                    var x= document.getElementById("down2");
                    if (x.style.display === "none") {
                        x.style.display = "block";}
                        else {
                            x.style.display ="none";
                        }
                    }

                    function menu5() {
                        var x= document.getElementById("down3");
                        if (x.style.display === "none") {
                            x.style.display = "block";}
                            else {
                                x.style.display ="none";
                            }
                        }

                        function menu6() {
                            var x= document.getElementById("down4");
                            if (x.style.display === "none") {
                                x.style.display = "block";}
                                else {
                                    x.style.display ="none";
                                }
                            }

//some desperate try


function shit(){
    var Image_Id = document.getElementsById('getImage');
    if (Image_Id.src.match("static/img/sample-sauvage.svg" )) {
        Image_Id.src = "static/img/sample-flower.svg";
    }
    else
    Image_Id.src= "static/img/sample-sauvage.svg";
}


//print pdf file

const pdfBtn = document.getElementById('tube');

console.log(pdfBtn);

const printPage = () => {
    window.print();
}

pdfBtn.addEventListener("click", (event) => {
printPage(event, 'printed');
    
});

let screen = () => {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
};

screen();

