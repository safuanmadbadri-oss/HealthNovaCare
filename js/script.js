let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("show");
        }
    });
});
document.querySelector(".appointment-form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Appointment Booked Successfully!");

    this.reset();

});