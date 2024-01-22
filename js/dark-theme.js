var themeToggle = document.getElementById('theme-switch');
var overlay = document.getElementById('overlay-lyr');

function theme() {
    if(themeToggle.innerHTML == '<i class="bi bi-moon"></i>'){
        
        document.getElementById('theme-switch').innerHTML = '<i class="bi bi-sun"></i>';
        document.documentElement.setAttribute ("data-bs-theme", "dark");
        themeToggle.style.background = "#02BCE6";
        themeToggle.style.color = "#ffffff";
    
    }
    else{
        
        document.getElementById('theme-switch').innerHTML = '<i class="bi bi-moon"></i>';
        document.documentElement.setAttribute ("data-bs-theme", "light");
        themeToggle.style.background = "#ffffff"
        themeToggle.style.color = "#02BCE6";
    }
}
