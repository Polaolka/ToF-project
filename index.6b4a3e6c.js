!function(){var e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtns:document.querySelectorAll("[data-modal-close]"),sendModalBtn:document.querySelector('[data-action="send"'),modal:document.querySelector("[data-modal]"),modalForm:document.querySelector(".modal-wrapper"),gratitudePopup:document.querySelector(".modal-gratitude"),spinnerEl:document.querySelector(".spinner")};function t(t){t.preventDefault(),"send"===t.target.dataset.action?(e.spinnerEl.classList.remove("visually-hidden"),e.modalForm.classList.add("visually-hidden"),setTimeout((function(){e.gratitudePopup.classList.remove("visually-hidden"),e.spinnerEl.classList.add("visually-hidden")}),500)):(e.modal.classList.toggle("is-hidden"),setTimeout((function(){e.modalForm.classList.remove("visually-hidden"),e.gratitudePopup.classList.add("visually-hidden")}),500))}e.openModalBtn.forEach((function(e){e.addEventListener("click",t)})),e.closeModalBtns.forEach((function(e){e.addEventListener("click",t)})),e.sendModalBtn.addEventListener("click",t)}();
//# sourceMappingURL=index.6b4a3e6c.js.map