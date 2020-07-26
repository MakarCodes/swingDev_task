import header from './header'
import modal from './modal'
import gravatars from './gravatars'


export function setupListeners (window, gravatarContainer) {
  window.addEventListener('scroll', () => {
    gravatars(window, gravatarContainer)
  })

  window.addEventListener('resize', () => {
    gravatars(window, gravatarContainer)
  })

  document.querySelector('.modal-backdrop').addEventListener('click', e => {
    const modal = document.querySelector('.modal-backdrop');
    const closeBtn = document.querySelector('.closeButton');
    if(e.target == modal || e.target == closeBtn) {
      document.querySelectorAll('.gravatars img').forEach(gravatar => {
        if(gravatar.classList.contains('is-highlighted')) {
          gravatar.classList.remove('is-highlighted');
        }
      })
      document.querySelector('.modal-backdrop').style.display = 'none';
    }
  })
}



export function init (window, root) {
  root.appendChild(header(window))
  root.appendChild(modal(window))

  const gravatarContainer = window.document.createElement('div')
  gravatarContainer.classList.add('gravatars')

  root.appendChild(gravatarContainer)

  gravatars(window, gravatarContainer)

  setupListeners(window, gravatarContainer)
}
