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
    
    updateData();
}


// Changes #frontBody background color
function changeBack(classOn, classOff, classOff2) {
    document.getElementById('frontBody').classList.remove(classOff);
    document.getElementById('frontBody').classList.remove(classOff2);
    document.getElementById('frontBody').classList.add(classOn);
}