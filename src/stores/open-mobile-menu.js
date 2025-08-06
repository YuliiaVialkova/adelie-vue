window.addEventListener('load', windowLoad)

function windowLoad() {
  document.addEventListener('click', documentAction)
}

function documentAction(e) {
  const targetElement = e.target
  console.log(targetElement)
  const burgerMenu = targetElement.closest('.icon-burger')
  if (burgerMenu) {
    document.documentElement.classList.toggle('open-menu')
  }
}
