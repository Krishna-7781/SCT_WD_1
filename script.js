window.addEventListener("scroll", () => {

    const navbar =
    document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach((card) => {

    observer.observe(card);

});