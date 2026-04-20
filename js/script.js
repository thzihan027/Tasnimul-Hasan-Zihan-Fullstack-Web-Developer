// ===============================
// DOM READY SAFE WRAPPER
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // SMOOTH REVEAL ON SCROLL
    // ===============================
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    // ===============================
    // TYPING EFFECT (HEADER NAME)
    // ===============================
    const nameText = "Tasnimul Hasan Zihan";
    let i = 0;

    function typing() {
        const el = document.querySelector(".header-text span");
        if (!el) return;

        if (i < nameText.length) {
            el.innerHTML += nameText.charAt(i);
            i++;
            setTimeout(typing, 70);
        }
    }

    const startTyping = () => {
        const el = document.querySelector(".header-text span");
        if (el) {
            el.innerHTML = "";
            typing();
        }
    };

    window.addEventListener("load", startTyping);


    // ===============================
    // SKILLS ANIMATION (RUN ONCE)
    // ===============================
    const skills = document.querySelectorAll(".progress-bar");
    let skillsDone = false;

    const animateSkills = () => {
        if (skillsDone) return;

        const trigger = window.innerHeight - 100;

        skills.forEach(skill => {
            const top = skill.getBoundingClientRect().top;

            if (top < trigger) {
                skill.style.width = skill.dataset.width;
            }
        });

        if ([...skills].some(s => s.getBoundingClientRect().top < trigger)) {
            skillsDone = true;
        }
    };

    window.addEventListener("scroll", animateSkills);
    animateSkills();


    // ===============================
    // NAVBAR SHADOW ON SCROLL
    // ===============================
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });


    // ===============================
    // PAGE TRANSITION SYSTEM (SAFE)
    // ===============================
    const transition = document.querySelector(".page-transition");

    if (transition) {

        window.addEventListener("load", () => {
            transition.classList.remove("active");
            transition.classList.add("hide");
        });

        document.querySelectorAll("a").forEach(link => {
            const href = link.getAttribute("href");

            if (href && href.includes(".html")) {
                link.addEventListener("click", function (e) {
                    e.preventDefault();

                    transition.classList.remove("hide");
                    transition.classList.add("active");

                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                });
            }
        });

    }

});