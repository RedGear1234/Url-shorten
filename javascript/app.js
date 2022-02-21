// hambuger menu 

function funclick() {
    let remove = document.getElementById("nav-link-id")
    remove.classList.toggle("nav-links")
}

// shorten url function

let inputValue = document.getElementById("inputValue")
let inputForm = document.querySelector(".horizontal-card")
let copyLink = document.querySelector('.copy-button')
let generatedlink = document.querySelector('.generated-link')

inputForm.addEventListener('submit', (e)=>{
    e.preventDefault()
     fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue.value}`)
    .then((res) => res.json())
    .then((data) => shortLink(data))
})

function shortLink(data){
    generatedlink.value = `${data.result.short_link}`
}


copyLink.addEventListener('click',()=>{
    let generatedLink  = document.querySelector('.generated-link')
    generatedLink.select()
    generatedLink.setSelectionRange(0, 999999)
    navigator.clipboard.writeText(generatedLink.value);
})