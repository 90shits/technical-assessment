/**
 * Sort Array object by absolute key (ASC)
 * a greater than b then 1 & otherwise
 * @param array {Array}
 * @param sortKey {String}
 * @returns {*} void or Array sorted
 */
export const sortArrayObjectByKey = (array, sortKey) => {
  if (array.length <= 0 || !sortKey) return
  return array.sort(
    (a, b) => (a[sortKey] > b[sortKey]) ? 1 : -1
  )
}
