function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");


    var sunIcon = document.getElementById('sun-icon');
    var moonIcon = document.getElementById('moon-icon');


    if (element.classList.contains("dark-mode")) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline";
    } else {
        sunIcon.style.display = "inline";
        moonIcon.style.display = "none";
    }}