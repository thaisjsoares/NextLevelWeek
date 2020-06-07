function toggleModal(event) {
    
    const modal = document.querySelector("div[id=modal]")
    modal.classList.toggle("hide")
    
}
    
document
    .querySelector("main a")
    .addEventListener("click", toggleModal)

document
    .querySelector("#modal .header a")
    .addEventListener("click", toggleModal)