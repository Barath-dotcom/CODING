let feedbackArr = [];
let selectedRating = 0;

const stars = document.querySelectorAll(".star");
const form = document.getElementById("feedbackForm");


stars.forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);
        updateStars();
    });
});

function updateStars(){
    stars.forEach(star => {
        star.classList.toggle(
            "active",
            Number(star.dataset.value) <= selectedRating
        );
    });
}


form.addEventListener("submit", e => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let comments = document.getElementById("comments").value.trim();
    let error = document.getElementById("error");

    if(!name || !email){
        error.textContent = "Name and Email required";
        return;
    }

    if(selectedRating === 0){
        error.textContent = "Please select a rating";
        return;
    }

    if(comments.length < 10){
        error.textContent = "Comments must be at least 10 characters";
        return;
    }

    error.textContent = "";

    feedbackArr.push({
        name,
        email,
        rating: selectedRating,
        comments
    });

    displayFeedback();
    updateAverage();

    form.reset();
    selectedRating = 0;
    updateStars();
});

function displayFeedback(){
    let list = document.getElementById("list");
    list.innerHTML = "";

    feedbackArr.forEach(f => {
        list.innerHTML += `
        <div class="feedback-item">
            <strong>${f.name}</strong> (${f.email})<br>
            ⭐ ${"★".repeat(f.rating)}<br>
            ${f.comments}
        </div>`;
    });
}

function updateAverage(){
    let avg = document.getElementById("avg");
    let total = feedbackArr.reduce((sum,f) => sum + f.rating, 0);
    avg.textContent =
        "Average Rating: " + (total / feedbackArr.length).toFixed(1) + " ⭐";
}
