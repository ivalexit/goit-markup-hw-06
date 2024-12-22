(() => {
    const refs = {
      openDialogBtn: document.querySelector("[data-dialog-open]"),
      closeDialogBtn: document.querySelector("[data-dialog-close]"),
      dialog: document.querySelector("[data-dialog]"),
    };
  
    refs.openDialogBtn.addEventListener("click", toggleDialog);
    refs.closeDialogBtn.addEventListener("click", toggleDialog);
  
    refs.dialog.addEventListener("click", (event) => {
      if (event.target === refs.dialog) {
        toggleDialog();
      }
    });
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && refs.dialog.classList.contains("is-visible")) {
        toggleDialog();
      }
    });
  
    function toggleDialog() {
      refs.dialog.classList.toggle("is-visible");
    }
  })();