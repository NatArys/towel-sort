module.exports = function towelSort (matrix) {
let result=matrix.map((v,i) => (i%2)? v.reverse() : v).flat()
return result;
}
