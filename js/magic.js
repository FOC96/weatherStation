// Checks time (hour) to change the background color
function checkTime() {
    hour = new Date().getHours()
    
    if (hour<12) {
        changeBack('morning', 'afternoon', 'night')
    } else if (hour>11 && hour<20) {
        changeBack('afternoon', 'morning', 'night')
    } else {
        changeBack('night', 'afternoon', 'morning')
    }
}


// Changes #frontBody background color
function changeBack(classOn, classOff, classOff2) {
    document.getElementById('frontBody').classList.remove(classOff);
    document.getElementById('frontBody').classList.remove(classOff2);
    document.getElementById('frontBody').classList.add(classOn);
}


function showBack() {
    document.getElementById('frontBody').style.zIndex="0";
    document.getElementById('backBody').style.zIndex="10";
}

function showFront() {
    document.getElementById('frontBody').style.zIndex="10";
    document.getElementById('backBody').style.zIndex="0";
}