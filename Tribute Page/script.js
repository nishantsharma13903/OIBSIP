setTimeout(()=>{
    document.querySelector('.loading').style.display = "none";
    document.querySelector('.main-container').style.display = "block";
},3000)

setTimeout(function(){
    document.querySelector('.img-cont').style.left = "0";
    document.querySelector('.img-cont').style.opacity = "1";
    document.querySelector('.content-cont').style.right = "0";
    document.querySelector('.content-cont').style.opacity = "1";
},3200);

let para = document.querySelector('.lower-cont').getBoundingClientRect().top;

window.onscroll = function(){
    if(document.documentElement.scrollTop > para-350){
        document.querySelector('.lc-content').style.opacity = "1";
        document.querySelector('.lc-content').style.top = "0";
    }
}