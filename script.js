// ==========================
// PARTICLES
// ==========================

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: "#3b82f6"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.35
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#3b82f6",
                opacity: 0.15,
                width: 1
            },

            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out"
            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true

            },

            modes: {

                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.4
                    }
                },

                push: {
                    particles_nb: 3
                }

            }

        },

        retina_detect: true

    });

}

// ==========================
// EFEITO DE BRILHO NOS BOTÕES
// ==========================

const buttons = document.querySelectorAll(".links a");

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        button.style.setProperty("--x", `${x}px`);
        button.style.setProperty("--y", `${y}px`);

    });

});

// ==========================
// ANIMAÇÃO DE ENTRADA
// ==========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});