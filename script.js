var nav = document.querySelector('.navbar')
window.onscroll = ()=>{
    // let pageHeight = window.innerHeight;
    this.scrollY > 20 ? nav.classList.add("sticky"):
    nav.classList.remove("sticky")
}
