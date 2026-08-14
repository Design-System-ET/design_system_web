import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css"; 
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//import axios from "axios";


//import de los otros scripts
import "./scripts/contacto";
import Swal from "sweetalert2";

//cambia el subrrayado del menu
document.querySelectorAll<HTMLAnchorElement>('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    });
});

//cerramos el menú al hacer click en un enlace (para dispositivos móviles)
const links = document.querySelectorAll<HTMLAnchorElement>('.navbar-nav .nav-link');
const menu = document.getElementById('menu');

links.forEach(link => {
    link.addEventListener('click', () => {
        if (menu?.classList.contains('show')) {
            menu.classList.remove('show');
        }
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

//mostrar portafolio
const boton = document.querySelector('#botonMostrar') as HTMLButtonElement | null;
const oculto = document.querySelector('#oculto');

boton?.addEventListener('click', () => {
    oculto?.classList.toggle('d-none');
    boton.innerHTML = oculto?.classList.contains('d-none') ? 'Ver más proyectos <i class="bi bi-arrow-right"></i>' : '<i class="bi bi-arrow-left"></i> Ver menos';
});


//modal asesoramiento
const modal = document.getElementById('modal');
const btnCerrarModal = document.querySelector<HTMLSpanElement>('.cerrar');
const modalButtons = document.querySelectorAll<HTMLButtonElement>('[data-modal-open]');

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

btnCerrarModal?.addEventListener('click', () => {
    if (modal) {
        modal.style.display = 'none';
    }
});