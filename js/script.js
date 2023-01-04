const btMenu = document.getElementById('ic');
        const links  = document.getElementsByClassName('item-menu');
        btMenu.addEventListener('click',()=>{
            for(i=0;i<=links.length;i++){
                links[i].classList.toggle('active');
            }
});