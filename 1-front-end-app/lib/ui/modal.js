export default function (window) {
    const modalBackDropDiv = window.document.createElement('div');
    modalBackDropDiv.classList.add('modal-backdrop');
    modalBackDropDiv.innerHTML = `
    <div class="modal-card">
        <p>Uniqe email of this gravatar is: <span class="gravatar-email"></span></p>
        <span class="closeButton">&times</span>
    </div>
    `;
    return modalBackDropDiv;
  }
  