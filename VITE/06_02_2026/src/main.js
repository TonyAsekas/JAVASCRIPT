import './style.css'
import Avatar from './components/Avatar'
document.addEventListener("DOMContentLoaded", () =>{
  document.querySelector("#app").innerHTML =`
  ${Avatar("Peter Parker","https://wallpapers.com/images/thumbnail/animated-peter-parker-ch9qgnhdwr38u7uk.jpg" )}
  ${Avatar("Matt Murdock")}
  ${Avatar("Ciclope","https://imgproxy.domestika.org/unsafe/w:820/plain/src://content-items/006/775/638/Ciclope-XMEN-original.jpg?1610775175")}
  `
})