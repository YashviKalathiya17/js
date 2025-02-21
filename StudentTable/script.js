document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("studentForm");
    const studentTable = document.querySelector("#studentTable tbody");
    const deleteAllBtn = document.getElementById("deleteAll");
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeModal = document.querySelector(".close");

    studentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const image = document.getElementById("image").value;
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const course = document.getElementById("course").value;
        const city = document.getElementById("city").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("number").value;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${image}" alt="Student Image" class="view-image"></td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${course}</td>
            <td>${city}</td>
            <td>${email}</td>
            <td>${number}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        studentTable.appendChild(row);

        studentForm.reset();
    });

    studentTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.closest("tr").remove();
        }
    });


    deleteAllBtn.addEventListener("click", function () {
        studentTable.innerHTML = "";
    });

    studentTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("view-image")) {
            fullImage.src = event.target.src;
            modal.style.display = "block";
        }
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});