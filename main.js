var end = new Date(2023, 04, 18).getTime();

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date().getTime();
        console.log(end);
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('flipdown').innerHTML = 'EXPIRED!';
            console.log("days " + days);
            return;
        }

        

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        console.log(days)

        document.getElementById('flipdown').innerHTML = days + 'days ';
        document.getElementById('flipdown').innerHTML += hours + 'hrs ';
        document.getElementById('flipdown').innerHTML += minutes + 'mins ';
        document.getElementById('flipdown').innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
    console.log(timer)