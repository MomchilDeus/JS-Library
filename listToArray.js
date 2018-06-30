const listToArray = function(list) {
  if (list.rest == null) return list.value
  else return [list.value].concat(listToArray(list.rest))
}
