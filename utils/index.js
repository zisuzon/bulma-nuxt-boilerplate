import _ from 'lodash'

const utils = {}
const storage = global.localStorage

export const extend = _.assign
utils.extend = _.assign

export function validateEmail (email) {
  // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var re = ''
  return re.test(email)
}
utils.validateEmail = validateEmail

export function setLocal (key, val) {
  return storage.setItem(key, JSON.stringify(val))
}
utils.setLocal = setLocal

export function getLocal (key) {
  return JSON.parse(storage.getItem(key))
}
utils.getLocal = getLocal

export function replaceMarkdownLinks (text) {
  return text.replace(/(!\[.*?\]\()(.+?)(\))/g, function replace (whole, a, b, c) {
    return a + utils.imageUrl(b) + c
  })
}
utils.replaceMarkdownLinks = replaceMarkdownLinks

export const local = {
  get: getLocal,
  set: setLocal
}
utils.local = local

export function stop (e) {
  return e && e.preventDefault && e.preventDefault() && e.stopPropagation && e.stopPropagation()
}
utils.stop = stop

export function clone (obj) {
  return JSON.parse(JSON.stringify(obj))
}
utils.clone = clone

function patchUrl (src) {
  src = src.trim()
  if (src.search(process.env.dataUrlRoot) > -1) {
    return src
  }
  if (src.search('http') > -1) {
    return src
  }
  if (src.search('/') === 0) {
    return src
  }
  return src.replace('storage/', `${process.env.dataUrlRoot}/storage/`)
}

export function imageUrl (src) {
  return patchUrl(src)
}
utils.imageUrl = imageUrl

export function resourceUrl (src) {
  return utils.imageUrl(src)
}
utils.resourceUrl = resourceUrl

export function iconSlug (src, inline = false) {
  const suffix = inline && (src.search('inline') === -1) ? 'inline' : ''
  if (src.search('icon') > -1) {
    return _.filter([src, suffix], _.identity).join('-')
  }
  return _.filter(['icon', src, suffix], _.identity).join('-')
}
utils.iconSlug = iconSlug

export default utils
