const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "Light Mode";
    }else {
        themeBtn.textContent = "Dark Mode";
    }
});

const editBtnList = document.querySelectorAll(".edit-btn");

editBtnList.forEach(function(button) {
    button.addEventListener("click", function() {
        const targetSection = button.closest("section");

        const editableText = targetSection.querySelectorAll("p, h2, h3, li, address");

        if (button.textContent === "Edit") {
            editableText.forEach(function(element) {
                element.setAttribute("contenteditable", "true");
            });
            button.textContent = "Save";
        } else {
            editableText.forEach(function(element) {
                element.setAttribute("contenteditable", "false");
            });
            button.textContent = "Edit";
        }
    });
});