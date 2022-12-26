if (localStorage.getItem("reviews") === null) {
    localStorage.setItem("reviews", JSON.stringify([]))
}

const reviews = JSON.parse(localStorage.getItem('reviews'))

function drawReviews() {
    const reviewContainer = document.getElementById('review-container');
    let content = ""

    for (let review in reviews) {
        content += `<div class=\"review-item\"> ${reviews[review]}</div>`
    }

    reviewContainer.innerHTML = content;
}

function submit(event) {
    event.preventDefault();

    const reviewValue = document.getElementById("review-value");

    if (reviewValue.value !== "") {
        reviews.push(reviewValue.value);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        reviewValue.value = ""
        drawReviews()
    }
}


function ready() {
    document.getElementById('review-form').addEventListener("submit", submit);
    drawReviews();
}


document.addEventListener("DOMContentLoaded", ready);