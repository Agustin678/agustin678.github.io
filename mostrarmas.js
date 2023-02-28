document.getElementById('mostrar-mas').onclick = function() {
    console.log('capturamos el evento click en mostrar mas');
    document.getElementById('mostrarmas').style.display='block';
    document.getElementById('mostrar-mas').style.display='none';
    document.getElementById('mostrarmenos').style.display='block';
}
