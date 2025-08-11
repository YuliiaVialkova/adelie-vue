window.addEventListener('load', windowLoad)

function windowLoad() {
  if (window.innerWidth > 1024) {
    showCloneForActiveButton()
  }
  document.addEventListener('click', documentAction)
}

function documentAction(e) {
  const targetElement = e.target

  //open-mobile-menu
  const burgerMenu = targetElement.closest('.icon-burger')
  if (burgerMenu) {
    document.documentElement.classList.toggle('open-menu')
  }
  //click on accordion button
  const btnAccordion = targetElement.closest('.accordion-btn')
  if (!btnAccordion) return

  const accordionItem = btnAccordion.closest('.accordion-item')
  const accordionContent = accordionItem.querySelector('.accordion-content')

  const isActive = btnAccordion.classList.contains('active')
  const isDesktop = window.innerWidth > 1024

  if (isDesktop) {
    //desktop

    //if you click on the same active button, we do nothing
    if (isActive) return

    // Remove active from all buttons
    document.querySelectorAll('.accordion-btn').forEach((btn) => {
      btn.classList.remove('active')
    })

    document.querySelectorAll('.accordion-content').forEach((content) => {
      content.classList.remove('active')
    })

    //Remove previous clones
    document.querySelectorAll('.accordion-clone').forEach((clone) => clone.remove())

    //Add active to the newly clicked button
    btnAccordion.classList.add('active')
    accordionContent.classList.add('active')

    //add a clone
    cloneAndInsertH3(btnAccordion)
  } else {
    //mobile
    if (isActive) {
      //If you click on an open one, close it
      btnAccordion.classList.remove('active')
      accordionContent.classList.remove('active')
    } else {
      //closed all others
      document.querySelectorAll('.accordion-btn').forEach((btn) => {
        btn.classList.remove('active')
      })

      document.querySelectorAll('.accordion-content').forEach((content) => {
        content.classList.remove('active')
      })
      //open new one
      btnAccordion.classList.add('active')
      accordionContent.classList.add('active')
    }
  }
}

function showCloneForActiveButton() {
  const activeButton = document.querySelector('.accordion-btn.active')
  if (activeButton) {
    document.querySelectorAll('.accordion-clone').forEach((clone) => {
      clone.remove()
    })
    cloneAndInsertH3(activeButton)

    const accordionItem = activeButton.closest('.accordion-item')
    const accordionContent = accordionItem.querySelector('.accordion-content')
    accordionContent.classList.add('active')
  }
}
function cloneAndInsertH3(button) {
  const h3 = button.querySelector('h3')
  if (h3) {
    const h3Clone = h3.cloneNode(true)
    h3Clone.classList.add('accordion-clone')
    button.insertAdjacentElement('afterend', h3Clone)
  }
}
