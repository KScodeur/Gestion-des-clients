let modalAjout = document.getElementById("modalAjout");

// Get the button that opens the modal
let ajouter = document.getElementById("ajouter");

// Get the <span> element that closes the modal
let  toCLose = document.getElementsByClassName("fermer")[0];

// When the user clicks on the button, open the modal
ajouter.onclick = function() {
    modalAjout.style.display = "flex";
    // modalAjout.style.justify-content = "center";

}

// When the user clicks on <span> (x), close the modal
toCLose.onclick = function() {
  modalAjout.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalAjout) {
    modalAjout.style.display = "none";
  }
} 