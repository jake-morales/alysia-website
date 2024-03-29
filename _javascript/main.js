let tabs = document.querySelectorAll('.tabs li');
let tab_contents = document.querySelectorAll('.tab-content');

// Switches tabs
tabs.forEach((tab, index) => {
  if(tab.textContent == "CV") {
    tab.addEventListener('click', () => {
      window.location.href = "/AlysiaBurbidge_CV.pdf"
    })
    return
  }
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove("is-active"))
    tab_contents.forEach((tc) => tc.classList.add("is-hidden"))
    tabs[index].classList.add("is-active")
    tab_contents[index].classList.remove("is-hidden")
  });
})