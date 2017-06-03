// SELECT ALL INFO
function updateData() {
    updateDate();
    
}

//Updates day, month, year and time of last update
function updateDate() {
    day = new Date().getDate();
    month = new Date().getMonth();
    year = new Date().getFullYear();
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    
    switch (month) {
        case 0:
            month = "ENERO"
            break;
        case 1:
            month = "FEBRERO"
            break;
        case 2:
            month = "MARZO"
            break;
        case 3:
            month = "ABRIL"
            break;
        case 4:
            month = "MAYO"
            break;
        case 5:
            month = "JUNIO"
            break;
        case 6:
            month = "JULIO"
            break;
        case 7:
            month = "AGOSTO"
            break;
        case 8:
            month = "SEPTIEMBRE"
            break;
        case 9:
            month = "OCTUBRE"
            break;
        case 10:
            month = "NOVIEMBRE"
            break;
        case 11:
            month = "DICIEMBRE"
            break;
        }
    
    dateInput = document.getElementById('lastUpdate');
    dateInput.innerHTML = day + " | " + month  + " | " + year  + " | " + hour + ":" + minute;
}


function updateDatabase() {
    //AJAX
}