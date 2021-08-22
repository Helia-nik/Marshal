
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    burger.addEventListener("click", ()=>{
        menu.classList.toggle("active");
    });


    const close = document.querySelector('.close');
    close.addEventListener("click", ()=>{
        menu.classList.toggle("active")
    }); 