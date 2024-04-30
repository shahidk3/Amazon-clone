const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btns = document.querySelector('.control-prev')
const next_btns = document.querySelector('.control-next')

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide()

prev_btns.addEventListner('click', (e)=>{
    if(n>0){
        n--;
        
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})