// FILTER FUNCTION
const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        items.forEach(item => {
            const category = item.dataset.category;

            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});


// IMAGE MODAL
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
};




function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("darkToggle");
    if (!btn) return;

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        btn.textContent = "☀️"; // sun
    } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "🌙"; // moon
    }
}

// load saved theme
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("darkToggle");
    if (!btn) return;

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});