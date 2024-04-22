function adjustTime() {
    var hour = parseInt(document.getElementById('hourInput').value);
    var minute = parseInt(document.getElementById('minuteInput').value);
    var newMinute = minute - 45;

    if (newMinute < 0) {
        newMinute += 60;
        hour -= 1;
    }

    if (hour < 0) {
        hour += 24;
    }

    document.getElementById('result').textContent = '조정된 시간: ' + hour + '시 ' + newMinute + '분';
}