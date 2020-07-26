export default function (window, text) {
  const headerElem = window.document.createElement('header')
  const titleElem = window.document.createElement('h1')
  titleElem.innerText = text || 'Facewall'

  headerElem.appendChild(titleElem)

  return headerElem
}
