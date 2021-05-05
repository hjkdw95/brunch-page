let coverImg;
let cover;
let h1;

let scrollTop = 0;

function headerHandler(e){
    scrollTop = document.documentElement.scrollTop;

    // 1. cover는 스크롤이 움직임에 따라 opacity강하게 주기
    cover.style.opacity = 0.3 + scrollTop / 1100;

    // 2. coverImg는 스크롤에 따라 그림 확대하기(scale)
    coverImg.style.transform = `scale(${1 + scrollTop/1500})`;

    //  3. h1이 스크롤에 따라 글씨 갈수록 뿌옇게 하기?
    h1.style.opacity = 1 - scrollTop / 500;
}



function init(){
    coverImg = document.querySelector(".coverImg");
    cover = document.querySelector(".cover");
    h1 = document.querySelector("h1");

    cover.style.opacity = 0.3;

    window.addEventListener("scroll", headerHandler);
};

init()