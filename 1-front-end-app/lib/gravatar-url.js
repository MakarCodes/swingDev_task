import md5 from 'js-md5'

// towrzenie unikatowego emmail dla gravatara


export default function gravatarUrl (size) {
  const email = Math.random().toString(36).substring(7) + '@gmail.com'
  return `http://www.gravatar.com/avatar/${md5(email)}?d=identicon&s=${size}`
}
