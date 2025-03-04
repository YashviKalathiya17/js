document.addEventListener("DOMContentLoaded", function () {
    const employeeForm = document.getElementById("employeeForm");
    const employeeTable = document.querySelector("#employeeTable tbody");
    const deleteAllBtn = document.getElementById("deleteAll");
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeModal = document.querySelector(".close");

    employeeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const image = document.getElementById("empImage").value;
        const name = document.getElementById("empName").value;
        const age = document.getElementById("empAge").value;
        const dept = document.getElementById("empDept").value;
        const city = document.getElementById("empCity").value;
        const email = document.getElementById("empEmail").value;
        const number = document.getElementById("empNumber").value;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${image}" alt="Employee Image" class="view-image"></td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${dept}</td>
            <td>${city}</td>
            <td>${email}</td>
            <td>${number}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        employeeTable.appendChild(row);

        employeeForm.reset();
    });

    employeeTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.closest("tr").remove();
        }
    });

    deleteAllBtn.addEventListener("click", function () {
        employeeTable.innerHTML = "";
    });

    employeeTable.addEventListener("click", function (event) {
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
