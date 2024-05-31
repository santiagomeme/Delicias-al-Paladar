// script.js
function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Hacer que la función esté disponible globalmente
window.toggleVisibility = toggleVisibility;
