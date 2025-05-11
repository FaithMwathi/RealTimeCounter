const textareaEl = document.getElementById("textarea");
const totalCountEl = document.getElementById("totalCharacters");
const remainingEl = document.getElementById("remainingCharacters");


textareaEl.addEventListener("keyup", ()=>{

  updateCounter();
})

function updateCounter(){
    totalCountEl.innerText  = textareaEl.value.length;
    remainingEl.innerText= textareaEl.getAttribute("maxlength") - textareaEl.value.length
}
