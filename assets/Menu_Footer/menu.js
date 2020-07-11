var drop = document.getElementById('menuDropper');
var timeout;



function menuDrop(menu){
    clearTimeout(timeout);

    for(let i=1; i<=document.getElementsByClassName('mouseOver').length; i++){
        if(("menu" + i) == menu){

        }else{
            document.getElementById("menu" + i).style.transform = "scale(1 , 0)"
            document.getElementById("menu" + i).style.opacity = "0";
        }
    }

        console.log(document.getElementsByClassName(menu))
        document.getElementById(menu).style.transform = "scale(1 , 1)";
        document.getElementById(menu).style.opacity = "1";
    
}

function leave (menu){
    timeout = setTimeout (function() {
        document.getElementById(menu).style.transform = "scale(1 , 0)";
        document.getElementById(menu).style.opacity = "0";
    }, 1000)
}

var inputEmail = document.getElementById('btnEmail').addEventListener("click", (e) => {
    e.preventDefault();
    console.log(document.getElementById('inputEmail').innerHTML)
    localStorage.setItem('email', document.getElementById('inputEmail').innerText);
})
