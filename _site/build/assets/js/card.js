const header=document.querySelector("header");function fixnav(){window.scrollY>10?header.classList.add("active"):header.classList.remove("active")}window.addEventListener("scroll",fixnav);