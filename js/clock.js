const clock = document.querySelector("h2#clock");

// 쓰기전에 string으로 넘거주면 좋ㅇㅁ/ padStart(자릴수, "어떤걸 넣을지")
// clock.innerText = "Hello world ";
function getClock() { 
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
//정한 시간마다 function을 실행시키게 해줌
// setTimeout(sayHello, 5000);