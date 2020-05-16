// [
//     0 = рис1,
//     1 = рис2,
//     2 = рис3
// ]

let active = 0;
const img = document.querySelectorAll('img')
// active - delite active
//active add acive


document.querySelector('.btn').onclick = () =>{
    img[active].classList.remove('active-img');
    if(active + 1 == img.length ){
        active = 0;
    }else{
        active++;
    }
    img[active].classList.add('active-img');
    
}