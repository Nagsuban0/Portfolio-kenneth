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