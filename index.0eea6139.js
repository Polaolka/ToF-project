const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtns:document.querySelectorAll("[data-modal-close]"),sendModalBtn:document.querySelector('[data-action="send"'),modal:document.querySelector("[data-modal]"),modalForm:document.querySelector(".modal-wrapper"),gratitudePopup:document.querySelector(".modal-gratitude"),spinnerEl:document.querySelector(".spinner")};function d(d){d.preventDefault(),"send"===d.target.dataset.action?(e.spinnerEl.classList.remove("visually-hidden"),e.modalForm.classList.add("visually-hidden"),setTimeout((()=>{e.gratitudePopup.classList.remove("visually-hidden"),e.spinnerEl.classList.add("visually-hidden")}),500)):(e.modal.classList.toggle("is-hidden"),setTimeout((()=>{e.modalForm.classList.remove("visually-hidden"),e.gratitudePopup.classList.add("visually-hidden")}),500))}e.openModalBtn.forEach((e=>{e.addEventListener("click",d)})),e.closeModalBtns.forEach((e=>{e.addEventListener("click",d)})),e.sendModalBtn.addEventListener("click",d);
//# sourceMappingURL=index.0eea6139.js.map
