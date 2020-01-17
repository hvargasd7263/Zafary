const encasa = document.querySelector('#casa');
const whatzapp = document.querySelector('#whatzapp');
const zpotify = document.querySelector('#zpotify');
const contdinamic = document.querySelector('#contdinamic');

encasa.addEventListener('click',cargarhome);
whatzapp.addEventListener('click',cargawhatzapp);
zpotify.addEventListener('click',cargazpotify);


function cargarhome(){
    contdinamic.setAttribute('src','../home/index.html');

}


function cargawhatzapp(){
    contdinamic.setAttribute('src','../whatzapp/index.html');

}

function cargazpotify(){
    contdinamic.setAttribute('src','../zpotify/index.html');
}
