window.addEventListener('load', windowLoad)

function windowLoad() {
  if (window.innerWidth > 1024) {
    const accordionFirstItem = document.querySelector('.app-accordion__item.step-1')
    if (accordionFirstItem) {
      const accordionFirstButton = accordionFirstItem.querySelector('.app-accordion__btn')
      if (accordionFirstButton) {
        accordionFirstButton.classList.add('active')
      }
    }

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
  const btnAccordion = targetElement.closest('.app-accordion__btn')
  if (!btnAccordion) return

  const accordionItem = btnAccordion.closest('.app-accordion__item')
  if (!accordionItem) return

  const accordionContent = accordionItem.querySelector('.app-accordion__content')

  const isDesktop = window.innerWidth > 1024

  if (isDesktop) {
    //desktop

    //if you click on the same active button, we do nothing
    if (btnAccordion.classList.contains('active')) return

    // Remove active from all buttons
    document.querySelectorAll('.app-accordion__btn').forEach((btn) => {
      btn.classList.remove('active')
    })

    document.querySelectorAll('.app-accordion__content').forEach((content) => {
      content.classList.remove('active')
    })

    //Remove previous clones
    document.querySelectorAll('.app-accordion__clone').forEach((clone) => clone.remove())

    //Add active to the newly clicked button
    btnAccordion.classList.add('active')
    accordionContent.classList.add('active')

    //add a clone
    cloneAndInsertH3(btnAccordion)
  } else {
    //mobile

    const isAlreadyActive = btnAccordion.classList.contains('active')

    // Знімаємо active з усіх
    document.querySelectorAll('.app-accordion__btn').forEach((btn) => {
      btn.classList.remove('active')
    })
    document.querySelectorAll('.app-accordion__content').forEach((content) => {
      content.classList.remove('active')
    })
    document.querySelectorAll('.app-accordion__clone').forEach((clone) => clone.remove())

    if (!isAlreadyActive) {
      btnAccordion.classList.add('active')
      accordionContent.classList.add('active')
    }
  }
}

function showCloneForActiveButton() {
  const activeButton = document.querySelector('.app-accordion__btn.active')
  if (activeButton) {
    document.querySelectorAll('.app-accordion__clone').forEach((clone) => {
      clone.remove()
    })
    cloneAndInsertH3(activeButton)

    const accordionItem = activeButton.closest('.app-accordion__item')
    const accordionContent = accordionItem.querySelector('.app-accordion__content')
    accordionContent.classList.add('active')
  }
}

function cloneAndInsertH3(button) {
  const h3 = button.querySelector('h3')
  const accordion = button.closest('.app-accordion')
  const circle = accordion.querySelector('.app-accordion__circle')
  if (h3) {
    const h3Clone = h3.cloneNode(true)
    h3Clone.classList.add('app-accordion__clone')
    circle.insertAdjacentElement('afterbegin', h3Clone)
  }
}
