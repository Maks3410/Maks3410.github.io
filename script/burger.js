document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("burger-toggle");
    let myMain = document.getElementById('my-main');
    let footerImg = document.getElementById('footer-img');

    button.onclick = function (e) {
        if (button.checked) {
            myMain.style.display = "none";
            footerImg.style.display = "none";

        } else {
            myMain.style.display = "block";
            footerImg.style.display = "block";
        }
    };
});
