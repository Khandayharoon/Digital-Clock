setInterval(() => {
    let currentTime = new Date();
    let hrs = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let ampm = hrs >= 12 ? "PM" : "AM";

    if (hrs > 12) {
      hrs = hrs - 12;
    }

    document.getElementById("hrs").innerHTML = (hrs < 10 ? "0" : "") + hrs;
    document.getElementById("min").innerHTML = (min < 10 ? "0" : "") + min;
    document.getElementById("sec").innerHTML = (sec < 10 ? "0" : "") + sec;
    document.getElementById("ampm").innerHTML = ampm;
  }, 1000);