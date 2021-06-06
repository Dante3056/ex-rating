const ratingIcons = document.querySelectorAll('.rating i');
const rating = document.getElementById('rating');
const btn = document.getElementById('btn');
const resetArea = document.getElementById('resetArea');


ratingIcons.forEach((item, index1) => {
    item.addEventListener('click', (e) => {
        //USO e.stopPropagation() PARA QUE EL EVENTO CLICK DE LA FUNCION SE DIFERENCIE CON EL EVENTO CLICK DE 'resetArea'
        e.stopPropagation()
        //PLANTEO UNA NUEVA FUNCION DONDE REGISTRO TODOS LOS ELEMENTOS Y LOS COMPARO CON EL INDICE DEL ICONO DONDE OCURRIO EL CLICK.
        ratingIcons.forEach((item2, index2) => {
            item2.classList.remove('active');
            if (index2 <= index1) {
                item2.classList.add('active');
            }
        })
        rating.classList.remove('hoverOn'); //LINEA OPCIONAL PARA REMOVER EL HOVER LUEGO DE HACER CLICK
    })
})
resetArea.onclick = () => {
    ratingIcons.forEach((item) => {
        item.classList.remove('active');
    })
    rating.classList.add('hoverOn');   //ACTIVAR SOLO SI LA LÍNEA 18 DEL ARCHIVO ESTÁ SIN COMENTAR

}
