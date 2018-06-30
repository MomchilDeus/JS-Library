const arrayToList = function(arr) {
  if (!arr.length) return null
  return { value: arr.shift(), rest: arrayToList() }
}
