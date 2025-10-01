document.addEventListener('DOMContentLoaded', () => {
    // 🌸 1. Scroll suave para los enlaces del menú
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 🌸 2. Validación del formulario de contacto
    const form = document.getElementById('form-contacto');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir envío automático

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        let errores = [];

        if (nombre.length < 3) {
            errores.push("El nombre debe tener al menos 3 caracteres.");
        }

        if (correo === "" || !/\S+@\S+\.\S+/.test(correo)) {
            errores.push("Por favor ingresa un correo válido.");
        }

        if (mensaje.length < 5) {
            errores.push("El mensaje debe tener al menos 5 caracteres.");
        }

        if (errores.length > 0) {
            alert("❌ Hay errores en el formulario:\n\n" + errores.join("\n"));
        } else {
            alert("✅ ¡Formulario enviado con éxito! Gracias por contactarnos, " + nombre + ".");
            form.reset(); // Limpia el formulario
        }
    });

    // 🌸 3. Botón dinámico para mostrar/ocultar testimonios
    const testimonios = document.getElementById('testimonios');
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = "Mostrar/Ocultar Testimonios";
    toggleBtn.style.margin = "1rem auto";
    toggleBtn.style.display = "block";
    toggleBtn.style.padding = "10px 20px";
    toggleBtn.style.borderRadius = "10px";
    toggleBtn.style.border = "none";
    toggleBtn.style.background = "#ffb6b9";
    toggleBtn.style.color = "white";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.fontWeight = "bold";

    // Insertamos el botón antes de los testimonios
    testimonios.parentNode.insertBefore(toggleBtn, testimonios);

    let visible = true;
    toggleBtn.addEventListener('click', () => {
        visible = !visible;
        testimonios.style.display = visible ? "block" : "none";
        toggleBtn.textContent = visible ? "Ocultar Testimonios" : "Mostrar Testimonios";
    });
});
