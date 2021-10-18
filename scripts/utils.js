
function openModal(modal) {
  modal.classList.add('modal_open')
  document.addEventListener('keydown', closeByEscape)
}

function closeModal(modal) {
  modal.classList.add('fade-out')
  setTimeout(() => {
    modal.classList.remove('modal_open')
    modal.classList.remove('fade-out')
  }, 250)
  document.removeEventListener('keydown', closeByEscape)
}

function closeByEscape(e) {
  if (e.key === 'Escape') {
    const openedModal = document.querySelector('.modal_open')
    closeModal(openedModal)
  }
}

function setCloseByClickListener(modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closeModal(modal)
    }
  })
}

export {openModal, closeModal, setCloseByClickListener}