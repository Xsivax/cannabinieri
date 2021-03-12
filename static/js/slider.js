let slides=document.querySelector('.slider-items').children;
let nextSlide=document.querySelector('.right-slide');
let prevSlide=document.querySelector('.left-slide');
let totalSlides=slides.length;
let index=0;

console.log(index);


nextSlide.onclick = () => {
    next("next");
}

prevSlide.onclick = () => {
    next("prev");
}

let next = (direction)=> {
    if (direction=="next"){
        index++;
        if (index==totalSlides){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }
        else {
            index--;
        }
    }

    for (i=0; i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

const spider=document.querySelector('.spider-items').children;
const spiderNext=document.querySelector('#spider-right');
const spiderPrev=document.querySelector('#spider-left');
let spiderTotal=spider.length;

console.log(spider);
console.log(spiderNext);
console.log(spiderPrev);
console.log(spiderTotal);


spiderNext.onclick = () => {
  nextSpider("next");
}

spiderPrev.onclick = () => {
    nextSpider("prev");
  }

  let nextSpider = (direction)=> {
    if (direction=="next"){
        index++;
        if (index==spiderTotal){
            index=0;
        }
    }
    else{
        if(index==0){
            index=spiderTotal-1;
        }
        else {
            index--;
        }
    }

    for (i=0; i<spider.length;i++){
        spider[i].classList.remove("active");
    }
    spider[index].classList.add("active");
}

