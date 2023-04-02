const hamburger=document.getElementById('hamb');
const Cross=document.getElementById('X');
const menu=document.getElementById('menu');

hamburger.addEventListener('click',()=>
{
    hamburger.classList.toggle('hamb-none');
    Cross.classList.toggle('cross-none')
    menu.classList.toggle('hidden')
})
Cross.addEventListener('click',()=>
{
    hamburger.classList.toggle('hamb-none');
    Cross.classList.toggle('cross-none')
    menu.classList.toggle('hidden')
})