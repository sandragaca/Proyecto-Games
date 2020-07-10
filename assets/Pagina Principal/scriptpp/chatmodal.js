const chatContainer = document.getElementById("chat-container");
const chatTxt = document.getElementById("chat-txt");
const chatInput = document.getElementById("chat-input");
const chatBtn = document.getElementById("chat-btn");
const abritChatBtn = document.getElementById("abrir-chat-btn");
const modalContainer = document.getElementById("modal-container");
const closeModal = document.getElementById("close-modal");

let chatMensajes = [];
// funcion agregar elementos al array
function enviarMensajes() {
  if (chatInput.value != "") {
    chatTxt.innerHTML = "";
    const chatInputVal = chatInput.value;
    chatMensajes.push(chatInputVal);
    escribirDom();
  }
}
// Funcion escribir en el dom
function escribirDom() {
  chatMensajes.forEach((element) => {
    chatTxt.innerHTML += `<li class="txt-list" id="txt-list"> <p>${element}</p></li>`;
  });
}
// EVENTOS
chatBtn.addEventListener("click", enviarMensajes);
chatBtn.addEventListener("click", () => {
  chatInput.value = "";
});
abritChatBtn.addEventListener("click", () => {
  chatContainer.classList.toggle("none");
});
closeModal.addEventListener("click", () => {
  modalContainer.classList.add("d-none");
});
