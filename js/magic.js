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
            

function changeBack(classOn, classOff, classOff2) {
    document.getElementById('backBody').classList.remove(classOff);
    document.getElementById('backBody').classList.remove(classOff2);
    document.getElementById('backBody').classList.add(classOn);
}


