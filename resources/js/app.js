import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

// RECUPERO TUTTI I DELETE_BUTTON DI OGNI PROGETTO
const projectDeleteButton = document.querySelectorAll('.project-delete-button');

// CICLO L'ARRAY CONTENENTE TUTTI I DELETE_BUTTON
projectDeleteButton.forEach((button) => {

    // PER OGNI DELETE_BUTTON, AGGIUNGO UN EVENT_LISTENER "CLICK"
    button.addEventListener('click', (event) => {

        // QUANDO L'UTENTE CLICCA SUL DELETE_BUTTON, IL FORM NON VIENE AVVIATO GRAZIE A QUESTO COMANDO
        event.preventDefault();

        // RECUPERO L'HTML DELLA MODALE "MODAL_PROJECT_DELETE", DALLA VIEW ADMIN -> PARTIALS
        const modal = document.getElementById('projectConfirmDeleteModal');

        // CREO LA MODALE COME OGGETTO DI BOOTSTRAP, PARTENDO DALL'HTML DELLA MODALE RECUPERATA PRIMA
        const bootstrapModal = new bootstrap.Modal(modal);

        // QUANDO L'UTENTE CLICCA NEL DELETE_BUTTON, MOSTRO LA "BOOTSTRAP_MODAL"
        bootstrapModal.show();

        // RECUPERO IL PULSANTE DI "CONFERMA CANCELLAZIONE" PRESENTE NELLA MODALE
        const projectConfirmDeleteButton = document.getElementById('project-confirm-delete-button');

        // AL PULSANTE DI "CONFERMA CANCELLAZIONE", AGGIUNGO UN EVENT_LISTENER "CLICK"
        projectConfirmDeleteButton.addEventListener('click', () => {

            // RECUPERO IL "DELETE_BUTTON", ED ESEGUO LA FORM DI CANCELLAZIONE
            button.submit();
        })
    })
})