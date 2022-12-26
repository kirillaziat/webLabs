

function track() {

    if (document.location.href.includes("/top.html")) {
        document.getElementById("nav-top").style.textDecoration += "underline";
    }

    if (document.location.href.includes("/about.html")) {
        document.getElementById("nav-about").style.textDecoration += "underline";
    }
}

document.addEventListener("DOMContentLoaded", track)