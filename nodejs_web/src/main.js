import getTime from "./clock.js";
const clock = document.querySelector(".clock");

setInterval(()=>{
  const time = getTime();
  clock.innerText = time.format("YYYY년도 MM월 DD일 hh시 mm분 ss초");
},1000)

