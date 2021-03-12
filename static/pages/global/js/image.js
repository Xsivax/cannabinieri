//image gallery oils

const current = document.querySelector('#current');

console.log(current);

const imgs = document.querySelectorAll ('.imgs img');

console.log(imgs);

imgs.forEach(img => 
    img.addEventListener('click', (e) => current.src = e.target.src));

//image gallery flowers

const flower = document.querySelector('#flower');

console.log(flower);

const flowers = document.querySelectorAll('.flowers img');

console.log(flowers);

flowers.forEach(img =>
    img.addEventListener('click', (e) => flower.src = e.target.src));

//image gallery oils

const fruit = document.querySelector('#fruit');

const fruits = document.querySelectorAll('.fruits img');

fruits.forEach(img =>
    img.addEventListener('click', (e) => fruit.src = e.target.src));








