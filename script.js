
document.addEventListener("DOMContentLoaded", () => {
const formRating = document.getElementById("interactive-rating");
const messageShow = document.querySelector(".status-message-show");
const selectedRating = document.getElementById("selected-rating");

formRating.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedRadio = formRating.querySelector('input[name="star-rating"]:checked');

    if (selectedRadio) {
        const ratingValue = selectedRadio.value;
        selectedRating.textContent = ratingValue;
        formRating.style.display = "none";
        messageShow.style.display = "flex";
    }
    else {
        alert("please choose the Rating");
    }
});
});