let len = document.querySelector('.len');
let xuong = document.querySelector('.xuong');
let item1 = document.querySelectorAll('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let clicklx = (id1, id2, id3)=>{
    id1.style.transform="translateY(0%)";
    
}
len.addEventListener('click',clicklx(item1,item2,item3))