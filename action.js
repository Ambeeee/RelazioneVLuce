//Apri Foto

var menu = 0

function Apri(){
    var pagina = document.getElementById("")
    
    if(menu==0){
        pagina.style.display = "flex"
        menu++
    } else {
        pagina.style.display = "none"
        menu--
    }
}