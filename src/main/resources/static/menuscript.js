function showDays(weekId) {
    var weeks = document.getElementsByClassName('days');
    for (var i = 0; i < weeks.length; i++) {
        weeks[i].style.display = 'none';
    }
    document.getElementById(weekId).style.display = 'block';
}
