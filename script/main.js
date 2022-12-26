const startTime = new Date();


function loaded() {
    const loadTime = new Date();
    const container = document.getElementById('loadtime');

    const delta = (loadTime.getTime() - startTime.getTime()) / 1000

    container.innerHTML += `Page load time is ${delta} s.`;
}

document.addEventListener("DOMContentLoaded", loaded);