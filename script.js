function loading(){
    alert("Loading weather report...");
}

//---//

var cookieAlert = document.querySelector(".cookie-nav");

function removeAlert(){
    cookieAlert.remove();
}


//---//

function changeUnit(selection) {
    var forecasts = document.getElementById("forecast");
    var unit = selection.value;
    forecasts.className = "column-container "+unit;
}