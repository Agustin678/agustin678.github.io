document.getElementById('mostrarmenos').onclick = function() {
    console.log('capturamos el evento click en mostrar menos');
    document.getElementById('mostrarmas').style.display='none';
    document.getElementById('mostrar-mas').style.display='block';
    document.getElementById('mostrarmenos').style.display='none';
}