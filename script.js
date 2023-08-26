document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

