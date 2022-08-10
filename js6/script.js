let InputFormadd = document.querySelector('.inputform');
let ButtonAdd = document.querySelector('.button-add');
let UlListadd = document.querySelector('.ul-list');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');



ButtonAdd.addEventListener('click', function () {
    let value = InputFormadd.value;
    let li = document.createElement('li');
let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function(){
    li.remove();
})

    li.textContent = value;

    li.appendChild(deleteButton);

    UlListadd.appendChild(li);

    InputFormadd.value = ' ';
})

document.querySelector('.deleteall').addEventListener('click',function(x){
    UlListadd.innerHTML = ' ';
})


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))



