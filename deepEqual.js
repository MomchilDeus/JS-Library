// Compare objects by their values instead of their identity
function deepEqual(obj1, obj2) {
  for (let prop in obj1) {
    if (typeof obj1[prop] == 'object' && typeof obj2[prop] == 'object') deepEqual(obj1[prop], obj2[prop])
    else if (obj1[prop] === obj2[prop]) continue
    else return false
  }
  return true
}
