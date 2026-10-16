
let interval1;
let time1 = 60 * 60;

function startTimer1() {
    clearInterval(interval1);

    time1 = 60 * 60;

    document.getElementById("timer1").textContent = "60:00";

    interval1 = setInterval(function() {
        time1 -= 60;

        let minutes = Math.floor(time1 / 60);
        let seconds = time1 % 60;

        document.getElementById("timer1").textContent =
            minutes + ":" + String(seconds).padStart(2, "0");

        if (time1 === 30 * 60) {
            alert("Залишилося менше половини часу!");
        }

        if (time1 <= 0) {
            clearInterval(interval1);
            document.getElementById("timer1").textContent = "0:00";
        }
    }, 60000);
}



let interval2;

function startTimer2() {
    clearInterval(interval2);

    let time2 = 30;

    let timer = document.getElementById("timer2");
    let button = document.getElementById("startButton");

    button.disabled = true;
    timer.style.color = "black";
    timer.textContent = time2;

    interval2 = setInterval(function() {
        time2--;

        timer.textContent = time2;

        if (time2 === 10) {
            timer.style.color = "red";
        }

        if (time2 <= 0) {
            clearInterval(interval2);

            timer.textContent = "0";
            timer.style.color = "green";

            button.disabled = false;
        }
    }, 1000);
}
